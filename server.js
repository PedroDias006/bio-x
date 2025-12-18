// server.js
import bcrypt from "bcryptjs"; // 🔒 para criptografar senhas
import chalk from "chalk";
import cors from "cors";
import express from "express";
import fs from "fs";
import { createServer } from "http";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { Server } from "socket.io";

const app = express();
app.use(cors());
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

// ---------------------- 💬 CHAT DO FÓRUM ----------------------
let onlineUsers = [];

io.on("connection", (socket) => {
  console.log(chalk.green(`🟢 Novo usuário conectado: ${socket.id}`));

  socket.on("registerUser", (user) => {
    onlineUsers.push({ ...user, id: socket.id });
    console.log(chalk.blue(`👤 Usuário registrado: ${user.name}`));
    io.emit("onlineUsers", onlineUsers);
  });

  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
    console.log(chalk.cyan(`➡️  ${socket.id} entrou na sala ${roomId}`));
  });

  socket.on("leaveRoom", (roomId) => {
    socket.leave(roomId);
    console.log(chalk.yellow(`⬅️  ${socket.id} saiu da sala ${roomId}`));
  });

  socket.on("chatMessage", (msg) => {
    // adiciona data e hora completas
    const now = new Date();
    msg.timestamp = now.toLocaleString("pt-BR", {
      dateStyle: "short",
      timeStyle: "short",
    });
    console.log(chalk.magenta(`💬 [${msg.roomId}] ${msg.author}: ${msg.text}`));
    io.to(msg.roomId).emit("message", msg);
  });

  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter((u) => u.id !== socket.id);
    io.emit("onlineUsers", onlineUsers);
    console.log(chalk.red(`🔴 Usuário desconectado: ${socket.id}`));
  });
});

// ---------------------- 🧠 BANCO DE DADOS ----------------------
const adapter = new JSONFile("db.json");
const db = new Low(adapter, { users: [] });

const backupAdapter = new JSONFile("emails_backup.json");
const backupDb = new Low(backupAdapter, { contacts: [] });

// 🔒 Funções de anonimização
function anonymizeEmail(email) {
  const [name, domain] = email.split("@");
  return name.slice(0, 2) + "***@" + domain;
}
function anonymizePhone(phone) {
  if (!phone) return "";
  return phone.slice(0, 2) + "***" + phone.slice(-3);
}

// 💾 Função de backup diário
function createDailyBackup() {
  const date = new Date();
  const dateStr = date.toISOString().split("T")[0];
  const backupFolder = "backups";
  const backupFile = `${backupFolder}/backup_${dateStr}.json`;

  if (!fs.existsSync(backupFolder)) fs.mkdirSync(backupFolder);

  fs.readFile("emails_backup.json", "utf8", (err, data) => {
    if (err) return console.error("❌ Erro ao ler backup base:", err);
    try {
      const parsed = JSON.parse(data);
      const safeData = parsed.contacts.map((c) => ({
        email: anonymizeEmail(c.email),
        phone: anonymizePhone(c.phone),
        countryCode: c.countryCode,
        timestamp: c.timestamp,
      }));

      fs.writeFileSync(
        backupFile,
        JSON.stringify({ contacts: safeData }, null, 2)
      );
      console.log(chalk.green(`✅ Backup diário criado: ${backupFile}`));
    } catch (err2) {
      console.error("❌ Erro ao gerar backup diário:", err2);
    }
  });
}
createDailyBackup();

// 🚫 Lista simples de palavrões (pode expandir)
const badWords = [
  "porn", "fuck", "puta", "merda", "caralho", "bosta", "pqp", "cú", "sexo", "buceta",
  "pau", "rola", "piroca", "pênis", "vagina", "cu", "puto", "otário", "fdp"
];
const hasBadWord = (text) =>
  badWords.some((word) => text.toLowerCase().includes(word));

// ---------------------- 🧩 ROTAS REST ----------------------

// 🧱 Cadastro de usuário (com senha criptografada e verificação de nome)
app.post("/users", async (req, res) => {
  const { email, password, phone, countryCode, name, avatar, promoChoice, acceptedTerms } = req.body;

  if (!email || !password || !name)
    return res.status(400).json({ success: false, error: "E-mail, nome e senha são obrigatórios." });

  await db.read();
  await backupDb.read();

  // ❌ Nome ofensivo
  if (hasBadWord(name)) {
    return res.status(400).json({ success: false, error: "Nome de usuário contém termos proibidos." });
  }

  // ❌ Nome repetido
  const nameExists = db.data.users.find(
    (u) => u.name.toLowerCase() === name.toLowerCase()
  );
  if (nameExists) {
    return res.status(400).json({ success: false, error: "Nome de usuário já está em uso." });
  }

  // ❌ E-mail repetido
  const existingUser = db.data.users.find((u) => u.email === email);
  if (existingUser)
    return res.status(409).json({ success: false, error: "E-mail já cadastrado." });

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: Date.now(),
    email,
    password: hashedPassword,
    phone,
    countryCode: countryCode || "+55",
    name,
    avatar,
    promoChoice,
    acceptedTerms,
    timestamp: new Date().toISOString(),
  };

  db.data.users.push(newUser);
  await db.write();

  if (!backupDb.data.contacts.find((c) => c.email === email)) {
    backupDb.data.contacts.push({
      email,
      phone,
      countryCode: countryCode || "+55",
      timestamp: new Date().toISOString(),
    });
    await backupDb.write();
  }

  res.status(201).json({
    success: true,
    user: { id: newUser.id, name, email, avatar },
    message: "Usuário cadastrado com sucesso!",
  });
});

// 🔐 Login com validação de senha
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  await db.read();

  const user = db.data.users.find((u) => u.email === email);
  if (!user) return res.status(404).json({ success: false, error: "Usuário não encontrado" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(401).json({ success: false, error: "Senha incorreta" });

  res.json({
    success: true,
    user: { id: user.id, name: user.name, email: user.email, avatar: user.avatar },
  });
});

// 🔍 Lista de contatos (para admin ou backup)
app.get("/contacts", async (req, res) => {
  await backupDb.read();
  res.json(backupDb.data.contacts);
});

// 💾 Criar backup manual
app.get("/backup-now", async (req, res) => {
  try {
    createDailyBackup();
    res.json({ success: true, message: "Backup manual criado com sucesso!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Teste básico
app.get("/", (req, res) => {
  res.send("✅ Servidor BIO-X Fórum + Login + Filtro de nomes ativo!");
});

// ---------------------- 🚀 INICIAR SERVIDOR ----------------------
const PORT = 3001;
httpServer.listen(PORT, () => {
  console.log(chalk.greenBright(`🚀 Servidor do BIO-X rodando na porta ${PORT}`));
  console.log(chalk.gray(`📡 Acesse o front-end em http://localhost:3000`));
});

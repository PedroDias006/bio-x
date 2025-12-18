import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const { messages } = await req.json();

  const formattedMessages = messages.map((m: any) => ({
    role: m.from === "user" ? "user" : "assistant",
    content: m.text,
  }));

  formattedMessages.unshift({
    role: "system",
    content: `Você é a Bia, assistente virtual da BIO-X Microorganismos.
    Sua missão é ajudar agricultores e clientes com simpatia e conhecimento técnico.
    Fale de forma clara, breve e acolhedora. 
    Se perceber que a dúvida exige suporte humano, diga algo como 
    "Parece que essa questão precisa de um atendente real da BIO-X".`,
  });

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: formattedMessages,
      temperature: 0.8,
    });

    const reply = completion.choices[0]?.message?.content || "Desculpe, não entendi 😅";
    return NextResponse.json({ reply });
  } catch (err) {
    return NextResponse.json(
      { reply: "Erro ao conectar com o servidor de IA 😔" },
      { status: 500 }
    );
  }
}

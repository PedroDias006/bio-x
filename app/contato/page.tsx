"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";

export default function ContatoPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [segment, setSegment] = useState("");
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState("idle");

  const valid =
    name.length > 1 &&
    email.includes("@") &&
    message.length > 5 &&
    consent;

  const pill =
    "px-5 py-2 rounded-full bg-[#009CA6] text-white font-medium hover:bg-[#007f88] transition text-sm";

  async function onSubmit(e) {
    e.preventDefault();
    if (!valid) return;
    setSent("sending");

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          segment,
          message,
        }),
      });

      setSent("ok");
    } catch {
      setSent("idle");
      alert("Erro ao enviar.");
    }
  }

  return (
    <div className="w-full px-6 max-w-[1400px] mx-auto pt-32 pb-20">

      {/* 🔥 GRID PERFEITO — EXATAMENTE COMO NO MODELO ANTIGO */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_250px] gap-10">

        {/* ⭐ COLUNA ESQUERDA */}
        <div className="flex flex-col gap-8">

          {/* ENDEREÇO */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Endereço</CardTitle>
              <CardDescription>Matriz</CardDescription>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
              <p>Rua Eli Moreira Duarte, 301 — Granjas Alvorada, Juatuba/MG</p>
              <p>CEP 35675-000</p>
              <p>CNPJ: 38.130.594/0001-28</p>
            </CardContent>
          </Card>

          {/* CONTATOS */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Contatos</CardTitle>
              <CardDescription>Canais oficiais</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <button className={pill}>(31) 2010-6080</button>
                <button className={pill}>(31) 99523-5778</button>
              </div>

              <button className={pill}>
                biox@bioxmicroorganismos.com.br
              </button>

              <div className="flex flex-wrap gap-3">
                <button className="px-5 py-2 rounded-full bg-slate-700 text-white text-sm">
                  www.bioxmicroorganismos.com.br
                </button>
                <button className="px-5 py-2 rounded-full bg-slate-700 text-white text-sm">
                  @agriculturaunica
                </button>
              </div>
            </CardContent>
          </Card>

          {/* SEGURANÇA */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Confiança & Segurança
              </CardTitle>
              <CardDescription>Boas práticas e conformidade</CardDescription>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
              <p>• LGPD e processos auditáveis</p>
              <p>• Rastreabilidade de lotes e documentação técnica</p>
              <p>• Suporte técnico do diagnóstico à aplicação</p>
            </CardContent>
          </Card>
        </div>

        {/* ⭐ COLUNA CENTRAL — FORMULÁRIO */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Envie sua mensagem</CardTitle>
            <CardDescription>Campos com * são obrigatórios</CardDescription>
          </CardHeader>

          <CardContent>
            <form className="space-y-4" onSubmit={onSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Seu nome *" value={name} onChange={(e) => setName(e.target.value)} />
                <Input placeholder="Empresa (opcional)" value={company} onChange={(e) => setCompany(e.target.value)} />
                <Input placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>

              <p className="text-sm">Segmento de interesse</p>
              <div className="flex flex-wrap gap-3">
                {["Agricultura", "Animal", "Saneamento", "Outro"].map((seg) => (
                  <button
                    key={seg}
                    type="button"
                    className={`${pill} ${segment === seg ? "!bg-[#007f88]" : ""}`}
                    onClick={() => setSegment(seg)}
                  >
                    {seg}
                  </button>
                ))}
              </div>

              <Textarea
                placeholder="Mensagem *"
                className="min-h-[120px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <label className="flex items-center gap-2 text-sm">
                <Checkbox checked={consent} onCheckedChange={(v) => setConsent(v === true)} />
                Aceito a Política de Privacidade.
              </label>

              <Button
                disabled={!valid || sent === "sending"}
                className="bg-[#009CA6] hover:bg-[#007f88] text-white"
              >
                {sent === "sending"
                  ? "Enviando..."
                  : sent === "ok"
                  ? "Enviado!"
                  : "Enviar mensagem"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* ⭐ COLUNA DIREITA — LOGO FIXA NO TOPO */}
        <div className="flex justify-center lg:justify-end items-start pt-4">
  <Image
    src="/images/logo_darkblue3.png"
    width={180}
    height={180}
    alt="BIO-X"
    className="opacity-95 drop-shadow-lg select-none pointer-events-none"
    priority
  />
</div>
      </div>

      {/* ⭐ MAPA EMBAIXO — FULL WIDTH */}
      <div className="mt-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              Localização — Matriz (Juatuba/MG)
            </CardTitle>
            <CardDescription>
              Rua Eli Moreira Duarte, 301 — Granjas Alvorada, Juatuba/MG — CEP 35675-000
            </CardDescription>
          </CardHeader>

          <CardContent>
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                "Rua Eli Moreira Duarte, 301 — Granjas Alvorada, Juatuba/MG"
              )}&output=embed`}
              className="w-full h-80 rounded-md border"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

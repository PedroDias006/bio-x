import "@/globals.css";
import type { Metadata } from "next";
// 1. Importamos a Inter (textos) e a Montserrat (para o título)
import { Inter, Montserrat } from "next/font/google";
import ClientLayoutWrapper from "./ClientLayoutWrapper";

// Configuração da fonte padrão (Textos)
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap", 
});

// 2. Configuração da fonte do Título
const fonteTitulo = Montserrat({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-titulo", // Criamos essa variável para chamar lá na Home
});

export const metadata: Metadata = {
  title: "AETHERIS",
  description: "Soluções vivas para um futuro sustentável.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      {/* 3. Injetamos a variável da fonte do título junto com a fonte padrão */}
      <body className={`${inter.className} ${fonteTitulo.variable}`}>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
import "@/globals.css";
import type { Metadata, Viewport } from "next";
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

// 3. Configuração do Viewport para domar o Safari no iOS
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Previne zoom acidental ao tocar em botões
  userScalable: false,
  viewportFit: "cover", // Essencial: Libera o conteúdo para preencher a tela inteira, ativando a Safe Area
  // Força a barra de status a ficar preta, independente do tema do celular
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000000" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      {/* 4. Injetamos a variável da fonte do título e forçamos o bg-black na raiz do sistema */}
      <body className={`${inter.className} ${fonteTitulo.variable} bg-black`}>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
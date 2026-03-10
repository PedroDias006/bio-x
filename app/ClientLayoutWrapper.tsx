"use client";

import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import { usePathname } from "next/navigation";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Esconder footer só no /forum
  const hideFooter = pathname?.startsWith("/forum");

  return (
    // Removido o padding inline e o cálculo de useEffect
    <div className="flex flex-col min-h-screen w-full relative">
      <NavBar />
      
      {/* O main agora ocupa a tela toda desde o topo. 
          As páginas internas (como a Home) cuidam do seu próprio padding! */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* mostra o footer em todas as páginas, exceto /forum */}
      {!hideFooter && <Footer />}
    </div>
  );
}
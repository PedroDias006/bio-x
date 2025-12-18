"use client";

import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [offset, setOffset] = useState(0);
  const pathname = usePathname();

  // Esconder footer só no /forum
  const hideFooter = pathname.startsWith("/forum");

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    const updateHeight = () => {
      setOffset(navbar.offsetHeight);
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(navbar);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <NavBar />
      <main style={{ paddingTop: offset }}>{children}</main>

      {/* mostra o footer em todas as páginas, exceto /forum */}
      {!hideFooter && <Footer />}
    </div>
  );
}

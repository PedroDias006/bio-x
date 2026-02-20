"use client";

import { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";

export default function AetherisNavWrapper() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState<number>(120);

  // [AETHERIS SYSTEM] Protocolo de calibração dinâmica de viewport
  useEffect(() => {
    if (!navbarRef.current) return;

    const updateHeight = () => {
      const height = navbarRef.current?.offsetHeight || 120;
      setNavbarHeight(height);
      
      // Injeta a variável no root para sincronizar o layout do sistema
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${height + 10}px`
      );
    };

    updateHeight();
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(navbarRef.current);

    window.addEventListener("resize", updateHeight);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <>
      <div ref={navbarRef}>
        <NavBar />
      </div>

      {/* [AETHERIS SYSTEM] Renderização de padding dinâmico na thread global */}
      <style jsx global>{`
        main {
          padding-top: var(--navbar-height, 120px);
          transition: padding-top 0.3s ease;
        }
      `}</style>
    </>
  );
}
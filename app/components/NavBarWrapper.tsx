"use client";

import { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";

export default function NavBarWrapper() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState<number>(120);

  useEffect(() => {
    if (!navbarRef.current) return;

    const updateHeight = () => {
      const height = navbarRef.current?.offsetHeight || 120;
      setNavbarHeight(height);
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

      {/* aplica padding dinâmico */}
      <style jsx global>{`
        main {
          padding-top: var(--navbar-height, 120px);
          transition: padding-top 0.3s ease;
        }
      `}</style>
    </>
  );
}

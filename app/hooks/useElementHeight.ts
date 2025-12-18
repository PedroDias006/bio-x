"use client";

import { useEffect, useState } from "react";

export function useElementHeight(elementId: string) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = document.getElementById(elementId);
    if (!el) return;

    const observer = new ResizeObserver(() => {
      setHeight(el.offsetHeight);
    });

    observer.observe(el);

    // altura inicial
    setHeight(el.offsetHeight);

    return () => observer.disconnect();
  }, [elementId]);

  return height;
}

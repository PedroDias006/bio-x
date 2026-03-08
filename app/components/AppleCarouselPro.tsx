"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
  fadeColorClassName?: string;
  sidePaddingClassName?: string;
  gapClassName?: string;
  scrollPaddingPx?: number;
  autoHideControls?: boolean;
  focusEffect?: boolean;
};

export default function AppleCarouselPro({
  children,
  className = "",
  trackClassName = "",
  fadeColorClassName = "from-[#F5F5F7]",
  sidePaddingClassName = "pl-6 md:pl-12 pr-6",
  gapClassName = "gap-6",
  scrollPaddingPx = 48,
  autoHideControls = true,
  focusEffect = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const [showControls, setShowControls] = useState(!autoHideControls);

  const hideTimer = useRef<number | null>(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const moved = useRef(false);

  const lastX = useRef(0);
  const lastT = useRef(0);
  const velocity = useRef(0);

  const raf = useRef<number | null>(null);

  const showControlsNow = () => {
    if (!autoHideControls) return;
    setShowControls(true);
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setShowControls(false), 1200);
  };

  const updateButtons = () => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft < max - 8);
  };

  const getNearestSnapChild = () => {
    const el = ref.current;
    if (!el) return null;
    const kids = Array.from(el.children) as HTMLElement[];
    if (!kids.length) return null;

    const trackRect = el.getBoundingClientRect();
    const centerX = trackRect.left + trackRect.width / 2;

    let best: { node: HTMLElement; dist: number } | null = null;
    for (const node of kids) {
      const r = node.getBoundingClientRect();
      const nodeCenter = r.left + r.width / 2;
      const d = Math.abs(nodeCenter - centerX);
      if (!best || d < best.dist) best = { node, dist: d };
    }
    return best?.node ?? null;
  };

  const centerChild = (child: HTMLElement) => {
    const el = ref.current;
    if (!el) return;
    const trackRect = el.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();

    const trackCenter = trackRect.left + trackRect.width / 2;
    const childCenter = childRect.left + childRect.width / 2;

    el.scrollBy({ left: childCenter - trackCenter, behavior: "smooth" });
  };

  const applyFocusEffect = () => {
    const el = ref.current;
    if (!el || !focusEffect) return;

    const kids = Array.from(el.children) as HTMLElement[];
    if (!kids.length) return;

    const trackRect = el.getBoundingClientRect();
    const centerX = trackRect.left + trackRect.width / 2;

    for (const node of kids) {
      const r = node.getBoundingClientRect();
      const nodeCenter = r.left + r.width / 2;
      const dist = Math.abs(nodeCenter - centerX);
      const t = Math.min(dist / (trackRect.width * 0.6), 1);

      const scale = 1 - t * 0.015;
      const opacity = 1 - t * 0.04;

      node.style.transform = `scale(${scale})`;
      node.style.opacity = `${opacity}`;
    }
  };

  const scheduleFocus = () => {
    if (!focusEffect) return;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => applyFocusEffect());
  };

  useEffect(() => {
    updateButtons();
    scheduleFocus();

    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      updateButtons();
      scheduleFocus();
      showControlsNow();
    };

    const onResize = () => {
      updateButtons();
      scheduleFocus();
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    const t = window.setTimeout(() => {
      updateButtons();
      scheduleFocus();
    }, 80);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(t);
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [autoHideControls, focusEffect]);

  const scrollByPage = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    showControlsNow();
    el.scrollBy({
      left: dir === "left" ? -el.clientWidth * 0.85 : el.clientWidth * 0.85,
      behavior: "smooth",
    });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    showControlsNow();
    isDown.current = true;
    moved.current = false;

    startX.current = e.pageX;
    startScrollLeft.current = el.scrollLeft;

    lastX.current = e.pageX;
    lastT.current = performance.now();
    velocity.current = 0;

    el.classList.add("cursor-grabbing");
  };

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || !isDown.current) return;

    const x = e.pageX;
    const now = performance.now();

    const dx = x - startX.current;
    const walk = dx * 1.1;

    if (Math.abs(walk) > 3) moved.current = true;
    el.scrollLeft = startScrollLeft.current - walk;

    const dt = now - lastT.current;
    if (dt > 0) {
      const vx = (x - lastX.current) / dt;
      velocity.current = vx;
      lastX.current = x;
      lastT.current = now;
    }
  };

  const release = () => {
    const el = ref.current;
    if (!el) return;

    isDown.current = false;
    el.classList.remove("cursor-grabbing");

    const v = velocity.current;
    const throwDist = -v * 260;
    if (Math.abs(throwDist) > 10) {
      el.scrollBy({ left: throwDist, behavior: "smooth" });
    }

    window.setTimeout(() => {
      const nearest = getNearestSnapChild();
      if (nearest) centerChild(nearest);
    }, 120);
  };

  const onMouseUp = () => {
    if (!isDown.current) return;
    showControlsNow();
    release();
  };

  const onMouseLeave = () => {
    if (!isDown.current) return;
    showControlsNow();
    release();
  };

  const preventClickIfDragged = (e: React.MouseEvent) => {
    if (moved.current) {
      e.preventDefault();
      e.stopPropagation();
      moved.current = false;
    }
  };

  return (
    <div className={`relative group ${className}`} onMouseMove={showControlsNow}>
      <div
        className={`pointer-events-none absolute left-0 top-0 h-full w-10 md:w-16 z-20 bg-gradient-to-r ${fadeColorClassName} to-transparent`}
      />
      <div
        className={`pointer-events-none absolute right-0 top-0 h-full w-10 md:w-16 z-20 bg-gradient-to-l ${fadeColorClassName} to-transparent`}
      />

      <button
        onClick={() => scrollByPage("left")}
        aria-label="Voltar"
        className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30
          bg-white/80 hover:bg-white backdrop-blur-lg
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          w-12 h-12 rounded-full flex items-center justify-center text-slate-800
          transition-all duration-300 hidden md:flex
          ${canLeft && showControls ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <ChevronLeft size={24} strokeWidth={2} />
      </button>

      <button
        onClick={() => scrollByPage("right")}
        aria-label="Avançar"
        className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30
          bg-white/80 hover:bg-white backdrop-blur-lg
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          w-12 h-12 rounded-full flex items-center justify-center text-slate-800
          transition-all duration-300 hidden md:flex
          ${canRight && showControls ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <ChevronRight size={24} strokeWidth={2} />
      </button>

      <div
        ref={ref}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        onClickCapture={preventClickIfDragged}
        className={`
          flex ${gapClassName} overflow-x-auto scroll-smooth
          snap-x snap-mandatory
          ${sidePaddingClassName} pb-10
          cursor-grab select-none
          [scrollbar-width:none] [-ms-overflow-style:none]
          [&::-webkit-scrollbar]:hidden
          ${trackClassName}
        `}
        style={{
          WebkitOverflowScrolling: "touch",
          scrollPaddingLeft: `${scrollPaddingPx}px`,
          scrollPaddingRight: `${scrollPaddingPx}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
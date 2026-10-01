"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrolling() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let scroller: Lenis | null = null;

    const updatePreference = () => {
      if (preference.matches) {
        scroller?.destroy();
        scroller = null;
      } else if (!scroller) {
        scroller = new Lenis({
          autoRaf: true,
          lerp: 0.12,
          smoothWheel: true,
          syncTouch: false,
          allowNestedScroll: true,
          respectReducedMotion: true,
        });
      }
    };

    const navigate = (event: MouseEvent) => {
      if (
        !scroller ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        !(event.target instanceof Element)
      )
        return;

      const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (
        !link ||
        link.hasAttribute("download") ||
        (link.target && link.target !== "_self")
      )
        return;

      let id: string;
      try {
        id = decodeURIComponent(link.hash.slice(1));
      } catch {
        return;
      }
      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      if (window.location.hash !== link.hash) {
        window.history.pushState(window.history.state, "", link.hash);
      }
      // Sections are programmatically focusable, so keyboard navigation follows
      // the destination. Focus must not jump ahead of the scroll animation.
      target.focus({ preventScroll: true });
      scroller.scrollTo(target, {
        duration: 1.25,
        lerp: 0,
        easing: (progress) => 1 - Math.pow(1 - progress, 4),
      });
    };

    const preserveKeyboardScroll = (event: KeyboardEvent) => {
      if (
        !scroller ||
        ![
          "ArrowUp",
          "ArrowDown",
          "PageUp",
          "PageDown",
          "Home",
          "End",
          " ",
        ].includes(event.key)
      )
        return;
      if (
        event.target instanceof Element &&
        event.target.closest(
          'input, textarea, select, [contenteditable="true"]',
        )
      )
        return;
      // End wheel inertia before the browser handles its normal keyboard scroll.
      scroller.scrollTo(window.scrollY, { immediate: true });
    };

    updatePreference();
    preference.addEventListener("change", updatePreference);
    document.addEventListener("click", navigate);
    window.addEventListener("keydown", preserveKeyboardScroll);

    return () => {
      preference.removeEventListener("change", updatePreference);
      document.removeEventListener("click", navigate);
      window.removeEventListener("keydown", preserveKeyboardScroll);
      scroller?.destroy();
    };
  }, []);

  return null;
}

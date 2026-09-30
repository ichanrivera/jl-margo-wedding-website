"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#celebration", label: "The celebration" },
  { href: "#entourage", label: "Our entourage" },
  { href: "#details", label: "The details" },
  { href: "#questions", label: "Questions" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    if (open) document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <a
        className="monogram"
        href="#invitation"
        aria-label="John Lauren and Marjolyn — home"
        onClick={() => setOpen(false)}
      >
        JL <span>&amp;</span> M
      </a>
      <div className="header-actions">
        <a className="nav-rsvp" href="#rsvp" onClick={() => setOpen(false)}>
          RSVP <span aria-hidden="true">↗</span>
        </a>
        <button
          id="menu-toggle"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="wedding-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
      <nav
        id="wedding-navigation"
        className={`main-nav${open ? " is-open" : ""}`}
        aria-label="Wedding navigation"
      >
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export function Countdown({ date }: { date: string }) {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const update = () =>
      setRemaining(Math.max(0, Date.parse(date) - Date.now()));
    const initialUpdate = window.setTimeout(update, 0);
    const timer = window.setInterval(update, 1000);
    return () => {
      window.clearTimeout(initialUpdate);
      window.clearInterval(timer);
    };
  }, [date]);

  const units =
    remaining === null
      ? [null, null, null, null]
      : [
          Math.floor(remaining / 86400000),
          Math.floor(remaining / 3600000) % 24,
          Math.floor(remaining / 60000) % 60,
          Math.floor(remaining / 1000) % 60,
        ];
  return (
    <div className="countdown" data-reveal>
      <p className="eyebrow">
        {remaining === 0 ? "Our forever begins" : "Counting the moments"}
      </p>
      <div
        className="countdown-units"
        role="timer"
        aria-label="Time until our wedding"
      >
        {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
          <div className="countdown-unit" key={label}>
            <span className="countdown-number">
              {units[index] === null
                ? "—"
                : String(units[index]).padStart(2, "0")}
            </span>
            <span className="countdown-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MotionEnhancements() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (
      !("IntersectionObserver" in window) ||
      !("animate" in Element.prototype)
    )
      return;

    const animations = new Set<Animation>();
    const played = new WeakSet<Element>();
    const animate = (
      element: Element,
      keyframes: Keyframe[],
      options: KeyframeAnimationOptions,
    ) => {
      const animation = element.animate(keyframes, {
        fill: "backwards",
        easing: "cubic-bezier(.16, 1, .3, 1)",
        ...options,
      });
      animations.add(animation);
      const release = () => animations.delete(animation);
      animation.onfinish = release;
      animation.oncancel = release;
    };

    const revealHeading = (heading: HTMLElement, delay: number) => {
      heading.dataset.textRevealed = "true";
      heading
        .querySelectorAll<HTMLElement>(".reveal-word")
        .forEach((word, index) => {
          animate(
            word,
            [
              {
                opacity: 0,
                translate: "0 .8em",
                rotate: "3deg",
                filter: "blur(7px)",
              },
              {
                opacity: 1,
                translate: "0 0",
                rotate: "0deg",
                filter: "blur(0px)",
              },
            ],
            { duration: 1100, delay: delay + Math.min(index * 85, 425) },
          );
        });
    };

    const revealGroup = (group: Element) => {
      // The date card moves as one piece; its existing rotation stays intact.
      if (group.classList.contains("date-card")) {
        animate(
          group,
          [
            { opacity: 0, translate: "0 42px", scale: ".96" },
            { opacity: 1, translate: "0 0", scale: "1" },
          ],
          { duration: 1100 },
        );
        return;
      }

      const candidates = Array.from(
        group.querySelectorAll<HTMLElement>(
          "[data-text-reveal], .eyebrow, .section-number, p, .venue-note, .venue-actions, .countdown-unit, .swatch-item, .faq-item, .rsvp-deadline, .rsvp-direct, .section-flowers, .rsvp-flowers, .gift-flowers",
        ),
      );
      const selected = new Set(candidates);
      // Animate each text block once, never its parent and children together.
      const items = candidates.filter((element) => {
        for (
          let parent = element.parentElement;
          parent && parent !== group;
          parent = parent.parentElement
        ) {
          if (selected.has(parent)) return false;
        }
        return true;
      });

      items.forEach((element, index) => {
        const delay = Math.min(index * 90, 450);
        if (element.hasAttribute("data-text-reveal")) {
          revealHeading(element, delay);
        } else if (element.matches(".signature, .rsvp-signature")) {
          animate(
            element,
            [
              {
                opacity: 0,
                clipPath: "inset(-15% 100% -25% -5%)",
                translate: "0 8px",
              },
              {
                opacity: 1,
                clipPath: "inset(-15% -5% -25% -5%)",
                translate: "0 0",
              },
            ],
            { duration: 1400, delay },
          );
        } else if (element.matches(".eyebrow, .section-number")) {
          animate(
            element,
            [
              { opacity: 0, translate: "-18px 0" },
              { opacity: 1, translate: "0 0" },
            ],
            { duration: 850, delay },
          );
        } else if (element.matches(".entourage-name")) {
          animate(
            element,
            [
              { opacity: 0, translate: `${index % 2 ? -18 : 18}px 16px` },
              { opacity: 1, translate: "0 0" },
            ],
            { duration: 1000, delay },
          );
        } else {
          animate(
            element,
            [
              { opacity: 0, translate: "0 28px" },
              { opacity: 1, translate: "0 0" },
            ],
            { duration: 950, delay },
          );
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || played.has(entry.target)) return;
          played.add(entry.target);
          if (!preference.matches) revealGroup(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -7% 0px" },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((element) => observer.observe(element));

    const hero = document.querySelector<HTMLElement>(".hero");
    const names = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-name]"),
    );
    let frame: number | null = null;
    let listening = false;
    let heroIsVisible = true;

    const updateNames = () => {
      frame = null;
      if (!hero || !heroIsVisible || preference.matches) return;
      const bounds = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -bounds.top / bounds.height));
      const distance = window.innerWidth < 760 ? 13 : 38;
      names.forEach((name) => {
        const direction = Number(name.dataset.scrollName);
        name.style.translate = `${direction * progress * distance}px ${-progress * 16}px`;
      });
    };
    const scheduleNames = () => {
      if (heroIsVisible && frame === null)
        frame = window.requestAnimationFrame(updateNames);
    };
    const heroObserver = new IntersectionObserver(([entry]) => {
      heroIsVisible = entry.isIntersecting;
      if (heroIsVisible) scheduleNames();
    });
    if (hero) heroObserver.observe(hero);

    const updateMotionPreference = () => {
      if (preference.matches) {
        animations.forEach((animation) => animation.cancel());
        animations.clear();
        if (frame !== null) window.cancelAnimationFrame(frame);
        frame = null;
        names.forEach((name) => name.style.removeProperty("translate"));
        if (listening) {
          window.removeEventListener("scroll", scheduleNames);
          window.removeEventListener("resize", scheduleNames);
          listening = false;
        }
      } else if (!listening) {
        window.addEventListener("scroll", scheduleNames, { passive: true });
        window.addEventListener("resize", scheduleNames);
        listening = true;
        scheduleNames();
      }
    };
    updateMotionPreference();
    preference.addEventListener("change", updateMotionPreference);

    return () => {
      observer.disconnect();
      heroObserver.disconnect();
      animations.forEach((animation) => animation.cancel());
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleNames);
      window.removeEventListener("resize", scheduleNames);
      preference.removeEventListener("change", updateMotionPreference);
      names.forEach((name) => name.style.removeProperty("translate"));
    };
  }, []);
  return null;
}

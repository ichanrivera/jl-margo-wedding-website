import type { CSSProperties, JSX } from "react";

/* ------------------------------------------------------------------
   Types
------------------------------------------------------------------- */
interface Wedding {
  intro: string;
  groom: string;
  bride: string;
  invite: string;
  weekday: string;
  day: string;
  month: string;
  year: string;
  fullDate: string;
  time: string;
  place: string;
  rsvpDeadline: string;
}

interface ParentGroup {
  title: string;
  names: string[];
}

interface EntourageGroup {
  id: string;
  title: string;
  names?: string[]; // one name per line
  pairs?: [string, string][]; // married couples: left and right column
}

interface EntourageOfficer {
  id: string;
  title: string;
  names: string[];
}

interface Entourage {
  officiant: EntourageOfficer;
  parents: ParentGroup[];
  groups: EntourageGroup[];
}

interface AttireColor {
  name: string;
  hex: string;
}

interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
}

type BloomKind =
  | "poppy"
  | "cosmos"
  | "cornflower"
  | "buttercup"
  | "daisy"
  | "thistle"
  | "ginkgo"
  | "snapdragon"
  | "sprig";

interface BloomPlacement {
  kind: BloomKind;
  color?: string;
  className?: string;
  style: CSSProperties;
}

interface FakeQRProps {
  size?: number;
}

/* ------------------------------------------------------------------
   EDIT ME: placeholder content lives up here so it's easy to swap.
------------------------------------------------------------------- */
const WEDDING: Wedding = {
  intro: "Together with our families we",
  groom: "John Lauren",
  bride: "Marjolyn",
  invite:
    "invite you to share in the joy of beginning of our new life together as we exchange vows",
  weekday: "Saturday",
  day: "14",
  month: "November",
  year: "2026",
  fullDate: "Saturday, November 14, 2026",
  time: "9:00 in the morning",
  place: "Casa Dali Bato, Bato, Camarines Sur",
  rsvpDeadline: "October 14, 2026",
};

const ENTOURAGE: Entourage = {
  officiant: {
    id: "officiant",
    title: "Wedding Officiant",
    names: ["Honorable Mayor Enric Dancalan"],
  },
  parents: [
    {
      title: "Parents of the Groom",
      names: ["Julin Alipo-on Sevilla", "Mrs. Melody Rivera Sevilla"],
    },
    {
      title: "Parents of the Bride",
      names: ["Mr. Javier Magalona Docot", "Mrs. Marites Gallego Docot"],
    },
  ],
  groups: [
    {
      id: "principal-sponsors",
      title: "Principal Sponsors",
      pairs: [
        ["P MSGT Jhemmel Casili", "Ms. Brenda Gallego"],
        ["Hon. Mayor Enric Dancalan", "Mrs. Olive De Leon Sandoval"],
        ["Engr. Leoncio Mota Jr.", "Mrs. Nely McGarvey"],
        ["Mr. Paul M. Bagasala", "Mrs. Toni Grace Peñaflorida"],
        ["Mr. Ian Siason", "Mrs. Jhoyce Siason"],
        ["Mr. Sunny S. Sacueza", "Mrs. Russell De Ocampo"],
      ],
    },
    {
      id: "best-man",
      title: "Best Man",
      names: ["Christian Iriola Rivera"],
    },
    {
      id: "matron-of-honor",
      title: "Matron of Honor",
      names: ["Katrina Victoria Ortega-Claravall"],
    },
    {
      id: "maid-of-honor",
      title: "Maid of Honor",
      names: ["Jemary Gallego Docot"],
    },
    { id: "groomsman", title: "Groomsman", names: ["Dave Docot"] },
    { id: "bridesmaid", title: "Bridesmaid", names: ["Beyonce Jen Tumbado"] },
    {
      id: "to-clothe-us-as-one",
      title: "To Clothe Us as One",
      names: ["Catherine Lauta", "John Paul Sanchez"],
    },
    {
      id: "to-tie-us-as-one",
      title: "To Tie Us as One",
      names: ["Alkiezha Sandoval", "Benette Mercelle Vicente"],
    },
    {
      id: "little bride",
      title: "Little Bride",
      names: ["Winter Amellie Docot"],
    },
    {
      id: "flower boy",
      title: "Flower Boy",
      names: ["Trent Jacob Catambay"],
    },
    {
      id: "flower girls",
      title: "Flower Girls",
      names: ["Jhelai Patrice Abanilla", "Christine Joy Docot", "Raze Follosco"],
    },
  ],
};

const REMINDERS: string[] = [
  "Please arrive by 2:30 PM so we can start right on time.",
  "Adults only, except for our little entourage. We hope you understand.",
  "Kindly RSVP before the deadline so we can save you a seat.",
  "Unplugged ceremony: keep phones away while we say I do.",
  "The garden path is grassy. Block heels and wedges will thank you.",
];

// Pulled from the wildflowers on the invitation
const COLORS: AttireColor[] = [
  { name: "Sage", hex: "#9DB88A" },
  { name: "Blush", hex: "#EBB3C6" },
  { name: "Buttercup", hex: "#F2D06B" },
  { name: "Cornflower", hex: "#8FB0DC" },
  { name: "Lavender", hex: "#B692CB" },
];

const CONTACTS: Contact[] = [
  {
    id: "contact-groom",
    name: "John Lauren",
    phone: "+63 900 000 0000",
    email: "john@example.com",
  },
  {
    id: "contact-bride",
    name: "Marjolyn",
    phone: "+63 900 000 0001",
    email: "marjolyn@example.com",
  },
];

/* ------------------------------------------------------------------
   Where the flowers sit. Positions are % of the parent box.
   `rotate: 180deg` means the stem hangs from the top.
   Tweak freely, or add more.
------------------------------------------------------------------- */
const HERO_BLOOMS: BloomPlacement[] = [
  // across the top of the arch
  {
    kind: "cosmos",
    color: "#efb7cf",
    style: { left: "31%", top: "-4%", width: "13%", rotate: "172deg" },
  },
  {
    kind: "poppy",
    style: { left: "46.5%", top: "-5%", width: "14%", rotate: "184deg" },
  },
  {
    kind: "cosmos",
    color: "#d95fa3",
    style: { left: "62%", top: "-3%", width: "12%", rotate: "192deg" },
  },
  // left side
  {
    kind: "ginkgo",
    style: { left: "-1%", top: "3%", width: "16%", rotate: "196deg" },
  },
  {
    kind: "cornflower",
    style: { left: "9%", top: "17%", width: "13%", rotate: "158deg" },
  },
  {
    kind: "thistle",
    className: "bloom--sm-hide",
    style: { left: "13%", top: "38%", width: "12%", rotate: "146deg" },
  },
  {
    kind: "snapdragon",
    style: { left: "0%", top: "52%", width: "20%", rotate: "14deg" },
  },
  // right side
  {
    kind: "sprig",
    className: "bloom--sm-hide",
    style: { right: "3%", top: "-1%", width: "9%", rotate: "170deg" },
  },
  {
    kind: "ginkgo",
    style: { right: "-2%", top: "22%", width: "15%", rotate: "162deg" },
  },
  {
    kind: "poppy",
    color: "#ee6b58",
    className: "bloom--sm-hide",
    style: { right: "7%", top: "36%", width: "11%", rotate: "112deg" },
  },
  {
    kind: "buttercup",
    style: { right: "4%", top: "58%", width: "12%", rotate: "6deg" },
  },
  {
    kind: "buttercup",
    className: "bloom--sm-hide",
    style: { right: "12%", top: "62%", width: "8%", rotate: "-8deg" },
  },
  // bottom corners
  {
    kind: "thistle",
    style: { right: "2%", top: "80%", width: "11%", rotate: "-6deg" },
  },
  {
    kind: "daisy",
    style: { left: "3%", top: "88%", width: "14%", rotate: "22deg" },
  },
];

const ENTOURAGE_BLOOMS: BloomPlacement[] = [
  {
    kind: "ginkgo",
    style: {
      left: "-1%",
      top: "-2%",
      width: "clamp(70px, 11vw, 150px)",
      rotate: "196deg",
    },
  },
  {
    kind: "cosmos",
    color: "#efb7cf",
    style: {
      left: "7%",
      top: "-1%",
      width: "clamp(50px, 8vw, 110px)",
      rotate: "170deg",
    },
  },
  {
    kind: "poppy",
    style: {
      right: "6%",
      top: "-2%",
      width: "clamp(56px, 9vw, 120px)",
      rotate: "186deg",
    },
  },
  {
    kind: "sprig",
    className: "bloom--sm-hide",
    style: {
      right: "-1%",
      top: "0%",
      width: "clamp(40px, 6vw, 80px)",
      rotate: "168deg",
    },
  },
  {
    kind: "buttercup",
    style: {
      left: "1%",
      bottom: "-1%",
      width: "clamp(56px, 9vw, 120px)",
      rotate: "24deg",
    },
  },
  {
    kind: "thistle",
    style: {
      right: "2%",
      bottom: "-2%",
      width: "clamp(50px, 8vw, 110px)",
      rotate: "-8deg",
    },
  },
];

const DETAILS_BLOOMS: BloomPlacement[] = [
  {
    kind: "cornflower",
    style: {
      left: "0%",
      top: "-1%",
      width: "clamp(56px, 9vw, 120px)",
      rotate: "160deg",
    },
  },
  {
    kind: "ginkgo",
    className: "bloom--sm-hide",
    style: {
      right: "-1%",
      top: "-2%",
      width: "clamp(70px, 11vw, 150px)",
      rotate: "164deg",
    },
  },
  {
    kind: "snapdragon",
    className: "bloom--sm-hide",
    style: {
      left: "-3%",
      bottom: "-5%",
      width: "clamp(70px, 10vw, 150px)",
      rotate: "30deg",
    },
  },
  {
    kind: "daisy",
    style: {
      right: "1%",
      bottom: "-4%",
      width: "clamp(50px, 8vw, 110px)",
      rotate: "-14deg",
    },
  },
];

const RSVP_BLOOMS: BloomPlacement[] = [
  {
    kind: "cosmos",
    color: "#efb7cf",
    style: { left: "22%", top: "-5%", width: "20%", rotate: "170deg" },
  },
  {
    kind: "poppy",
    style: { left: "41%", top: "-7%", width: "22%", rotate: "184deg" },
  },
  {
    kind: "cosmos",
    color: "#d95fa3",
    style: { left: "62%", top: "-4%", width: "18%", rotate: "194deg" },
  },
];

/* ------------------------------------------------------------------
   Watercolor flower art (inline SVG, no image files needed)
   Every bloom is drawn in a 100 x 160 box: flower head at the top,
   stem running down.
------------------------------------------------------------------- */
const DEFAULT_COLOR: Record<BloomKind, string> = {
  poppy: "#e8574d",
  cosmos: "#efb7cf",
  cornflower: "#6f9ad0",
  buttercup: "#f3d26e",
  daisy: "#f5d36b",
  thistle: "#8e4fae",
  ginkgo: "#7f9f5c",
  snapdragon: "#eba9c3",
  sprig: "#8bab6c",
};

// Shared paint effects. Rendered once, referenced by every bloom.
function WatercolorDefs(): JSX.Element {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter id="wc" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.045"
            numOctaves="2"
            seed="3"
            result="n"
          />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="3.5" />
          <feGaussianBlur stdDeviation="0.35" />
        </filter>
        <radialGradient id="wc-shade">
          <stop offset="0" stopColor="#000" stopOpacity="0.22" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

const HEAD = { x: 50, y: 42 };

function Petals(props: {
  n: number;
  rx: number;
  ry: number;
  dist: number;
  fill: string;
  start?: number;
  opacity?: number;
}): JSX.Element {
  const { n, rx, ry, dist, fill, start = 0, opacity = 0.85 } = props;
  return (
    <g
      fillOpacity={opacity}
      stroke={fill}
      strokeOpacity="0.5"
      strokeWidth="0.6"
    >
      {Array.from({ length: n }, (_, i) => (
        <ellipse
          key={i}
          cx={HEAD.x}
          cy={HEAD.y - dist}
          rx={rx}
          ry={ry}
          fill={fill}
          transform={`rotate(${start + (360 / n) * i} ${HEAD.x} ${HEAD.y})`}
        />
      ))}
    </g>
  );
}

function Dots(props: {
  n: number;
  r: number;
  size: number;
  fill: string;
}): JSX.Element {
  const { n, r, size, fill } = props;
  return (
    <g fill={fill}>
      {Array.from({ length: n }, (_, i) => {
        const a = (Math.PI * 2 * i) / n;
        return (
          <circle
            key={i}
            cx={HEAD.x + Math.cos(a) * r}
            cy={HEAD.y + Math.sin(a) * r}
            r={size}
          />
        );
      })}
    </g>
  );
}

function Stem(): JSX.Element {
  return (
    <g>
      <path
        d="M50 60 C 46 90, 54 122, 47 158"
        stroke="#7d9a62"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M49 100 c-12 -4 -18 -12 -18 -20 c 10 2 17 10 18 20z"
        fill="#8fae6f"
        fillOpacity="0.85"
      />
      <path
        d="M49 126 c10 -2 17 -9 19 -18 c-10 1 -18 8 -19 18z"
        fill="#8fae6f"
        fillOpacity="0.85"
      />
    </g>
  );
}

function BloomArt({
  kind,
  color,
}: {
  kind: BloomKind;
  color: string;
}): JSX.Element {
  switch (kind) {
    case "poppy":
      return (
        <>
          <Stem />
          <g
            fillOpacity="0.86"
            stroke="#b83a33"
            strokeOpacity="0.4"
            strokeWidth="0.6"
            fill={color}
          >
            <ellipse
              cx="36"
              cy="33"
              rx="21"
              ry="19"
              transform="rotate(-15 36 33)"
            />
            <ellipse
              cx="64"
              cy="33"
              rx="21"
              ry="19"
              transform="rotate(15 64 33)"
            />
            <ellipse
              cx="37"
              cy="51"
              rx="20"
              ry="18"
              transform="rotate(15 37 51)"
            />
            <ellipse
              cx="63"
              cy="51"
              rx="20"
              ry="18"
              transform="rotate(-15 63 51)"
            />
          </g>
          <circle cx={HEAD.x} cy={HEAD.y} r="26" fill="url(#wc-shade)" />
          <circle cx={HEAD.x} cy={HEAD.y} r="6" fill="#3b2f35" />
          <Dots n={9} r={10} size={1.2} fill="#3b2f35" />
        </>
      );
    case "cosmos":
      return (
        <>
          <Stem />
          <Petals n={8} rx={12} ry={19} dist={17} fill={color} />
          <circle cx={HEAD.x} cy={HEAD.y} r="20" fill="url(#wc-shade)" />
          <circle cx={HEAD.x} cy={HEAD.y} r="5.5" fill="#e6b84c" />
          <Dots n={7} r={3} size={0.9} fill="#b9852a" />
        </>
      );
    case "cornflower":
      return (
        <>
          <Stem />
          <Petals n={14} rx={3.8} ry={15} dist={15} fill={color} />
          <Petals n={14} rx={3} ry={11} dist={11} fill="#a9c4ec" start={12} />
          <circle cx={HEAD.x} cy={HEAD.y} r="6" fill="#5474b0" />
          <Dots n={6} r={3} size={0.9} fill="#dfe8f8" />
        </>
      );
    case "buttercup":
      return (
        <>
          <Stem />
          <Petals n={5} rx={15} ry={15} dist={15} fill={color} />
          <circle cx={HEAD.x} cy={HEAD.y} r="18" fill="url(#wc-shade)" />
          <circle cx={HEAD.x} cy={HEAD.y} r="5.5" fill="#e58f3a" />
          <Dots n={8} r={8} size={1.1} fill="#c9702a" />
        </>
      );
    case "daisy":
      return (
        <>
          <Stem />
          <Petals n={9} rx={6} ry={17} dist={17} fill={color} />
          <circle cx={HEAD.x} cy={HEAD.y} r="7.5" fill="#e39a3f" />
          <Dots n={6} r={3} size={1} fill="#b8681f" />
        </>
      );
    case "thistle":
      return (
        <>
          <Stem />
          <g strokeLinecap="round" fill="none">
            {Array.from({ length: 15 }, (_, i) => {
              const a = ((i - 7) * 10 * Math.PI) / 180;
              const len = 28 - Math.abs(i - 7) * 0.8;
              return (
                <line
                  key={i}
                  x1={HEAD.x}
                  y1="50"
                  x2={HEAD.x + Math.sin(a) * len}
                  y2={50 - Math.cos(a) * len}
                  stroke={i % 2 ? "#b47fd0" : color}
                  strokeWidth="3"
                  strokeOpacity="0.9"
                />
              );
            })}
          </g>
          <ellipse
            cx={HEAD.x}
            cy="56"
            rx="15"
            ry="12"
            fill="#93ac70"
            fillOpacity="0.95"
            stroke="#6f8c55"
            strokeWidth="0.8"
          />
          <path
            d="M38 52 l12 10 l12 -10 M36 58 l14 10 l14 -10 M50 46 v22"
            stroke="#6f8c55"
            strokeWidth="0.8"
            fill="none"
            strokeOpacity="0.7"
          />
        </>
      );
    case "ginkgo":
      return (
        <>
          <Stem />
          <path
            d="M50 66 C 30 58, 14 38, 16 18 C 26 10, 38 12, 46 20 L 50 15 L 54 20 C 62 12, 74 10, 84 18 C 86 38, 70 58, 50 66Z"
            fill={color}
            fillOpacity="0.9"
            stroke="#5f7f44"
            strokeOpacity="0.6"
            strokeWidth="0.8"
          />
          <path
            d="M50 66 L20 22 M50 66 L31 16 M50 66 L42 18 M50 66 L58 18 M50 66 L69 16 M50 66 L80 22"
            stroke="#5f7f44"
            strokeWidth="0.7"
            strokeOpacity="0.5"
            fill="none"
          />
        </>
      );
    case "snapdragon":
      return (
        <>
          <path
            d="M47 158 C 40 110, 66 80, 56 16"
            stroke="#7d9a62"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M44 128 c-12 -2 -20 -9 -22 -18 c11 0 20 7 22 18z"
            fill="#8fae6f"
            fillOpacity="0.85"
          />
          <path
            d="M52 92 c11 -3 18 -10 19 -19 c-11 2 -18 9 -19 19z"
            fill="#8fae6f"
            fillOpacity="0.85"
          />
          {[
            [56, 16, 0.7],
            [58, 30, 0.95],
            [61, 46, 1],
            [58, 62, 1],
          ].map(([x, y, s], i) => (
            <g
              key={i}
              transform={`translate(${x} ${y}) rotate(${i % 2 ? 25 : -25}) scale(${s})`}
            >
              <ellipse
                cx="-6"
                cy="0"
                rx="9"
                ry="6"
                fill={color}
                fillOpacity="0.9"
                stroke="#d4799f"
                strokeOpacity="0.5"
                strokeWidth="0.6"
              />
              <ellipse
                cx="5"
                cy="-2"
                rx="8"
                ry="5.5"
                fill={color}
                fillOpacity="0.9"
                stroke="#d4799f"
                strokeOpacity="0.5"
                strokeWidth="0.6"
              />
              <ellipse cx="-3" cy="1" rx="4" ry="3" fill="#f6d0df" />
            </g>
          ))}
        </>
      );
    case "sprig":
      return (
        <>
          <path
            d="M50 158 C 44 110, 56 70, 48 8"
            stroke="#7d9a62"
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="round"
          />
          {[30, 50, 70, 90, 110].map((y, i) => (
            <g key={y} fill={color} fillOpacity="0.85">
              <ellipse
                cx={i % 2 ? 40 : 58}
                cy={y}
                rx="4"
                ry="9"
                transform={`rotate(${i % 2 ? -40 : 40} 50 ${y})`}
              />
              <ellipse
                cx={i % 2 ? 58 : 40}
                cy={y + 8}
                rx="3.5"
                ry="8"
                transform={`rotate(${i % 2 ? 40 : -40} 50 ${y + 8})`}
              />
            </g>
          ))}
        </>
      );
    default:
      return <></>;
  }
}

// Deterministic "random" (same on server and client, so no hydration mismatch).
function seeded(seed: string, salt: number): number {
  let h = 2166136261 ^ salt;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  h ^= h >>> 15;
  h = Math.imul(h, 2246822507);
  h ^= h >>> 13;
  return ((h >>> 0) % 10000) / 10000; // 0 to 1
}

const between = (min: number, max: number, r: number): number =>
  min + (max - min) * r;

function Bloom({
  kind,
  color,
  className,
  style,
  seed,
}: BloomPlacement & { seed: string }): JSX.Element {
  // Each flower gets its own slow speed, sway distance and starting point.
  const motion = {
    "--sway-dur": `${between(8, 15, seeded(seed, 1)).toFixed(1)}s`,
    "--sway-amp": `${between(3.5, 6.5, seeded(seed, 2)).toFixed(1)}deg`,
    "--sway-delay": `-${between(0, 15, seeded(seed, 3)).toFixed(1)}s`,
  } as CSSProperties;

  return (
    <div
      className={`bloom-wrap${className ? ` ${className}` : ""}`}
      style={{ ...style, ...motion }}
      aria-hidden="true"
    >
      <svg
        className={`bloom bloom--${kind}`}
        viewBox="0 0 100 160"
        focusable="false"
      >
        <g filter="url(#wc)">
          <BloomArt kind={kind} color={color ?? DEFAULT_COLOR[kind]} />
        </g>
      </svg>
    </div>
  );
}

function Blooms({
  items,
  group,
}: {
  items: BloomPlacement[];
  group: string;
}): JSX.Element {
  return (
    <>
      {items.map((b, i) => (
        <Bloom key={`${b.kind}-${i}`} seed={`${group}-${i}`} {...b} />
      ))}
    </>
  );
}

// Placeholder QR: deterministic pattern with three finder squares.
// Replace <FakeQR /> (or everything inside #rsvp-qr-image) with your real QR.
function FakeQR({ size = 25 }: FakeQRProps): JSX.Element {
  let seed = 42;
  const rand = (): number => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  const inFinder = (x: number, y: number): boolean =>
    (x < 8 && y < 8) || (x >= size - 8 && y < 8) || (x < 8 && y >= size - 8);

  const cells: JSX.Element[] = [];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (!inFinder(x, y) && rand() > 0.52) {
        cells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />);
      }
    }
  }

  const finder = (ox: number, oy: number): JSX.Element => (
    <g key={`${ox}-${oy}`}>
      <rect x={ox} y={oy} width="7" height="7" />
      <rect x={ox + 1} y={oy + 1} width="5" height="5" fill="#fff" />
      <rect x={ox + 2} y={oy + 2} width="3" height="3" />
    </g>
  );

  return (
    <svg
      viewBox={`-1 -1 ${size + 2} ${size + 2}`}
      role="img"
      aria-label="Placeholder QR code"
      shapeRendering="crispEdges"
      fill="#4a3712"
    >
      <rect x="-1" y="-1" width={size + 2} height={size + 2} fill="#fff" />
      {cells}
      {finder(0, 0)}
      {finder(size - 7, 0)}
      {finder(0, size - 7)}
    </svg>
  );
}

function Flourish(): JSX.Element {
  return (
    <div className="flourish" aria-hidden="true">
      <span />
    </div>
  );
}

/* ------------------------------------------------------------------
   Page
------------------------------------------------------------------- */
export default function WeddingSite(): JSX.Element {
  return (
    <main id="wedding-site">
      <WatercolorDefs />

      {/* ============ 1. HERO ============ */}
      <section id="hero">
        <div id="hero-frame">
          <div className="hero-arch" aria-hidden="true" />
          <div className="hero-arch hero-arch--inner" aria-hidden="true" />
          <Blooms group="hero" items={HERO_BLOOMS} />

          <div id="hero-content">
            <p id="hero-intro">{WEDDING.intro}</p>

            <h1 id="hero-names">
              <span id="hero-name-groom" className="hero-name">
                {WEDDING.groom.split(" ").map((word) => (
                  <span key={word} className="hero-name-word">
                    {word}
                  </span>
                ))}
              </span>
              <span id="hero-and">
                <span>and</span>
              </span>
              <span id="hero-name-bride" className="hero-name">
                {WEDDING.bride.split(" ").map((word) => (
                  <span key={word} className="hero-name-word">
                    {word}
                  </span>
                ))}
              </span>
            </h1>

            <p id="hero-invite">{WEDDING.invite}</p>

            <div id="hero-date">
              <span id="hero-date-weekday" className="hero-date-side">
                {WEDDING.weekday}
              </span>
              <span id="hero-date-center">
                <span id="hero-date-day">{WEDDING.day}</span>
                <span id="hero-date-year">{WEDDING.year}</span>
              </span>
              <span id="hero-date-month" className="hero-date-side">
                {WEDDING.month}
              </span>
            </div>

            <p id="hero-place">{WEDDING.place}</p>
          </div>
        </div>
      </section>

      {/* ============ 2. ENTOURAGE ============ */}
      <section id="entourage">
        <Blooms group="entourage" items={ENTOURAGE_BLOOMS} />

        <div id="entourage-header" className="section-head">
          <p className="section-script">with love and gratitude</p>
          <h2 id="entourage-title" className="section-title">
            Our Entourage
          </h2>
          <Flourish />
        </div>

        <div id="entourage-officiant">
          <h3 className="entourage-role">{ENTOURAGE.officiant.title}</h3>
          {ENTOURAGE.officiant.names.map((n) => (
            <p key={n} className="entourage-name">
              {n}
            </p>
          ))}
        </div>

        <div id="entourage-parents">
          <div className="entourage-parent">
            <h3 className="entourage-role">{ENTOURAGE.parents[0].title}</h3>
            {ENTOURAGE.parents[0].names.map((n) => (
              <p key={n} className="entourage-name">
                {n}
              </p>
            ))}
          </div>
          <span id="entourage-parents-and" aria-hidden="true">
            and
          </span>
          <div className="entourage-parent">
            <h3 className="entourage-role">{ENTOURAGE.parents[1].title}</h3>
            {ENTOURAGE.parents[1].names.map((n) => (
              <p key={n} className="entourage-name">
                {n}
              </p>
            ))}
          </div>
        </div>

        <div id="entourage-groups">
          {ENTOURAGE.groups.map((g) => (
            <div
              key={g.id}
              id={`entourage-${g.id}`}
              className="entourage-group"
            >
              <h3 className="entourage-role">{g.title}</h3>
              {g.pairs && (
                <div className="entourage-pairs">
                  {g.pairs.map(([left, right]) => (
                    <div key={left} className="entourage-pair">
                      <p className="entourage-name">{left}</p>
                      <p className="entourage-name">{right}</p>
                    </div>
                  ))}
                </div>
              )}
              {g.names?.map((n, i) => (
                <p key={`${n}-${i}`} className="entourage-name">
                  {n}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============ 3. DETAILS ============ */}
      <section id="details">
        <Blooms group="details" items={DETAILS_BLOOMS} />

        <div id="details-header" className="section-head">
          <p className="section-script">everything you need to know</p>
          <h2 id="details-title" className="section-title">
            The Details
          </h2>
          <Flourish />
        </div>

        <div id="details-grid">
          {/* RSVP */}
          <div id="rsvp" className="detail detail--rsvp">
            <Blooms group="rsvp" items={RSVP_BLOOMS} />
            <h3 className="detail-title">RSVP</h3>
            <p className="detail-copy">
              Scan the code to tell us if you&apos;re coming. Please reply by{" "}
              <strong>{WEDDING.rsvpDeadline}</strong>.
            </p>
            <div id="rsvp-qr">
              {/* Swap this div's contents for your personalized QR */}
              <div id="rsvp-qr-image">
                <FakeQR />
              </div>
              <p id="rsvp-qr-caption">Scan to RSVP</p>
            </div>
          </div>

          {/* Reminders */}
          <div id="reminders" className="detail detail--reminders">
            <h3 className="detail-title">Reminders</h3>
            <ul id="reminders-list">
              {REMINDERS.map((r) => (
                <li key={r} className="reminder">
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Attire */}
          <div id="attire" className="detail detail--attire">
            <h3 className="detail-title">Attire</h3>
            <p className="detail-copy">
              Garden formal. Think soft fabrics and light layers in the colors
              of the wildflowers around us.
            </p>
            <div id="attire-colors">
              {COLORS.map((c) => (
                <div key={c.name} className="attire-color">
                  <span
                    className="attire-swatch"
                    style={{ background: c.hex }}
                  />
                  <span className="attire-name">{c.name}</span>
                </div>
              ))}
            </div>
            <p id="attire-note">
              Please skip white and ivory. Those are for the bride.
            </p>
          </div>

          {/* Gift guide */}
          <div id="gifts" className="detail detail--gifts">
            <h3 className="detail-title">Gift Guide</h3>
            <p className="detail-copy">
              Your presence is our favorite present. If you&apos;d like to give
              something anyway, we&apos;re saving up for our first home
              together.
            </p>
            <ul id="gifts-list">
              <li className="gift">Cash gifts are warmly welcome</li>
              <li className="gift">
                Bank and e-wallet details are on the back of your invitation
              </li>
              <li className="gift">A handwritten note makes us happy-cry</li>
            </ul>
          </div>

          {/* Location */}
          <div id="location" className="detail detail--location">
            <h3 className="detail-title">Location</h3>
            <p id="location-place">{WEDDING.place}</p>
            <p className="detail-copy">
              {WEDDING.fullDate}, {WEDDING.time}
            </p>
            <div id="location-map">
              {/* Drop an <iframe> Google Map embed here */}

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.934571086273!2d123.37218907593558!3d13.354344486997325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a19f0078aa5cc7%3A0x5e51aea2b980e96!2sCasa%20Dali%20Bato!5e0!3m2!1sen!2sph!4v1790772879955!5m2!1sen!2sph"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>

            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="detail detail--contact">
            <h3 className="detail-title">Contact the Partners</h3>
            <p className="detail-copy">
              Lost, late, or just curious? Send us a message.
            </p>
            <div id="contact-list">
              {CONTACTS.map((c) => (
                <div key={c.id} id={c.id} className="contact-person">
                  <p className="contact-name">{c.name}</p>
                  <p className="contact-line">{c.phone}</p>
                  <p className="contact-line">{c.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer id="footer">
        <p id="footer-names">
          {WEDDING.groom} <span id="footer-and">and</span> {WEDDING.bride}
        </p>
        <p id="footer-date">{WEDDING.fullDate}</p>
      </footer>
    </main>
  );
}

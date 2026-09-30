import type { CSSProperties, JSX } from "react";

/* ------------------------------------------------------------------
   Types
------------------------------------------------------------------- */
interface Wedding {
  groom: string;
  bride: string;
  tagline: string;
  date: string;
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
  names: string[];
}

interface Entourage {
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

interface LettersProps {
  text: string;
  start?: number;
}

interface FakeQRProps {
  size?: number;
}

interface StarProps {
  className: string;
}

/* ------------------------------------------------------------------
   EDIT ME — placeholder content lives up here so it's easy to swap.
------------------------------------------------------------------- */
const WEDDING: Wedding = {
  groom: "John Lauren",
  bride: "Marjolyn",
  tagline: "are getting married, and you're invited to the party",
  date: "Saturday, December 12, 2026",
  time: "3:00 in the afternoon",
  place: "The Secret Garden Pavilion, Tagaytay",
  rsvpDeadline: "November 15, 2026",
};

const ENTOURAGE: Entourage = {
  parents: [
    { title: "Parents of the Groom", names: ["Mr. Groom's Father", "Mrs. Groom's Mother"] },
    { title: "Parents of the Bride", names: ["Mr. Bride's Father", "Mrs. Bride's Mother"] },
  ],
  groups: [
    { id: "principal-sponsors", title: "Principal Sponsors", names: ["Sponsor One", "Sponsor Two", "Sponsor Three", "Sponsor Four", "Sponsor Five", "Sponsor Six"] },
    { id: "best-people", title: "Best Man & Maid of Honor", names: ["Best Man's Name", "Maid of Honor's Name"] },
    { id: "groomsmen", title: "Groomsmen", names: ["Groomsman One", "Groomsman Two", "Groomsman Three", "Groomsman Four"] },
    { id: "bridesmaids", title: "Bridesmaids", names: ["Bridesmaid One", "Bridesmaid Two", "Bridesmaid Three", "Bridesmaid Four"] },
    { id: "secondary-sponsors", title: "Secondary Sponsors", names: ["Veil: Name", "Cord: Name", "Candle: Name"] },
    { id: "little-ones", title: "The Little Ones", names: ["Ring Bearer: Name", "Bible Bearer: Name", "Flower Girl: Name", "Flower Girl: Name"] },
  ],
};

const REMINDERS: string[] = [
  "Please arrive by 2:30 PM so we can start right on time.",
  "Adults only, except for our little entourage. We hope you understand.",
  "Kindly RSVP before the deadline so we can save you a seat.",
  "Unplugged ceremony: keep phones away while we say I do.",
  "The garden path is grassy. Block heels and wedges will thank you.",
];

const COLORS: AttireColor[] = [
  { name: "Wisteria", hex: "#B9A6E8" },
  { name: "Sage", hex: "#A9C9A4" },
  { name: "Butter", hex: "#F6E3A1" },
  { name: "Petal", hex: "#F4C6D3" },
];

const CONTACTS: Contact[] = [
  { id: "contact-groom", name: "John Lauren", phone: "+63 900 000 0000", email: "john@example.com" },
  { id: "contact-bride", name: "Marjolyn", phone: "+63 900 000 0001", email: "marjolyn@example.com" },
];

/* ------------------------------------------------------------------
   Small helpers
------------------------------------------------------------------- */

// Splits a name into letters so each can bounce in on page load.
function Letters({ text, start = 0 }: LettersProps): JSX.Element {
  return (
    <span className="letters" aria-label={text}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={ch === " " ? "letter letter--space" : "letter"}
          style={{ "--i": i + start } as CSSProperties}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

// Placeholder QR: deterministic pattern with three finder squares.
// Replace <FakeQR /> (or the whole #rsvp-qr-image div) with your real QR.
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
      fill="#2E2440"
    >
      <rect x="-1" y="-1" width={size + 2} height={size + 2} fill="#fff" />
      {cells}
      {finder(0, 0)}
      {finder(size - 7, 0)}
      {finder(0, size - 7)}
    </svg>
  );
}

function Star({ className }: StarProps): JSX.Element {
  return (
    <svg className={`star ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c.8 6.6 5.4 11.2 12 12-6.6.8-11.2 5.4-12 12-.8-6.6-5.4-11.2-12-12C6.6 11.2 11.2 6.6 12 0z" />
    </svg>
  );
}

/* ------------------------------------------------------------------
   Page
------------------------------------------------------------------- */
export default function WeddingSite(): JSX.Element {
  return (
    <main id="wedding-site">
      {/* ============ 1. HERO ============ */}
      <section id="hero">
        <div id="hero-sky" aria-hidden="true">
          <div className="hero-moon" />
          <div className="hero-cloud hero-cloud--a" />
          <div className="hero-cloud hero-cloud--b" />
          <div className="hero-cloud hero-cloud--c" />
          <Star className="star--1" />
          <Star className="star--2" />
          <Star className="star--3" />
          <Star className="star--4" />
          <Star className="star--5" />
          <Star className="star--6" />
        </div>

        <div id="hero-content">
          <p id="hero-kicker">Please welcome to the story</p>

          <h1 id="hero-names">
            <span id="hero-name-groom" className="hero-name">
              <Letters text={WEDDING.groom} />
            </span>
            <span id="hero-ampersand" aria-label="and">&amp;</span>
            <span id="hero-name-bride" className="hero-name">
              <Letters text={WEDDING.bride} start={WEDDING.groom.length} />
            </span>
          </h1>

          <p id="hero-tagline">{WEDDING.tagline}</p>

          <div id="hero-date">
            <span id="hero-date-day">{WEDDING.date}</span>
            <span id="hero-date-place">{WEDDING.place}</span>
          </div>
        </div>

        <svg id="hero-wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 60c120 40 240 40 360 0s240-40 360 0 240 40 360 0 240-40 360 0v60H0z" />
        </svg>
      </section>

      {/* ============ 2. ENTOURAGE ============ */}
      <section id="entourage">
        <div id="entourage-header">
          <h2 id="entourage-title">Our Entourage</h2>
          <p id="entourage-intro">
            The kind, brave, and slightly chaotic people standing beside us.
          </p>
        </div>

        <div id="entourage-parents">
          {ENTOURAGE.parents.map((p) => (
            <div key={p.title} className="entourage-parent">
              <h3 className="entourage-role">{p.title}</h3>
              {p.names.map((n) => (
                <p key={n} className="entourage-name">{n}</p>
              ))}
            </div>
          ))}
        </div>

        <div id="entourage-groups">
          {ENTOURAGE.groups.map((g) => (
            <div key={g.id} id={`entourage-${g.id}`} className="entourage-group">
              <h3 className="entourage-role">{g.title}</h3>
              {g.names.map((n, i) => (
                <p key={`${n}-${i}`} className="entourage-name">{n}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============ 3. DETAILS ============ */}
      <section id="details">
        <div id="details-header">
          <h2 id="details-title">Everything you need to know</h2>
        </div>

        <div id="details-grid">
          {/* RSVP */}
          <div id="rsvp" className="detail detail--rsvp">
            <div id="rsvp-text">
              <h3 className="detail-title">RSVP</h3>
              <p className="detail-copy">
                Scan the code to tell us if you&apos;re coming. Please reply by{" "}
                <strong>{WEDDING.rsvpDeadline}</strong>.
              </p>
            </div>
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
                <li key={r} className="reminder">{r}</li>
              ))}
            </ul>
          </div>

          {/* Attire */}
          <div id="attire" className="detail detail--attire">
            <h3 className="detail-title">Attire</h3>
            <p className="detail-copy">
              Garden formal. Think soft fabrics, light layers, and colors that look
              good next to flowers.
            </p>
            <div id="attire-colors">
              {COLORS.map((c) => (
                <div key={c.name} className="attire-color">
                  <span className="attire-swatch" style={{ background: c.hex }} />
                  <span className="attire-name">{c.name}</span>
                </div>
              ))}
            </div>
            <p id="attire-note">Please skip white and ivory. Those are for the bride.</p>
          </div>

          {/* Gift guide */}
          <div id="gifts" className="detail detail--gifts">
            <h3 className="detail-title">Gift Guide</h3>
            <p className="detail-copy">
              Your presence is our favorite present. If you&apos;d like to give something
              anyway, we&apos;re saving up for our first home together.
            </p>
            <ul id="gifts-list">
              <li className="gift">Cash gifts are warmly welcome</li>
              <li className="gift">Bank and e-wallet details are on the back of your invitation</li>
              <li className="gift">A handwritten note makes us happy-cry</li>
            </ul>
          </div>

          {/* Location */}
          <div id="location" className="detail detail--location">
            <h3 className="detail-title">Location</h3>
            <p id="location-place">{WEDDING.place}</p>
            <p className="detail-copy">
              {WEDDING.date}, {WEDDING.time}
            </p>
            <div id="location-map">
              {/* Drop an <iframe> Google Map embed here */}
              <span>Map goes here</span>
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="detail detail--contact">
            <h3 className="detail-title">Contact the Partners</h3>
            <p className="detail-copy">Lost, late, or just curious? Send us a message.</p>
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
        <p id="footer-text">
          {WEDDING.groom} &amp; {WEDDING.bride}. See you in the garden.
        </p>
      </footer>
    </main>
  );
}

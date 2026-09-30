import Botanical, { FlowerSprig } from "./Botanical";
import TextReveal from "./TextReveal";
import {
  Countdown,
  MotionEnhancements,
  Navigation,
} from "./WeddingInteractions";
import { COLORS, ENTOURAGE, FAQ, WEDDING } from "../wedding";

function Flourish() {
  return (
    <div className="flourish" aria-hidden="true">
      <span />
      <FlowerSprig className="flourish-flowers" />
      <span />
    </div>
  );
}

function Arrow() {
  return (
    <span aria-hidden="true" className="arrow">
      ↗
    </span>
  );
}

function Rings() {
  return (
    <svg
      viewBox="0 0 80 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      className="rings"
    >
      <circle cx="29" cy="34" r="20" />
      <circle cx="51" cy="34" r="20" />
      <path d="m46 13-4-6 5-5h8l5 5-5 6M42 7h18M47 2l-1 5 5 6 5-6-1-5" />
    </svg>
  );
}

export default function WeddingSite() {
  return (
    <div id="wedding-site">
      <a className="skip-link" href="#main">
        Skip to invitation
      </a>
      <Navigation />
      <main id="main">
        <section
          className="hero"
          id="invitation"
          aria-labelledby="hero-title"
        >
          <div className="hero-border" aria-hidden="true" />
          <div className="hero-botanical hero-botanical-left">
            <Botanical />
          </div>
          <div className="hero-botanical hero-botanical-right">
            <Botanical />
          </div>
          <span className="hero-margin-note" aria-hidden="true">
            A little moment. A lifetime of love.
          </span>
          <div className="hero-content">
            <div className="hero-prelude">
              <FlowerSprig className="hero-posy" />
              <p className="eyebrow">Together with our families</p>
            </div>
            <h1 id="hero-title">
              <span data-scroll-name="-1">{WEDDING.groom}</span>
              <span className="hero-ampersand">&amp;</span>
              <span data-scroll-name="1">{WEDDING.bride}</span>
            </h1>
            <p className="hero-invitation">
              We joyfully invite you to celebrate our wedding
              <br className="desktop-break" /> and the beginning of our life
              together.
            </p>
            <div className="hero-date">
              <span>Saturday</span>
              <span className="date-numerals">
                14 <i>·</i> 11 <i>·</i> 26
              </span>
              <span>At nine in the morning</span>
            </div>
            <p className="hero-venue">
              {WEDDING.venue}
              <span>{WEDDING.location}</span>
            </p>
            <a className="button button-garden hero-cta" href="#rsvp">
              Kindly RSVP <Arrow />
            </a>
          </div>
          <a className="scroll-cue" href="#celebration">
            <span>The celebration</span>
            <span className="scroll-line" aria-hidden="true" />
          </a>
        </section>

        <section
          className="welcome section-shell"
          aria-labelledby="welcome-title"
        >
          <div data-reveal>
            <p className="eyebrow">A new chapter, together</p>
            <TextReveal as="h2" id="welcome-title">
              Some days stay with us <em>forever.</em>
            </TextReveal>
            <p className="section-copy">
              This will be one of ours. With grateful hearts, we invite you to
              witness our vows and share in the joy of our wedding day. It would
              mean the world to have you there.
            </p>
            <p className="signature">With love, JL &amp; Margo</p>
          </div>
          <Flourish />
          <Countdown date={WEDDING.isoDate} />
        </section>

        <section
          id="celebration"
          className="celebration section-shell"
          aria-labelledby="celebration-title"
        >
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Save the date</p>
            <TextReveal as="h2" id="celebration-title">
              The <em>celebration</em>
            </TextReveal>
            <p>One beautiful day. A lifetime to follow.</p>
          </div>
          <div className="celebration-layout">
            <div className="date-card" data-reveal>
              <div className="date-card-inner">
                <p className="eyebrow">November</p>
                <span className="large-day">14</span>
                <p className="date-card-year">2 0 2 6</p>
                <Flourish />
                <p>Saturday</p>
                <span className="date-card-time">
                  Nine o’clock in the morning
                </span>
                <Rings />
              </div>
              <FlowerSprig className="date-card-flowers" />
            </div>
            <div className="venue-content" data-reveal>
              <p className="eyebrow">Where we say “I do”</p>
              <TextReveal as="h3">{WEDDING.venue}</TextReveal>
              <p className="venue-address">{WEDDING.location}</p>
              <p className="body-copy">
                Join us as we exchange vows, surrounded by the people who mean
                the most to us.
              </p>
              <div className="venue-note">
                <span aria-hidden="true">◷</span>
                <p>
                  The ceremony begins at <strong>{WEDDING.time}</strong>
                  <br />
                  Kindly arrive early to settle in before we begin.
                </p>
              </div>
              <div className="venue-actions">
                <a
                  className="button button-outline"
                  href={WEDDING.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View directions <Arrow />
                </a>
                <a
                  className="text-link"
                  href="/john-lauren-and-marjolyn.ics"
                  download
                >
                  Add to calendar <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="entourage"
          className="entourage section-shell"
          aria-labelledby="entourage-title"
        >
          <div className="section-heading" data-reveal>
            <FlowerSprig className="section-flowers" />
            <p className="eyebrow">With love &amp; gratitude</p>
            <TextReveal as="h2" id="entourage-title">
              By our <em>side</em>
            </TextReveal>
            <p>The dear ones who stand beside us as we begin.</p>
          </div>
          <div className="officiant" data-reveal>
            <h3 className="eyebrow">{ENTOURAGE.officiant.title}</h3>
            {ENTOURAGE.officiant.names.map((name) => (
              <p className="entourage-name" key={name}>
                {name}
              </p>
            ))}
          </div>
          <div className="parents" data-reveal>
            {ENTOURAGE.parents.map((group) => (
              <div key={group.title}>
                <h3 className="eyebrow">{group.title}</h3>
                {group.names.map((name) => (
                  <p className="entourage-name" key={name}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="entourage-groups">
            {ENTOURAGE.groups.map((group) => (
              <div
                id={group.id}
                className={`entourage-group ${group.pairs ? "sponsors" : ""}`}
                key={group.id}
                data-reveal
              >
                <h3 className="eyebrow">{group.title}</h3>
                {group.pairs ? (
                  <div className="sponsor-pairs">
                    {group.pairs.map(([left, right]) => (
                      <div className="sponsor-pair" key={left}>
                        <p className="entourage-name">{left}</p>
                        <p className="entourage-name">{right}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  group.names?.map((name) => (
                    <p className="entourage-name" key={name}>
                      {name}
                    </p>
                  ))
                )}
              </div>
            ))}
          </div>
          <Flourish />
        </section>

        <section
          id="details"
          className="details section-shell"
          aria-labelledby="details-title"
        >
          <div className="section-heading" data-reveal>
            <FlowerSprig className="section-flowers" />
            <p className="eyebrow">A few thoughtful details</p>
            <TextReveal as="h2" id="details-title">
              Come as our <em>guest</em>
            </TextReveal>
          </div>
          <div className="attire-layout">
            <div className="attire-copy" data-reveal>
              <span className="section-number" aria-hidden="true">
                01 / WHAT TO WEAR
              </span>
              <TextReveal as="h3">Garden formal</TextReveal>
              <p className="body-copy">
                Soft fabrics, graceful silhouettes, and gentle shades inspired
                by a garden in bloom. We invite you to dress in our wildflower
                palette.
              </p>
              <p className="attire-note">
                Kindly reserve white and ivory for the bride.
              </p>
            </div>
            <div className="palette" data-reveal>
              <div className="swatches">
                {COLORS.map((color) => (
                  <div className="swatch-item" key={color.name}>
                    <span
                      className="swatch"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span>{color.name}</span>
                  </div>
                ))}
              </div>
              <p>A little color, a lovely celebration.</p>
            </div>
          </div>
          <div className="gift-note" data-reveal>
            <FlowerSprig className="gift-flowers" />
            <div>
              <span className="section-number">02 / A NOTE ON GIFTS</span>
              <TextReveal as="h3">
                Your presence is our greatest gift.
              </TextReveal>
              <p className="body-copy">
                Should you wish to give something more, a contribution toward
                our first home would be warmly appreciated. Most of all, we are
                grateful to share this day with you.
              </p>
            </div>
          </div>
        </section>

        <section
          id="questions"
          className="questions section-shell"
          aria-labelledby="questions-title"
        >
          <div className="questions-intro" data-reveal>
            <p className="eyebrow">Before the big day</p>
            <TextReveal as="h2" id="questions-title">
              A little
              <br />
              <em>helpful information</em>
            </TextReveal>
            <p className="body-copy">
              A few things to make your day with us a little easier.
            </p>
            <Flourish />
          </div>
          <div className="faq-list" data-reveal>
            {FAQ.map((item, index) => (
              <details className="faq-item" key={item.question}>
                <summary>
                  <span className="faq-index">0{index + 1}</span>
                  <span>{item.question}</span>
                  <span className="faq-toggle" aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          id="rsvp"
          className="rsvp section-shell"
          aria-labelledby="rsvp-title"
        >
          <div className="rsvp-botanical">
            <Botanical />
          </div>
          <div className="rsvp-botanical rsvp-botanical-right">
            <Botanical />
          </div>
          <div className="rsvp-content" data-reveal>
            <FlowerSprig className="rsvp-flowers" />
            <p className="eyebrow">The joy of your company</p>
            <TextReveal as="h2" id="rsvp-title">
              Will you join <em>us?</em>
            </TextReveal>
            <p>
              We would be delighted to celebrate with you.
              <br />
              Kindly let us know if you can join us.
            </p>
            <div className="rsvp-deadline">
              <span>Please respond by</span>
              <strong>{WEDDING.rsvpDeadline}</strong>
            </div>
            {WEDDING.rsvpUrl ? (
              <a
                className="button button-cream"
                href={WEDDING.rsvpUrl}
                target="_blank"
                rel="noreferrer"
              >
                Send your RSVP <Arrow />
              </a>
            ) : (
              <div className="rsvp-direct">
                <p>
                  Please send your response directly to
                  <br />
                  <strong>John Lauren or Marjolyn.</strong>
                </p>
                <span>A personal message is all it takes.</span>
              </div>
            )}
            <p className="rsvp-signature">
              We can’t wait to celebrate with you.
            </p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <a
          className="footer-monogram"
          href="#invitation"
          aria-label="Back to the invitation"
        >
          JL <span>&amp;</span> M
        </a>
        <p>
          John Lauren &amp; Marjolyn
          <span>November 14, 2026 · Bato, Camarines Sur</span>
        </p>
        <a className="back-to-top" href="#invitation">
          Back to the top <span aria-hidden="true">↑</span>
        </a>
      </footer>
      <MotionEnhancements />
    </div>
  );
}

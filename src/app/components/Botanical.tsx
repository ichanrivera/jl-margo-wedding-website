type BotanicalProps = {
  className?: string;
};

const roseColors = {
  blush: {
    light: "#F4D4DE",
    petal: "#EBB3C6",
    shade: "#D997AF",
    ink: "#AB728A",
  },
  buttercup: {
    light: "#FAE7AA",
    petal: "#F2D06B",
    shade: "#E1B94F",
    ink: "#AA8A39",
  },
  lavender: {
    light: "#D9C8E5",
    petal: "#B692CB",
    shade: "#A47FB9",
    ink: "#7E6090",
  },
};

function Leaf({
  transform,
  pale = false,
}: {
  transform: string;
  pale?: boolean;
}) {
  return (
    <g transform={transform} stroke="#71865D">
      <path
        d="M0 0C-5-14-24-27-22-48C-22-65-10-79 1-94C3-75 23-64 21-43C19-24 8-12 0 0Z"
        fill={pale ? "#BACCAA" : "#9DB88A"}
      />
      <path
        d="M0 0C-5-14-24-27-22-48C-22-65-10-79 1-94C-6-53 3-27 0 0Z"
        fill="#D2DEBE"
        fillOpacity=".35"
        stroke="none"
      />
      <path d="M0 0C3-27-6-53 1-94M-1-15C-6-18-13-24-17-31M0-27C-8-32-15-38-21-45M-1-41C-8-45-15-51-19-58M-1-55C-6-59-10-64-12-71M0-18C8-24 14-31 17-37M-1-32C8-38 15-45 19-51M-2-46C4-51 11-57 13-63M-1-60C3-65 6-70 6-76" />
      <path
        d="M-5-31L-8-38M-9-45L-12-51M6-36L9-43M4-51L7-57M-4-62L-5-68"
        opacity=".35"
      />
    </g>
  );
}

function Flower({
  transform,
  tone = "blush",
}: {
  transform: string;
  tone?: keyof typeof roseColors;
}) {
  const outerPetals = [-8, 27, 64, 99, 137, 170, 210, 246, 279, 316];
  const innerPetals = [12, 58, 102, 151, 192, 238, 283, 328];
  const colors = roseColors[tone];

  return (
    <g transform={transform} stroke={colors.ink}>
      {/* An irregular calyx peeks out beneath the engraved petals. */}
      <path
        d="M-13 17Q-40 21-56 11Q-42 5-28 7M12 18Q38 33 52 24Q36 15 28 10M-6 27Q-16 46-10 55Q1 41 5 28"
        fill="#9DB88A"
        stroke="#71865D"
      />
      {outerPetals.map((angle, index) => (
        <g
          key={angle}
          transform={`rotate(${angle}) scale(${index % 3 === 0 ? ".93 1.06" : "1 1"})`}
        >
          <path
            d="M-7 7C-14-3-29-8-35-22C-42-34-36-48-26-49C-22-59-8-62 0-54C10-60 23-56 25-47C39-44 38-30 29-22C20-11 8-3 6 8"
            fill={index % 3 === 0 ? colors.petal : colors.light}
          />
          <path
            d="M-4 1C-9-14-22-26-25-43M0-2C-4-17-8-33-7-48M5-4C9-18 20-28 24-40M-15-15C-19-24-27-27-30-33M11-17C16-23 16-34 17-42"
            opacity=".45"
          />
          <path
            d="M-13-36Q-13-42-17-47M2-29Q5-38 4-47M-27-20Q-29-25-30-28"
            opacity=".25"
          />
        </g>
      ))}
      {innerPetals.map((angle, index) => (
        <g
          key={angle}
          transform={`rotate(${angle}) scale(${index % 2 ? ".82 .8" : ".72 .84"})`}
        >
          <path
            d="M-5 8C-15 0-28-6-29-19C-33-30-27-42-17-39C-9-48 4-45 8-38C21-41 29-30 24-21C20-9 8-1 5 9"
            fill={index % 2 ? colors.petal : colors.light}
          />
          <path
            d="M-3 3Q-7-20-17-34M1 0Q0-20 3-34M6-2Q16-21 19-29M-15-18Q-20-24-22-29"
            opacity=".48"
          />
        </g>
      ))}
      <path
        d="M-17 6C-22-1-17-10-10-10C-14-19-3-23 3-17C12-22 20-14 16-6C23-1 19 9 10 10C8 19-6 21-10 12C-15 15-20 11-17 6Z"
        fill={colors.petal}
      />
      <path
        d="M-10 8C-17-2-6-8-2-3C-5-12 8-13 10-6C16 1 7 10 2 6C-2 16-14 11-10 8Z"
        fill={colors.shade}
        stroke="none"
      />
      <path d="M-10 8C-17-2-6-8-2-3C-5-12 8-13 10-6C16 1 7 10 2 6C-2 16-14 11-10 8ZM-4 2Q4-5 7 1Q7 7 1 7M-12-7L-14-13M11 8L14 13M2-16L0-12" />
    </g>
  );
}

function Cornflower({ transform }: { transform: string }) {
  return (
    <g transform={transform} stroke="#668AB9" strokeWidth=".8">
      {[0, 51, 105, 158, 211, 263, 312].map((angle, index) => (
        <g key={angle} transform={`rotate(${angle})`}>
          <path
            d="M-4 4C-10-3-16-9-17-17L-12-16L-15-26L-9-24L-7-32L-2-27L2-33L5-27L11-29L10-22L16-23C17-13 9-3 4 4Z"
            fill={index % 2 ? "#ADC7E7" : "#8FB0DC"}
          />
          <path d="M-2 1L-7-22M2-1L3-24M5-5L10-18M-8-9L-11-16" opacity=".5" />
        </g>
      ))}
      <path
        d="M-7-3L-5-9L0-7L5-10L8-4L10 1L6 4L6 9L0 7L-5 10L-6 4L-10 1Z"
        fill="#B692CB"
        stroke="#7E6090"
      />
      <circle r="5" fill="#F2D06B" stroke="#AA8A39" />
      <path d="M-2-2L-1-1M2-3L2-2M-3 1L-2 2M1 1L2 2M0 4L1 3" stroke="#AA8A39" />
    </g>
  );
}

function Daisy({ transform }: { transform: string }) {
  return (
    <g transform={transform} stroke="#BEA056" strokeWidth=".7">
      {[0, 34, 69, 101, 134, 165, 198, 232, 263, 297, 330].map(
        (angle, index) => (
          <g key={angle} transform={`rotate(${angle})`}>
            <path
              d="M-2 4C-5-5-13-15-10-26C-9-35-3-37 0-34C5-40 11-34 10-26C10-17 4-6 2 4Z"
              fill={index % 2 ? "#FAE5A0" : "#F2D06B"}
            />
            <path d="M0-5Q-2-19 0-29M-3-17L-4-26M3-17L5-26" opacity=".42" />
          </g>
        ),
      )}
      <circle r="10" fill="#DDAF50" />
      <path
        d="M-6-2L-5-3M-2-6L-1-7M3-6L4-5M6-2L7-1M-1-2L0-1M-5 3L-4 4M0 5L1 6M4 2L5 3"
        stroke="#927341"
        strokeWidth="1.3"
      />
    </g>
  );
}

function Lavender({ transform }: { transform: string }) {
  return (
    <g transform={transform} stroke="#71865D" strokeWidth=".9">
      <path d="M0 17C4-17-6-40 0-77" />
      {[
        [-1, -15, -36],
        [0, -25, 33],
        [-1, -35, -31],
        [-2, -45, 30],
        [-1, -55, -23],
        [0, -64, 17],
      ].map(([x, y, angle], index) => (
        <g key={y} transform={`translate(${x} ${y}) rotate(${angle})`}>
          <path
            d="M0 1C-8-3-11-13-6-17C-4-21 0-18 1-15C8-18 10-11 7-7C6-3 2 0 0 1Z"
            fill={index % 2 ? "#CBB2DA" : "#B692CB"}
            stroke="#8E70A1"
          />
          <path d="M0-1Q-4-7-3-12M1-2L3-10" stroke="#8E70A1" opacity=".5" />
        </g>
      ))}
      <path
        d="M0-72C-7-77-4-87 0-90C5-85 7-77 0-72Z"
        fill="#CBB2DA"
        stroke="#8E70A1"
      />
      <path
        d="M0 9Q-13 0-16-12Q-4-8 0 9M1 1Q13-8 13-19Q3-12 1 1"
        fill="#9DB88A"
      />
    </g>
  );
}

/** A hand-colored botanical plate in the wedding's five attire colors. */
export default function Botanical({ className }: BotanicalProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 360 650"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      stroke="#71865D"
      strokeWidth=".8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g>
        {/* The double lines preserve the character of a copperplate stem. */}
        <path d="M172 639C166 589 163 559 174 511C190 442 161 409 174 350C188 287 191 254 187 200M178 639C169 586 169 558 179 512C195 442 167 409 179 351C193 288 195 252 190 200" />
        <path d="M172 554C136 509 111 454 99 409C92 382 91 351 88 322M176 554C140 509 115 454 102 409C96 382 96 351 91 322" />
        <path d="M183 483C222 450 245 409 266 389M185 487C225 454 248 412 269 390" />
        <path d="M177 375C206 330 241 290 246 239C251 190 232 152 261 108M180 375C210 330 245 290 250 239C255 190 236 152 264 109" />
        <path d="M170 603C140 580 108 566 73 568M170 602C134 578 108 562 73 568M171 580C206 561 238 530 248 503M172 577C206 558 233 530 248 503" />
        <path d="M169 445C139 421 127 391 127 368M177 342C153 309 141 285 138 258M194 324C224 319 248 311 267 297M104 421C72 413 54 392 46 373M241 284C220 265 211 244 214 224M246 215C269 196 280 174 283 154" />

        {/* Airy flowering branches break up the broad garden rose foliage. */}
        <path d="M178 529C205 490 250 489 290 455M132 477C101 463 68 475 42 448M176 379C147 348 150 291 111 245M246 233C284 222 298 195 315 166M181 282C160 235 109 210 93 175M250 178C283 146 299 117 307 88" />
        <Lavender transform="translate(290 455) rotate(24) scale(.8)" />
        <Lavender transform="translate(42 448) rotate(-26) scale(.65)" />
        <Lavender transform="translate(111 245) rotate(-30) scale(.75)" />
        <Lavender transform="translate(307 88) rotate(16) scale(.54)" />

        <Leaf transform="translate(160 590) rotate(-67) scale(.81)" />
        <Leaf transform="translate(122 573) rotate(-50) scale(.69)" pale />
        <Leaf transform="translate(92 567) rotate(-73) scale(.54)" />
        <Leaf transform="translate(198 559) rotate(37) scale(.8)" />
        <Leaf transform="translate(220 540) rotate(67) scale(.65)" pale />
        <Leaf transform="translate(176 519) rotate(19) scale(.9)" />
        <Leaf transform="translate(153 520) rotate(-30) scale(.87)" />
        <Leaf transform="translate(130 474) rotate(-78) scale(.84)" />
        <Leaf transform="translate(113 443) rotate(-22) scale(.72)" pale />
        <Leaf transform="translate(98 408) rotate(-71) scale(.62)" />
        <Leaf transform="translate(70 402) rotate(-37) scale(.52)" />
        <Leaf transform="translate(175 453) rotate(-30) scale(.76)" />
        <Leaf transform="translate(216 452) rotate(72) scale(.78)" />
        <Leaf transform="translate(240 424) rotate(26) scale(.58)" pale />
        <Leaf transform="translate(176 383) rotate(20) scale(.68)" />
        <Leaf transform="translate(148 300) rotate(-60) scale(.64)" />
        <Leaf transform="translate(138 275) rotate(-24) scale(.57)" />
        <Leaf transform="translate(220 318) rotate(56) scale(.65)" />
        <Leaf transform="translate(242 283) rotate(25) scale(.74)" />
        <Leaf transform="translate(229 271) rotate(-35) scale(.58)" pale />
        <Leaf transform="translate(187 253) rotate(-43) scale(.7)" />
        <Leaf transform="translate(247 208) rotate(45) scale(.57)" />
        <Leaf transform="translate(242 174) rotate(-22) scale(.53)" />
        <Leaf transform="translate(266 177) rotate(46) scale(.48)" />

        {/* A nodding rosebud balances the three open garden roses. */}
        <g transform="translate(265 100) rotate(26)" stroke="#AB728A">
          <path
            d="M-5 15C-17 2-17-9-9-19C-5-28 7-28 13-18C23-8 21 5 5 16Z"
            fill="#EBB3C6"
          />
          <path d="M-5 13Q-13-6-7-18Q2-17 4-5M4 14C0 5 0-8 8-20M5 13Q20 0 13-12M-6 13L-15-3Q-4 0 1 12M5 15Q15 2 20 0Q17 12 5 19L0 23L-5 16M1-17Q6-25 10-18" />
          <path
            d="M-6 13L-15-3Q-4 0 1 12M5 15Q15 2 20 0Q17 12 5 19L0 23L-5 16"
            fill="#9DB88A"
            stroke="#71865D"
          />
        </g>

        <Cornflower transform="translate(93 175) rotate(-10) scale(.75)" />
        <Cornflower transform="translate(315 166) rotate(22) scale(.73)" />
        <Cornflower transform="translate(146 372) rotate(13) scale(.66)" />
        <Daisy transform="translate(276 490) rotate(18) scale(.72)" />
        <Daisy transform="translate(73 466) rotate(-16) scale(.58)" />
        <Flower
          transform="translate(185 171) rotate(-14) scale(1.05)"
          tone="blush"
        />
        <Flower
          transform="translate(85 307) rotate(-28) scale(.8)"
          tone="buttercup"
        />
        <Flower
          transform="translate(275 365) rotate(22) scale(.78)"
          tone="lavender"
        />

        {/* Fine stem hatching gives the plate its lightly engraved texture. */}
        <path
          d="M173 626L176 620M172 613L174 608M170 586L172 581M173 540L176 535M177 512L180 507M182 477L185 472M180 417L183 411M176 367L179 361M185 304L188 298M190 244L192 238M109 437L112 432M99 402L102 397M94 370L97 365M247 245L250 240M242 192L245 187"
          opacity=".42"
        />
      </g>
    </svg>
  );
}

/** A small floral divider that shares the bouquet's hand-colored engraving. */
export function FlowerSprig({ className }: BotanicalProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      stroke="#71865D"
      strokeWidth=".8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 73C59 63 76 43 119 58C157 71 193 62 224 35M20 72C57 58 77 41 119 56C158 68 188 63 223 34M60 60L53 43M165 64L175 42M192 58L205 33" />
      <Leaf transform="translate(30 69) rotate(-40) scale(.37)" pale />
      <Leaf transform="translate(48 62) rotate(-78) scale(.34)" />
      <Leaf transform="translate(78 54) rotate(-7) scale(.38)" />
      <Leaf transform="translate(146 64) rotate(123) scale(.34)" pale />
      <Leaf transform="translate(176 63) rotate(61) scale(.37)" />
      <Leaf transform="translate(206 49) rotate(72) scale(.28)" pale />
      <Lavender transform="translate(208 46) rotate(42) scale(.43)" />
      <Daisy transform="translate(54 43) rotate(-12) scale(.49)" />
      <Flower
        transform="translate(109 48) rotate(-15) scale(.49)"
        tone="blush"
      />
      <Cornflower transform="translate(153 43) rotate(14) scale(.58)" />
      <Flower
        transform="translate(185 53) rotate(30) scale(.29)"
        tone="lavender"
      />
    </svg>
  );
}

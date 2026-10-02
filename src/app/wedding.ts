export const WEDDING = {
  groom: "John Lauren",
  bride: "Marjolyn",
  fullDate: "Saturday, November 14, 2026",
  time: "9:00 a.m.",
  isoDate: "2026-11-14T09:00:00+08:00",
  venue: "Casa Dali Bato",
  location: "Bato, Camarines Sur",
  rsvpDeadline: "October 14, 2026",
  rsvpUrl:
    "https://docs.google.com/forms/d/1sfAWCzxCGoo5Yrx94K_NiIytoKAdqlUgbdzAQ0sjPFs/viewform?chromeless=1&edit_requested=true",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Casa%20Dali%20Bato%2C%20Bato%2C%20Camarines%20Sur",
};

export interface EntourageGroup {
  id: string;
  title: string;
  names?: string[];
  pairs?: [string, string][];
}

interface Entourage {
  officiant: { id: string; title: string; names: string[] };
  parents: { title: string; names: string[] }[];
  groups: EntourageGroup[][];
}

export const ENTOURAGE: Entourage = {
  officiant: {
    id: "officiant",
    title: "Wedding Officiant",
    names: ["Honorable Mayor Enric Dancalan"],
  },
  parents: [
    {
      title: "Parents of the Groom",
      names: ["Mr. Julin Alipo-on Sevilla", "Mrs. Melody Rivera Sevilla"],
    },
    {
      title: "Parents of the Bride",
      names: ["Mr. Javier Magalona Docot", "Mrs. Marites Gallego Docot"],
    },
  ],
  groups: [
    [
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
    ],
    [
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
    ],
    [
      { id: "groomsman", title: "Groomsman", names: ["Dave Docot"] },
      { id: "bridesmaid", title: "Bridesmaid", names: ["Beyonce Jen Tumbado"] },
    ],
    [
      {
        id: "to-light-our-path",
        title: "To Light Our Path",
        names: ["Josalyn Gallego", "Jameson Docot"],
      },
      {
        id: "to-bind-us-as-one",
        title: "To Bind Us as One",
        names: ["Jezka Lorraine Sevilla", "Jhunson Docot"],
      },
    ],
    [
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
    ],
    [
      {
        id: "little-bride",
        title: "Little Bride",
        names: ["Winter Amellie Docot"],
      },
    ],
    [
      {
        id: "ring-bearer",
        title: "Ring Bearer",
        names: ["Gabriel Francois Gapas"],
      },
      {
        id: "bible-bearer",
        title: "Bible Bearer",
        names: ["Ezio Conrad Rivera"],
      },
      {
        id: "coin-bearer",
        title: "Coin Bearer",
        names: ["Jordan Clark Docot"],
      },
    ],
    [
      {
        id: "flower-boy",
        title: "Flower Boy",
        names: ["Trent Jacob Catambay"],
      },
      {
        id: "flower-girls",
        title: "Flower Girls",
        names: [
          "Jhelai Patrice Abanilla",
          "Christine Joy Docot",
          "Raze Follosco",
        ],
      },
    ],
  ],
};

export const COLORS = [
  { name: "Sage", hex: "#9DB88A" },
  { name: "Blush", hex: "#EBB3C6" },
  { name: "Buttercup", hex: "#F2D06B" },
  { name: "Cornflower", hex: "#8FB0DC" },
  { name: "Lavender", hex: "#B692CB" },
];

export const FAQ = [
  {
    question: "What time should I arrive?",
    answer:
      "Our ceremony begins at 9:00 a.m. Kindly arrive a little earlier so you can settle in and be seated before we exchange our vows.",
  },
  {
    question: "May I bring my children?",
    answer:
      "We kindly request an adults-only celebration, with the exception of the children in our wedding entourage. Thank you for understanding.",
  },
  {
    question: "May I take photos during the ceremony?",
    answer:
      "We invite you to be fully present with us. Please keep phones and cameras tucked away during the ceremony as we say our vows.",
  },
  {
    question: "Do you have a gift preference?",
    answer:
      "Your presence is the greatest gift. Should you wish to give something more, a contribution toward our first home would be warmly appreciated. A handwritten note would also mean so much to us.",
  },
  {
    question: "Who can I contact with a question?",
    answer:
      "Please message JL or Margo directly with any questions about the celebration. We would be happy to help and look forward to seeing you.",
  },
];

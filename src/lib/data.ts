export const site = {
  name: "Warriors",
  fullName: "Warriors Aluminium & Glass",
  group: "Warriors Group",
  tagline: "Precision in Aluminium. Clarity in Glass.",
  description:
    "Warriors Aluminium & Glass designs, fabricates, and installs premium facades, windows, doors, railings, and pergolas across Dubai and the UAE — engineered for the region's climate, built to last.",
  phone: "+971 6 742 1352",
  phoneLocal: "06 742 1352",
  phoneHref: "tel:+97167421352",
  email: "info@warriorsaluminium.com",
  emailHref: "mailto:info@warriorsaluminium.com",
  areas: "Dubai & across the UAE",
  address: "Office No. 5, Al Sajaa Industrial Area, Sharjah, United Arab Emirates",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Team", href: "/our-team" },
  { label: "FAQs", href: "/faqs" },
];

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "facades",
    shortTitle: "Facades",
    title: "Aluminium & Glass Facades",
    summary:
      "Structural glazing and curtain wall systems that give buildings a precise, contemporary skin.",
    description:
      "We design and install curtain wall and structural glazing systems engineered for Dubai's heat, humidity, and wind loads — without compromising the clean, minimal lines architects specify. Every facade is thermally broken and pressure-tested before it leaves fabrication.",
    features: [
      "Unitized & stick curtain wall systems",
      "Thermally broken profiles for UAE climate",
      "Structural silicone & captured glazing options",
      "Wind load & pressure testing to local code",
    ],
    image: "/gallery/facade-3.jpg",
    imageAlt: "Close-up of a wood-finish aluminium composite facade panel installation",
  },
  {
    slug: "windows-doors",
    shortTitle: "Windows & Doors",
    title: "Windows, Doors & Partitions",
    summary:
      "Slim aluminium frame systems that maximize glass and dissolve the line between indoors and out.",
    description:
      "Not a simple window. Our minimal-frame sliding, pivot, and bifold systems shrink the profile so glass — not aluminium — dominates the opening. Motorized tracks, concealed hardware, and interior glass partitions are all built to the same standard of quiet, essential lines.",
    features: [
      "Ultra-slim sliding & bifold door systems",
      "Motorized & concealed-track options",
      "Frameless interior glass partitions",
      "Acoustic & solar-control glazing",
    ],
    image: "/gallery/glass-2.jpg",
    imageAlt: "Frameless sliding glass wardrobe doors in a walk-in closet",
  },
  {
    slug: "railings",
    shortTitle: "Railings",
    title: "Glass Railings & Balustrades",
    summary:
      "Frameless and semi-framed glass balustrades for balconies, staircases, and pool edges.",
    description:
      "Our railings use toughened, laminated glass set in low-profile aluminium channels or discreet stainless fittings — holding sightlines open while meeting UAE structural safety codes for balconies, staircases, and pool surrounds.",
    features: [
      "Frameless & semi-framed glass balustrades",
      "Toughened & laminated safety glass",
      "Stair, balcony & pool-edge systems",
      "Powder-coated or brushed aluminium channels",
    ],
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80",
    imageAlt: "Modern apartment building with frameless glass balcony railings",
  },
  {
    slug: "pergolas",
    shortTitle: "Pergolas",
    title: "Glass Pergolas & Patio Covers",
    summary:
      "Fixed, retractable, and motorized outdoor glass structures built for the UAE sun.",
    description:
      "From fixed glass-roof pergolas to fully motorized retractable systems, our outdoor structures are engineered in powder-coated aluminium with tempered glass or louvered roofing — so terraces, majlis areas, and pool decks stay usable all year round.",
    features: [
      "Fixed, retractable & motorized pergolas",
      "Tempered glass or aluminium louvered roofs",
      "Integrated lighting & rain-sensor automation",
      "Custom sizing for villas & commercial terraces",
    ],
    image: "/gallery/pergola-5.jpg",
    imageAlt: "Louvered aluminium pergola with LED lighting over an illuminated pool at dusk",
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  category: "pergolas" | "facades" | "glasswork" | "craftsmanship";
  tall?: boolean;
};

export const gallery: GalleryImage[] = [
  { src: "/gallery/pergola-5.jpg", alt: "Louvered aluminium pergola with LED lighting over an illuminated pool at dusk", category: "pergolas", tall: true },
  { src: "/gallery/pergola-1.jpg", alt: "Stone pathway leading to a lit aluminium pergola through palm trees", category: "pergolas" },
  { src: "/gallery/pergola-7.jpg", alt: "Aluminium pergola over a pool with an integrated outdoor kitchen", category: "pergolas" },
  { src: "/gallery/pergola-3.jpg", alt: "Timber-slat pergola over an outdoor dining area at night", category: "pergolas" },
  { src: "/gallery/pergola-8.jpg", alt: "Bamboo-slat pergola glowing beside a lit pool at dusk", category: "pergolas" },
  { src: "/gallery/pergola-2.jpg", alt: "Villa terrace with an aluminium pergola and glass sliding doors at dusk", category: "pergolas", tall: true },
  { src: "/gallery/pergola-9.jpg", alt: "Rooftop lounge under a bamboo-slat pergola", category: "pergolas" },
  { src: "/gallery/pergola-4.jpg", alt: "Villa pool and pergola with neighbouring villas in the background", category: "pergolas" },
  { src: "/gallery/pergola-6.jpg", alt: "Pergola and pool at warm sunset", category: "pergolas" },
  { src: "/gallery/facade-3.jpg", alt: "Close-up of a wood-finish aluminium composite facade panel installation", category: "facades", tall: true },
  { src: "/gallery/facade-1.jpg", alt: "Villa entrance facade with warm architectural lighting at dusk", category: "facades" },
  { src: "/gallery/facade-2.jpg", alt: "Villa garage and facade lit at night", category: "facades" },
  { src: "/gallery/facade-4.jpg", alt: "Wide angle of a wood-finish aluminium composite roof soffit", category: "facades" },
  { src: "/gallery/facade-5.jpg", alt: "Aluminium composite roof panels under installation", category: "facades" },
  { src: "/gallery/facade-6.jpg", alt: "Workers installing an aluminium composite roof structure", category: "facades" },
  { src: "/gallery/glass-2.jpg", alt: "Frameless sliding glass wardrobe doors in a walk-in closet", category: "glasswork", tall: true },
  { src: "/gallery/glass-1.jpg", alt: "Frameless glass shower enclosure with marble walls", category: "glasswork" },
  { src: "/gallery/glass-3.jpg", alt: "Bedroom with a frameless glass wardrobe partition", category: "glasswork" },
  { src: "/gallery/glass-4.jpg", alt: "Custom-lit shelving fabricated in aluminium and glass", category: "glasswork" },
  { src: "/gallery/craft-1.jpg", alt: "Staircase structure under construction with in-house fabricated frame", category: "craftsmanship" },
];

export const stats = [
  { value: "10+", label: "Years serving the UAE" },
  { value: "500+", label: "Projects delivered" },
  { value: "2–5", label: "Year system warranty" },
  { value: "100%", label: "In-house fabrication" },
];

export const values = [
  {
    title: "Precision Fabrication",
    description:
      "Every profile is cut, welded, and glazed in-house to exact tolerances — no third-party guesswork.",
  },
  {
    title: "Built for the Climate",
    description:
      "Thermal breaks, solar coatings, and marine-grade hardware chosen specifically for UAE heat and humidity.",
  },
  {
    title: "Long-Term Relationships",
    description:
      "We treat every project as the start of a relationship, not a one-off job — from first site visit to after-sales service.",
  },
];

export const team = [
  {
    name: "Sarfaraz Hassan",
    role: "Co-Founder",
    initials: "SH",
    bio: "Co-founded Warriors Group over a decade ago on a commitment to reliability and high-standard craftsmanship, bringing that same discipline to Warriors' aluminium and glass work.",
  },
  {
    name: "Waqas Aslam",
    role: "Co-Founder",
    initials: "WA",
    bio: "Oversees delivery and client relationships across Warriors' projects, with a focus on building work that lasts well beyond handover.",
  },
];

export const faqs = [
  {
    question: "Which areas of the UAE do you service?",
    answer:
      "We're based in Sharjah and work across the UAE — including Dubai, Abu Dhabi, and the Northern Emirates — for both residential and commercial projects.",
  },
  {
    question: "Do you offer a free site visit and quotation?",
    answer:
      "Yes. Every project starts with a free site visit and measurement, followed by a detailed 2D design and no-obligation quotation before any work begins.",
  },
  {
    question: "What warranty comes with your systems?",
    answer:
      "Our aluminium and glass systems carry a 2–5 year warranty depending on the product line, covering hardware, glazing seals, and structural fabrication.",
  },
  {
    question: "How long does a typical installation take?",
    answer:
      "A standard residential pergola or railing installation typically takes 1–2 weeks from final measurement, while facade and large-scale glazing projects are scheduled individually based on scope.",
  },
  {
    question: "Can systems be motorized or automated?",
    answer:
      "Yes — retractable pergolas, sliding doors, and select partition systems can be fitted with motorized tracks, remote control, and rain or wind sensors.",
  },
  {
    question: "Do you fabricate custom sizes and finishes?",
    answer:
      "All of our work is made to measure. Aluminium profiles are available in a range of powder-coated finishes, and glass can be specified for solar control, acoustic performance, or safety rating.",
  },
];

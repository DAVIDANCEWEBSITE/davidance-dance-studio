/**
 * DAVIDANCE — CONTEÚDO CENTRAL
 * Edite aqui todos os textos, links, imagens e dados do site.
 * Valores marcados com [PLACEHOLDER] devem ser substituídos.
 */

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export const siteConfig = {
  name: "Davidance",
  tagline: "Onde a dança é família.",
  showHeroTagline: false,
  // Substitua por "/logo.png" (coloque o ficheiro em /public) ou por um URL.
  logo: "" as string,
  hero: {
    // [PLACEHOLDER: hero.mp4] — coloque o vídeo em /public/hero.mp4 ou indique um URL.
    video: "/hero.mp4",
    poster: u("photo-1508700929628-666bc8bd84ea", 1920),
  },

  links: {
    joinFamily: "https://forms.gle/PLACEHOLDER-familia",
    trialClass: "https://forms.gle/PLACEHOLDER-aula-experimental",
    enrol: "https://forms.gle/PLACEHOLDER-inscricao",
    audition: "https://forms.gle/PLACEHOLDER-audicao",
    weddings: "https://forms.gle/PLACEHOLDER-casamentos",
    linktree: "https://linktr.ee/PLACEHOLDER",
    instagram: "https://instagram.com/PLACEHOLDER",
    facebook: "https://facebook.com/PLACEHOLDER",
    maps: "https://maps.google.com/?q=Lisboa",
    mapsEmbed: "https://www.google.com/maps?q=Lisboa&output=embed",
  },

  contacts: {
    phone: "+351 900 000 000",
    email: "geral@davidance.pt",
    address: "Rua da Dança, 123, 1000-000 Lisboa",
    hours: ["Seg – Sex: 16h00 – 22h00", "Sábado: 9h00 – 13h00"],
  },

  /**
   * AUDIÇÕES — Projeto Davidance
   * false → botão desativado com o texto "Já estamos cheios".
   * true  → botão ativo "Marca a tua audição" (abre links.audition).
   */
  auditionsOpen: false,

  timetable: {
    // [PLACEHOLDER: horario.jpg] — coloque em /public/horario.jpg
    image: u("photo-1434030216411-0b793f4b4173", 1600),
    download: u("photo-1434030216411-0b793f4b4173", 2400),
  },

  facilities: {
    text: "Salas amplas e climatizadas, renovadas todos os anos para que cada aula seja vivida com conforto.",
    photos: [
      u("photo-1518611012118-696072aa579a"),
      u("photo-1540497077202-7c8a3999166f"),
      u("photo-1524594152303-9fd13543fe6e"),
      u("photo-1571019613454-1cb2f99b2d8b"),
      u("photo-1535525153412-5a42439a210d"),
    ],
  },

  groupPhoto: u("photo-1504609813442-a8924e83f76e", 1400),
  projectHero: u("photo-1547153760-18fc86324498", 1920),
  weddingsHero: u("photo-1519741497674-611481863552", 1600),
};

export type Style = {
  slug: string;
  name: string;
  cover: string;
  description: string;
  teacher: string;
  ageRange: string;
  schedule: { day: string; time: string }[];
  gallery: string[];
};

export const styles: Style[] = [
  {
    slug: "ballet", name: "Ballet", cover: u("photo-1518834107812-67b0b7c58434"),
    description: "A base de toda a dança. Técnica, postura e graciosidade num ambiente acolhedor, onde cada passo é trabalhado com paciência e carinho.",
    teacher: "Ana Ribeiro", ageRange: "4 – 18 anos",
    schedule: [{ day: "Segunda", time: "17h30 – 18h30" }, { day: "Quarta", time: "17h30 – 18h30" }],
    gallery: [u("photo-1518834107812-67b0b7c58434"), u("photo-1524594152303-9fd13543fe6e"), u("photo-1545959570-a94084071b5d")],
  },
  {
    slug: "hip-hop", name: "Hip Hop", cover: u("photo-1535525153412-5a42439a210d"),
    description: "Energia, atitude e groove. Aulas dinâmicas que exploram a cultura urbana e a liberdade de expressão.",
    teacher: "Rui Costa", ageRange: "8 – 25 anos",
    schedule: [{ day: "Terça", time: "19h00 – 20h00" }, { day: "Quinta", time: "19h00 – 20h00" }],
    gallery: [u("photo-1535525153412-5a42439a210d"), u("photo-1547153760-18fc86324498")],
  },
  {
    slug: "contemporaneo", name: "Contemporâneo", cover: u("photo-1547153760-18fc86324498"),
    description: "Movimento orgânico e emocional, que liga técnica e improvisação para contar histórias com o corpo.",
    teacher: "Marta Lopes", ageRange: "12+ anos",
    schedule: [{ day: "Quarta", time: "20h00 – 21h30" }],
    gallery: [],
  },
  {
    slug: "jazz", name: "Jazz", cover: u("photo-1508700929628-666bc8bd84ea"),
    description: "Ritmo, musicalidade e expressão cénica — um estilo vibrante que brilha em palco.",
    teacher: "Sofia Martins", ageRange: "10 – 18 anos",
    schedule: [{ day: "Sexta", time: "18h00 – 19h00" }],
    gallery: [u("photo-1508700929628-666bc8bd84ea")],
  },
  {
    slug: "danca-latina", name: "Dança Latina", cover: u("photo-1504609813442-a8924e83f76e"),
    description: "Salsa, bachata e muito calor latino. Para dançar a pares ou sozinho, sempre com um sorriso.",
    teacher: "Carlos Mendes", ageRange: "16+ anos",
    schedule: [{ day: "Quinta", time: "21h00 – 22h00" }],
    gallery: [],
  },
  {
    slug: "danca-moderna", name: "Dança Moderna", cover: u("photo-1545959570-a94084071b5d"),
    description: "Criatividade e técnica moderna para quem quer explorar novas formas de movimento.",
    teacher: "Marta Lopes", ageRange: "10+ anos",
    schedule: [{ day: "Terça", time: "18h00 – 19h00" }],
    gallery: [],
  },
  {
    slug: "zumba", name: "Zumba", cover: u("photo-1571019613454-1cb2f99b2d8b"),
    description: "Uma festa de fitness ao ritmo de músicas latinas e internacionais. Diversão garantida!",
    teacher: "Joana Silva", ageRange: "Adultos",
    schedule: [{ day: "Segunda", time: "20h00 – 21h00" }, { day: "Sábado", time: "10h00 – 11h00" }],
    gallery: [],
  },
  {
    slug: "baby-dance", name: "Baby Dance", cover: u("photo-1540497077202-7c8a3999166f"),
    description: "Os primeiros passos na dança: jogos, música e muita imaginação para os mais pequenos.",
    teacher: "Ana Ribeiro", ageRange: "3 – 5 anos",
    schedule: [{ day: "Sábado", time: "11h00 – 11h45" }],
    gallery: [],
  },
];

export type Teacher = { name: string; photo: string; styleSlug: string };

export const teachers: Teacher[] = [
  { name: "Ana Ribeiro", photo: u("photo-1494790108377-be9c29b29330", 800), styleSlug: "ballet" },
  { name: "Rui Costa", photo: u("photo-1500648767791-00dcc994a43e", 800), styleSlug: "hip-hop" },
  { name: "Marta Lopes", photo: u("photo-1438761681033-6461ffad8d80", 800), styleSlug: "contemporaneo" },
  { name: "Sofia Martins", photo: u("photo-1544005313-94ddf0286df2", 800), styleSlug: "jazz" },
  { name: "Carlos Mendes", photo: u("photo-1506794778202-cad84cf45f1d", 800), styleSlug: "danca-latina" },
  { name: "Joana Silva", photo: u("photo-1534528741775-53994a69daeb", 800), styleSlug: "zumba" },
];

export type Testimonial = { couple: string; text: string; photos: string[] };

export const testimonials: Testimonial[] = [
  { couple: "Inês & Tiago", text: "A nossa primeira dança foi o momento mais emocionante do dia. Obrigado por nos fazerem sentir tão confiantes!", photos: [u("photo-1519741497674-611481863552", 900), u("photo-1511285560929-80b456fea0bc", 900)] },
  { couple: "Beatriz & João", text: "Chegámos sem saber dar um passo e saímos com uma coreografia que deixou todos os convidados de boca aberta.", photos: [u("photo-1465495976277-4387d4b0b4c6", 900)] },
  { couple: "Catarina & Miguel", text: "Profissionalismo, paciência e muito carinho. Recomendamos de olhos fechados.", photos: [u("photo-1522673607200-164d1b6ce486", 900), u("photo-1606800052052-a08af7148866", 900)] },
];

export type ProjectMedia =
  | { type: "image"; src: string }
  | { type: "youtube"; id: string }
  | { type: "video"; src: string; poster?: string };

export const projectYears: { year: number; description: string; media: ProjectMedia[] }[] = [
  { year: 2026, description: "Um ano de palco, partilha e superação.", media: [
    { type: "youtube", id: "dQw4w9WgXcQ" },
    { type: "image", src: u("photo-1547153760-18fc86324498") },
    { type: "image", src: u("photo-1508700929628-666bc8bd84ea") },
    { type: "image", src: u("photo-1545959570-a94084071b5d") },
  ] },
  { year: 2025, description: "Novas coreografias, novos sonhos.", media: [
    { type: "image", src: u("photo-1518834107812-67b0b7c58434") },
    { type: "image", src: u("photo-1535525153412-5a42439a210d") },
    { type: "image", src: u("photo-1504609813442-a8924e83f76e") },
  ] },
  { year: 2024, description: "Onde tudo começou.", media: [
    { type: "image", src: u("photo-1524594152303-9fd13543fe6e") },
    { type: "image", src: u("photo-1540497077202-7c8a3999166f") },
  ] },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/estilos", label: "Estilos" },
  { to: "/projeto-davidance", label: "Projeto Davidance" },
  { to: "/casamentos", label: "Casamentos" },
  { to: "/horario-contactos", label: "Horário e Contactos" },
] as const;

export const getStyle = (slug: string) => styles.find((s) => s.slug === slug);
export const getTeacherByName = (name: string) => teachers.find((t) => t.name === name);

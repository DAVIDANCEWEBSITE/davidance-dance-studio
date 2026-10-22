import wedding_alexandra_hugo from "@/assets/casamento-alexandra-hugo.jpg.asset.json";
import wedding_andreia_diogo from "@/assets/casamento-andreia-diogo.jpg.asset.json";
import wedding_carina_andre from "@/assets/casamento-carina-andre.jpg.asset.json";
import wedding_catarina_pedro from "@/assets/casamento-catarina-pedro.jpg.asset.json";
import wedding_claudia_pedro from "@/assets/casamento-claudia-pedro.jpg.asset.json";
import wedding_daniela_rui from "@/assets/casamento-daniela-rui.jpg.asset.json";
import wedding_filipa_miguel from "@/assets/casamento-filipa-miguel.jpg.asset.json";
import wedding_ines_bruno from "@/assets/casamento-ines-bruno.jpg.asset.json";
import wedding_ines_diogo from "@/assets/casamento-ines-diogo.jpg.asset.json";
import wedding_ines_miguel from "@/assets/casamento-ines-miguel.jpg.asset.json";
import wedding_irina_filipe from "@/assets/casamento-irina-filipe.jpg.asset.json";
import wedding_joana_daniel from "@/assets/casamento-joana-daniel.jpg.asset.json";
import wedding_joana_helder from "@/assets/casamento-joana-helder.jpg.asset.json";
import wedding_joana_lourenco from "@/assets/casamento-joana-lourenco.jpg.asset.json";
import wedding_katharina_ricardo from "@/assets/casamento-katharina-ricardo.jpg.asset.json";
import wedding_katherine_antonino from "@/assets/casamento-katherine-antonino.jpg.asset.json";
import wedding_margarida_andre from "@/assets/casamento-margarida-andre.jpg.asset.json";
import wedding_mariana_joao from "@/assets/casamento-mariana-joao.jpg.asset.json";
import wedding_mariana_pedro from "@/assets/casamento-mariana-pedro.jpg.asset.json";
import wedding_nanci_joao from "@/assets/casamento-nanci-joao.jpg.asset.json";
import wedding_paula_paulo from "@/assets/casamento-paula-paulo.jpg.asset.json";
import wedding_rafaela_rui from "@/assets/casamento-rafaela-rui.jpg.asset.json";
import wedding_rita_david from "@/assets/casamento-rita-david.jpg.asset.json";
import wedding_veronica_diogo from "@/assets/casamento-veronica-diogo.jpg.asset.json";
import wedding_zelia_joao from "@/assets/casamento-zelia-joao.jpg.asset.json";
import cls_danca_criativa from "@/assets/class-danca-criativa.jpg.asset.json";
import cls_contemporaneo_kids from "@/assets/class-contemporaneo-kids.jpg.asset.json";
import cls_ballet_kids from "@/assets/class-ballet-kids.jpg.asset.json";
import cls_hip_hop_kids from "@/assets/class-hip-hop-kids.jpg.asset.json";
import cls_flexibilidade from "@/assets/class-flexibilidade.jpg.asset.json";
import cls_acrobacias from "@/assets/class-acrobacias.jpg.asset.json";
import cls_contemporaneo from "@/assets/class-contemporaneo.jpg.asset.json";
import cls_lyrical_jazz from "@/assets/class-lyrical-jazz.jpg.asset.json";
import cls_ballet from "@/assets/class-ballet.jpg.asset.json";
import cls_hip_hop from "@/assets/class-hip-hop.jpg.asset.json";
import cls_choreography from "@/assets/class-choreography.jpg.asset.json";
import cls_high_heels from "@/assets/class-high-heels.jpg.asset.json";
import cls_kizomba_fusion from "@/assets/class-kizomba-fusion.jpg.asset.json";
import cls_ritmos_latinos from "@/assets/class-ritmos-latinos.jpg.asset.json";
import cls_danca_oriental from "@/assets/class-danca-oriental.jpg.asset.json";
import img_projeto_hero from "@/assets/projeto-hero.jpg.asset.json";
import img_andreia_paulo from "@/assets/home-andreia-paulo.jpg.asset.json";
import img_beatriz from "@/assets/home-beatriz.jpg.asset.json";
import img_casamentos from "@/assets/home-casamentos.jpg.asset.json";
import img_davidance from "@/assets/home-davidance.jpg.asset.json";
import img_joana from "@/assets/home-joana.jpg.asset.json";
import img_jovens from "@/assets/home-jovens.jpg.asset.json";
import img_kids from "@/assets/home-kids.jpg.asset.json";
import img_professores from "@/assets/home-professores.jpg.asset.json";
import img_ricardo from "@/assets/home-ricardo.jpg.asset.json";
import img_sara from "@/assets/home-sara.jpg.asset.json";
import img_sofia from "@/assets/home-sofia.jpg.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";
import timetableAsset from "@/assets/horario-oficial.png.asset.json";
import projectGroup from "@/assets/projeto-grupo.jpg.asset.json";
import quorum from "@/assets/projeto-quorum.jpg.asset.json";
import ritaSpider from "@/assets/projeto-rita-spider.jpg.asset.json";
import afonsoRola from "@/assets/projeto-afonso-rola.jpg.asset.json";
import dancerCarolinaMaia from "@/assets/projeto-carolina-maia.jpg.asset.json";
import dancerCatiaSoares from "@/assets/projeto-catia-soares.jpg.asset.json";
import dancerLeonorCatarrilhas from "@/assets/projeto-leonor-catarrilhas.jpg.asset.json";
import dancerSusanaFerreira from "@/assets/projeto-susana-ferreira.jpg.asset.json";
import futebolCover from "@/assets/projeto-futebol.jpg.asset.json";
import voilaCover from "@/assets/projeto-voila.jpg.asset.json";
import cancaoCover from "@/assets/projeto-cancao-sem-final.jpg.asset.json";

/**
 * DAVIDANCE — CONTEÚDO CENTRAL
 * Edite aqui todos os textos, links, imagens e dados do site.
 * Valores marcados com [PLACEHOLDER] devem ser substituídos.
 */

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export const siteConfig = {
  name: "Davidance",
  kidsImage: img_kids.url,
  youngAdultsImage: img_jovens.url,
  tagline: "Vamos viver a Dança!",
  showHeroTagline: false,
  // Substitua por "/logo.png" (coloque o ficheiro em /public) ou por um URL.
  logo: logoAsset.url,
  copy: {
    homeTitle: "Encontra o teu lugar na Davidance",
    presentationTitle: "DAVIDANCE — ESTÚDIO DE DANÇA",
    blocks: [
      {
        title: "Quem somos",
        text: "Somos um Estúdio de Dança, inaugurado em 2022, situado em Paio Pires, no Seixal. Com aulas a partir dos 3 anos de idade, em vários estilos – Contemporâneo, Lyrical Jazz, Ballet, Dança Criativa, Hip-Hop, Choreography, High Heels, Ritmos Latinos, Kizomba Fusion, Dança Oriental, Flexibilidade e Acrobacias. Seja para iniciar, retomar ou continuar a aprender, a Davidance é o lugar ideal para Sentir e Viver a Dança!",
      },
      {
        title: "Os nossos valores",
        text: "Cultivamos um ambiente acolhedor e inspirador, onde cada pessoa se sente reconhecida, valorizada e respeitada na sua autenticidade, com as suas próprias histórias, emoções e formas de expressar. Crescemos através da partilha e de um forte espírito de comunidade. Valorizamos a empatia, a cooperação e a confiança como bases para a aprendizagem, construção de relações genuínas e desenvolvimento pessoal.",
      },
      {
        title: "O que construímos",
        text: "O nosso objetivo é proporcionar uma educação de qualidade nos diversos estilos, desenvolvendo as respetivas aptidões técnicas, criativas e expressivas. Promovemos a autodescoberta e o crescimento pessoal de cada aluno, fortalecendo a confiança, a disciplina e a sensibilidade artística. Acima de tudo, nutrimos a paixão pelo movimento, exercitando o corpo e dando voz à alma e ao coração através da dança.",
      },
    ],
    familyPhrase:
      "Independentemente da idade ou experiência, há um lugar para ti na nossa família.",
    familyButton: "Junta-te à família Davidance!",
    teamTitle: "A nossa equipa",
    teachersTitle: "Professores",
    spaceTitle: "O nosso espaço",
    contactTitle: "Fala connosco",
    contactText: "Tens dúvidas ou queres conhecer-nos? Estamos à tua espera.",
    trialButton: "Vem experimentar uma aula",
    enrolButton: "Inscreve-te",
    timetableTitle: "Horário",
    timetableText: "Consulta o horário das aulas e vem dançar!",
    back: "Voltar",
    teacher: "Professor(a)",
    age: "Faixa etária",
    schedule: "Horário das aulas",
    approval:
      "Só podes experimentar ou inscrever-te no Nível II\nmediante autorização prévia dos professores.",
    biographyButton: "Conhecer o percurso",
    instagramButton: "Instagram",
    weddingsText:
      "Acreditamos que a primeira dança é um dos momentos mais especiais do vosso dia. As aulas para casamento são privadas, personalizadas e agendadas de acordo com a disponibilidade dos noivos, preferencialmente nas semanas que antecedem a celebração.\n\nA coreografia é criada à medida do casal, tendo em conta a música escolhida e o nível de experiência, para que possam viver e desfrutar deste momento com confiança e naturalidade. Temos todo o gosto em preparar convosco uma recordação única para uma união tão especial.",
    weddingsPhrase: "As melhores memórias são aquelas que se vivem com emoção.",
    weddingsButton: "Queremos preparar a nossa dança!",
    loveTitle: "Histórias de amor",
    testimonialsTitle: "Testemunhos",
  },
  founder: {
    name: "Sofia David Luz",
    role: "Fundadora e Diretora Artística",
    photo: img_sofia.url,
    intro:
      "Bailarina, coreógrafa e professora, Sofia David Luz é licenciada pela Escola Superior de Dança e conta com 13 anos de experiência no ensino. Em 2022, fundou a Davidance, onde dá continuidade à sua paixão pelo ensino e pela criação artística. É também responsável pela direção artística do Projeto Davidance, acompanhando a formação e o desenvolvimento artístico dos seus alunos.",
    biography: [
      {
        title: "Uma vida ligada ao movimento",
        text: "A ligação de Sofia David Luz à dança começou aos 3 anos. Entre 2005 e 2016, dedicou-se também à Ginástica Rítmica, participando em apresentações a solo e em grupo. Iniciou a sua formação profissional na Academia de Dança Contemporânea de Setúbal e licenciou-se na Escola Superior de Dança, em Lisboa. Durante a licenciatura, frequentou a Oslo National Academy of the Arts — KHIO, na Noruega, através do programa Erasmus+, aprofundando a formação em Dança Contemporânea e Clássica e explorando outras linguagens, como Jazz, Hip-Hop e Danças de Salão.",
      },
      {
        title: "Do palco à criação",
        text: "Como bailarina profissional, trabalha desde 2018 com a Companhia de Dança DançArte, em Palmela, onde interpreta e desenvolve peças para bebés, crianças e público geral. Integrou também «Rite of Spring – Made in China», da Companhia Quorum Ballet, com digressão nacional e internacional, e «Tchôn», de Benvindo Fonseca. Como coreógrafa, cria para o Projeto Davidance, desde 2023 e criou «(Diz)para», «Ainda que a nuvem passe por cima da luz» — distinguida com o prémio de Melhor Coreografia no Projeto Dance Soul: Stop Bullying, em 2018 — e «Bullying é pr’a meninos», em 2019.",
      },
      {
        title: "Continuar a aprender",
        text: "Mantém uma formação contínua através de aulas, projetos e workshops. Integrou o Projeto Quorum durante dois anos, tendo recebido a Bolsa Quori em 2018/2019, pelo seu mérito e dedicação. Em 2023 e 2024, fez parte do projeto Lyricalls, de Vanda Gameiro, grupo convidado a participar no programa «Dança com as Estrelas», da TVI. Desde 2022, frequenta aulas de Lyrical Jazz e Barra de Chão com Colin Vieira, na Jazzy. Em 2025, integrou o projeto Art of Dance, participando no Global Dance Open e no Concurso Nacional de Dança, onde apresentou trabalhos de grupo e um solo da sua autoria, distinguidos com medalhas de ouro.",
      },
      {
        title: "Ensinar e construir a Davidance",
        text: "Ao longo de 13 anos de experiência como professora, lecionou Ballet, Contemporâneo, Jazz, Flexibilidade, Barra de Chão e Condição Física, em escolas como Jazzy, UDance, Anna Kholer, MOAST e Unik GymDance, além de vários colégios. Em 2022, fundou a Davidance — Estúdio de Dança, em Paio Pires, no Seixal. Aqui reúne o ensino, a criação e o acompanhamento dos alunos, procurando desenvolver as suas capacidades técnicas, criativas e expressivas. Dirige também o Projeto Davidance, um programa de formação artística que aprofunda o trabalho de repertório, interpretação e criação coreográfica, em contacto com diferentes profissionais.",
      },
    ],
    instagram: "https://www.instagram.com/sofia_david_luz/",
  },
  hero: {
    // Vídeo do hero no YouTube — toca automaticamente, sem som, em loop.
    youtubeId: "c4Frs8xJtiA",
    poster: u("photo-1508700929628-666bc8bd84ea", 1920),
  },

  links: {
    joinFamily: "https://forms.gle/HEKGNfnnKE4jBG616",
    trialClass: "https://forms.gle/ibVWxdEjLrz4qWv59",
    enrol: "https://forms.gle/HEKGNfnnKE4jBG616",
    audition: "https://forms.gle/PLACEHOLDER-audicao",
    weddings: "https://forms.gle/BuwEuLPAFLc9UoUk9",
    linktree: "https://linktr.ee/ddavidance",
    instagram: "https://www.instagram.com/_davidance_?utm_source=qr",
    facebook: "https://www.facebook.com/Davidancee?",
    maps: "https://maps.app.goo.gl/iZpjSNqEU7F9Xpo79",
    mapsEmbed:
      "https://www.google.com/maps?q=Av.+José+António+Rodrigues+45+Paio+Pires&output=embed",
  },

  contacts: {
    phone: "+351 928322643",
    email: "geral@davidance.pt",
    address: "Av. José António Rodrigues, 45 A, 2840-078, Paio Pires",
    hours: ["Seg – Sex: 16H00 – 22H00", "Sábado: 9H00 – 13H00"],
  },

  /**
   * AUDIÇÕES — Projeto Davidance
   * false → botão desativado com o texto "Já estamos cheios".
   * true  → botão ativo "Marca a tua audição" (abre links.audition).
   */
  auditionsOpen: false,

  timetable: {
    image: timetableAsset.url,
    download: timetableAsset.url,
    filename: "horario-davidance.png",
  },

  facilities: {
    text: "Em Paio Pires, a Davidance recebe-te num estúdio amplo, com chão com caixa de ar, preparado para a prática da dança. Um espaço onde trabalhamos técnica, exploramos o movimento e partilhamos o caminho entre os ensaios e o palco.",
    photos: [
      u("photo-1518611012118-696072aa579a"),
      u("photo-1547153760-18fc86324498"),
      u("photo-1524594152303-9fd13543fe6e"),
      u("photo-1571019613454-1cb2f99b2d8b"),
      u("photo-1535525153412-5a42439a210d"),
    ],
  },

  groupPhoto: img_davidance.url,
  projectHero: projectGroup.url,
  weddingsHero: img_casamentos.url,
};

export type Schedule = { day: string; time: string };
export type Style = {
  slug: string;
  name: string;
  cover: string;
  description: string;
  teacher: string;
  ageRange: string;
  schedule: Schedule[];
  gallery: string[];
  levels?: { name: string; requiresApproval: boolean; schedule: Schedule[] }[];
};
export const styles: Style[] = [
  {
    ...{
      slug: "danca-criativa",
      name: "Dança Criativa",
      description:
        "Uma primeira descoberta da dança através de jogos, histórias, música e imaginação. Exploramos o corpo, o espaço e o ritmo, desenvolvendo a coordenação, a criatividade e a expressão das emoções. Num ambiente alegre e estimulante, cada criança ganha confiança e autonomia, aprende a cooperar e descobre a sua forma de se expressar.",
      teacher: "Sofia David Luz",
      ageRange: "3 - 5 anos",
      schedule: [
        { day: "Segunda", time: "17H15 - 18H00" },
        { day: "Quartas", time: "17H15 - 18H00" },
      ],
      gallery: [],
    },
    cover: cls_danca_criativa.url,
  },
  {
    ...{
      slug: "contemporaneo-kids",
      name: "Contemporâneo Kids",
      description:
        "Saltos, deslocações, movimentos no chão e desafios criativos dão forma a uma introdução à dança contemporânea. Trabalhamos a coordenação, a consciência corporal e a expressão, combinando a aprendizagem de pequenas sequências com momentos de exploração e criação.",
      teacher: "Sofia David Luz",
      ageRange: "6 - 9 anos",
      schedule: [
        { day: "Segunda", time: "18H00 - 19H00" },
        { day: "Quartas", time: "18H00 - 19H00" },
      ],
      gallery: [],
    },
    cover: cls_contemporaneo_kids.url,
  },
  {
    ...{
      slug: "ballet-kids",
      name: "Ballet Kids",
      description:
        "As primeiras bases do Ballet, numa abordagem adaptada à infância. Através de exercícios e pequenas sequências, desenvolvemos a postura, a coordenação, o equilíbrio e a musicalidade, aliando atenção ao detalhe, imaginação e prazer em dançar.",
      teacher: "Sofia David Luz",
      ageRange: "6 - 9 anos",
      schedule: [
        { day: "Terça", time: "18H00 - 19H00" },
        { day: "Quintas", time: "18H00 - 19H00" },
      ],
      gallery: [],
    },
    cover: cls_ballet_kids.url,
  },
  {
    ...{
      slug: "hip-hop-kids",
      name: "Hip-Hop Kids",
      description:
        "Ritmo, energia e descoberta dos movimentos base do Hip-Hop. Entre exercícios, jogos e pequenas coreografias, trabalhamos a coordenação, a musicalidade e a confiança, dando espaço à expressão individual e à ligação com o grupo.",
      teacher: "Joana Lopes",
      ageRange: "6 - 9 anos",
      schedule: [
        { day: "Terça", time: "18H00 - 19H00" },
        { day: "Quintas", time: "18H00 - 19H00" },
      ],
      gallery: [],
    },
    cover: cls_hip_hop_kids.url,
  },
  {
    ...{
      slug: "flexibilidade",
      name: "Flexibilidade",
      description:
        "Um trabalho progressivo de mobilidade, alongamento e força para ampliar e controlar o movimento. Desenvolvemos a consciência corporal e a flexibilidade ativa, respeitando o ponto de partida de cada aluno e as necessidades da sua prática.",
      teacher: "Sofia David Luz",
      ageRange: "+8 anos",
      schedule: [{ day: "Segunda", time: "19H00 - 20H00" }],
      gallery: [],
    },
    cover: cls_flexibilidade.url,
  },
  {
    ...{
      slug: "acrobacias",
      name: "Acrobacias",
      description:
        "Uma introdução e progressão nas acrobacias aplicadas à dança, através de exercícios de preparação física, apoios, equilíbrios, rolamentos e elementos acrobáticos. Trabalhamos força, coordenação e controlo, avançando de acordo com a preparação de cada aluno.",
      teacher: "Sofia David Luz",
      ageRange: "+8 anos",
      schedule: [{ day: "Quarta", time: "19H00 - 20H00" }],
      gallery: [],
    },
    cover: cls_acrobacias.url,
  },
  {
    ...{
      slug: "contemporaneo",
      name: "Contemporâneo",
      description:
        "Uma dança que explora diferentes formas de mover, sentir e interpretar. Trabalhamos técnica, movimentos no chão, deslocações e sequências coreográficas, desenvolvendo a consciência corporal, a expressividade e relação com o espaço e o grupo.",
      teacher: "Sofia David Luz",
      ageRange: "",
      schedule: [
        { day: "Terça", time: "20H00 - 21H00" },
        { day: "Quinta", time: "19H00 - 20H00" },
      ],
      gallery: [],
      levels: [
        {
          name: "Nível I",
          requiresApproval: false,
          schedule: [
            { day: "Terça", time: "20H00 - 21H00" },
            { day: "Quinta", time: "19H00 - 20H00" },
          ],
        },
        {
          name: "Nível II",
          requiresApproval: true,
          schedule: [
            { day: "Terça", time: "19H00 - 20H00" },
            { day: "Quinta", time: "19H00 - 20H00" },
          ],
        },
      ],
    },
    cover: cls_contemporaneo.url,
  },
  {
    ...{
      slug: "lyrical-jazz",
      name: "Lyrical Jazz",
      description:
        "Uma ligação entre a técnica do Jazz, a fluidez do movimento e a interpretação musical. Trabalhamos alinhamento, equilíbrios, giros e saltos, integrando-os em sequências coreográficas nas quais a intenção e a emoção dão sentido a cada gesto.",
      teacher: "Sofia David Luz",
      ageRange: "+15 anos",
      schedule: [
        { day: "Segunda", time: "21H00 - 22H00" },
        { day: "Quinta", time: "21H00 - 22H00" },
      ],
      gallery: [],
    },
    cover: cls_lyrical_jazz.url,
  },
  {
    ...{
      slug: "ballet",
      name: "Ballet",
      description:
        "Uma prática que alia precisão, musicalidade e expressão. Através de exercícios de barra e centro, trabalhamos alinhamento, coordenação, equilíbrio e controlo, construindo uma base técnica que apoia a evolução no Ballet e noutras modalidades de dança.",
      teacher: "Sofia David Luz",
      ageRange: "",
      schedule: [{ day: "Segunda", time: "20H00 - 21H00" }],
      gallery: [],
    },
    cover: cls_ballet.url,
  },
  {
    ...{
      slug: "hip-hop",
      name: "Hip-Hop",
      description:
        "Exploramos as bases do Hip-Hop, o groove e a relação do corpo com a música. Através de exercícios e sequências coreográficas, desenvolvemos ritmo, coordenação e diferentes qualidades de movimento, dando espaço ao estilo e à expressão de cada aluno.",
      teacher: "Beatriz Matos",
      ageRange: "",
      schedule: [{ day: "Terça", time: "19H00 - 20H00" }],
      gallery: [],
    },
    cover: cls_hip_hop.url,
  },
  {
    ...{
      slug: "choreography",
      name: "Choreography",
      description:
        "Uma aula centrada na aprendizagem e interpretação de coreografias, explorando diferentes dinâmicas, intenções e relações com a música. Trabalhamos memória, coordenação, precisão e presença, desafiando cada aluno a dar personalidade ao movimento.",
      teacher: "Beatriz Matos",
      ageRange: "+12 anos",
      schedule: [{ day: "Terça", time: "20H00 - 21H00" }],
      gallery: [],
    },
    cover: cls_choreography.url,
  },
  {
    ...{
      slug: "high-heels",
      name: "High Heels",
      description:
        "Uma aula que cruza técnica de dança, postura e interpretação em salto alto. Trabalhamos o caminhar, o equilíbrio, as linhas do corpo e a presença, integrando estes elementos em coreografias que exploram atitude, confiança e expressão pessoal.",
      teacher: "Joana Lopes",
      ageRange: "+16 anos",
      schedule: [{ day: "Quinta", time: "19H00 - 20H00" }],
      gallery: [],
    },
    cover: cls_high_heels.url,
  },
  {
    ...{
      slug: "kizomba-fusion",
      name: "Kizomba Fusion",
      description:
        "Uma abordagem à dança a par que parte da Kizomba e explora influências de outros estilos. Trabalhamos os passos, as transferências de peso, a condução e a resposta, desenvolvendo musicalidade, fluidez e atenção à pessoa com quem dançamos.",
      teacher: "Andreia & Paulo",
      ageRange: "+16 anos",
      schedule: [{ day: "Quarta", time: "21H00 - 22H00" }],
      gallery: [],
      levels: [
        {
          name: "Nível I",
          requiresApproval: false,
          schedule: [{ day: "Quarta", time: "21H00 - 22H00" }],
        },
        {
          name: "Nível II",
          requiresApproval: true,
          schedule: [{ day: "Quarta", time: "20H00 - 21H00" }],
        },
      ],
    },
    cover: cls_kizomba_fusion.url,
  },
  {
    ...{
      slug: "ritmos-latinos",
      name: "Ritmos Latinos",
      description:
        "Uma aula para descobrir diferentes ritmos latinos e explorar a sua energia através do movimento. Trabalhamos passos de base, coordenação e musicalidade, desenvolvendo fluidez e confiança para desfrutar da dança.",
      teacher: "Ricardo Coelho",
      ageRange: "+16 anos",
      schedule: [{ day: "Quinta", time: "21H00 - 22H00" }],
      gallery: [],
    },
    cover: cls_ritmos_latinos.url,
  },
  {
    ...{
      slug: "danca-oriental",
      name: "Dança Oriental",
      description:
        "Exploramos isolamentos, ondulações, movimentos de anca e diferentes acentuações rítmicas. Através da técnica e de sequências coreográficas, desenvolvemos coordenação, consciência corporal e expressividade, descobrindo a relação entre o movimento e a música.",
      teacher: "Sara Freitas",
      ageRange: "",
      schedule: [{ day: "Quinta", time: "21H00 - 22H00" }],
      gallery: [],
    },
    cover: cls_danca_oriental.url,
  },
];
export type Teacher = { name: string; photo: string };
export const teamPhoto = img_professores.url;
export const teachers: Teacher[] = [
  { name: "Sofia David Luz", photo: img_sofia.url },
  { name: "Beatriz Matos", photo: img_beatriz.url },
  { name: "Joana Lopes", photo: img_joana.url },
  { name: "Ricardo Coelho", photo: img_ricardo.url },
  { name: "Andreia & Paulo", photo: img_andreia_paulo.url },
  { name: "Sara Freitas", photo: img_sara.url },
];
export const classGroups = {
  kids: {
    title: "Kids",
    menu: "Kids (3–9 anos)",
    description:
      "Na Davidance, os mais pequenos descobrem a dança num ambiente acolhedor, onde há espaço para imaginar, explorar e criar. Através de diferentes aulas, desenvolvem a coordenação, a musicalidade e a confiança, aprendem a trabalhar em grupo e fazem novas amizades — com alegria e respeito pelo ritmo de cada criança.",
    slugs: [
      "danca-criativa",
      "contemporaneo-kids",
      "ballet-kids",
      "hip-hop-kids",
      "flexibilidade",
      "acrobacias",
    ],
  },
  adults: {
    title: "Jovens & Adultos",
    menu: "Jovens & Adultos",
    description:
      "Na Davidance, há espaço para começar, voltar a dançar ou continuar a desafiar-te. Nas nossas aulas para jovens e adultos, desenvolves a técnica, a confiança e a tua forma de te expressares, num ambiente de partilha e boa energia. Descobre as aulas que mais combinam contigo e vem sentir e viver a dança!",
    slugs: [
      "contemporaneo",
      "lyrical-jazz",
      "ballet",
      "flexibilidade",
      "acrobacias",
      "choreography",
      "hip-hop",
      "high-heels",
      "kizomba-fusion",
      "ritmos-latinos",
      "danca-oriental",
      "projeto-davidance",
    ],
  },
};
export const homeCards = [
  {
    title: "Kids | Dos 3 aos 9 anos",
    text: "Descobrir o movimento, dar espaço à imaginação e crescer a dançar",
    to: "/kids",
  },
  {
    title: "Jovens & Adultos",
    text: "Iniciar, retomar ou continuar a aprender? Explora o movimento e encontra a tua expressão",
    to: "/jovens-adultos",
  },
  {
    title: "Casamentos",
    text: "Uma coreografia à medida da vossa história!",
    to: "/casamentos",
  },
] as const;
export type Testimonial = { couple: string; text: string; photos: string[] };
export const testimonials: Testimonial[] = [
  {
    couple: "Inês & Miguel",
    text: "Adorámos a nossa experiência na Davidance! Desde o primeiro contacto até ao último ensaio, a Sofia foi incansável. Do seu profissionalismo, criatividade e sensibilidade, resultou uma coreografia lindíssima! Os momentos que passámos na Davidance foram verdadeiramente divertidos e, numa semana tão stressante devido a todos os preparativos do casamento, o tempo a dois a ensaiar a nossa primeira dança foi uma lufada de ar fresco! Recomendamos a Davidance a todos os noivos!",
    photos: [wedding_ines_miguel.url],
  },
  {
    couple: "Mafalda & Nuno",
    text: "As aulas na Davidance tornaram o dia do nosso casamento ainda mais especial e memorável! A Sofia coreografou a nossa primeira dança, assim como a surpresa com os padrinhos e damas para o noivo - transformou “pés de chumbo” num momento muito bonito e divertido entre todos. Foi incansável, ajudou em tudo, adaptou a coreografia às nossas dificuldades e incorporou sempre as nossas sugestões. Parabéns! Obrigada por tudo, Davidance!",
    photos: [],
  },
  {
    couple: "Rafaela & Rui",
    text: "As aulas na Davidance foram umas das melhores partes dos preparativos para o nosso casamento. E nossa primeira dança foi, sem dúvida, um dos momentos mais divertidos do dia para todos! A Sofia é uma pessoa muito querida, bem-disposta e excelente profissional. Não há melhor pessoa e professora para confiar e embarcar nesta aventura. Adorámos! Recomendamos!",
    photos: [wedding_rafaela_rui.url],
  },
  {
    couple: "Irina & Filipe",
    text: "A Sofia é incrível! Uma excelente professora e pessoa, com muita paciência para nos preparar para brilhar no grande dia. As aulas foram muito divertidas e o facto de serem nas últimas semanas antes do casamento, ajudou a descontrair. Adorámos as aulas e adorámos a Sofia! Se voltássemos a casar, a Sofia e a Davidance seriam sempre a nossa escolha! Obrigada!",
    photos: [wedding_irina_filipe.url],
  },
  {
    couple: "Joana & Daniel",
    text: "Obrigada, querida Sofia, por toda a paciência que tiveste connosco! Tornaste dois “robots” em dois excelentes e felizes bailarinos noivos. Todos os convidados adoraram a nossa dança! Fomos muito, muito elogiados e nada disto teria sido possível sem as aulas com a Sofia na Davidance. Divertimo-nos imenso! Obrigada, mais uma vez!",
    photos: [wedding_joana_daniel.url],
  },
  {
    couple: "Filipa & Miguel",
    text: "A Sofia é uma ótima coreógrafa e está muito atenta às nossas dificuldades e à “falta de jeito”. No nosso caso, dançar não nos era algo natural e a Sofia, para além de nos dar a confiança que necessitávamos, tornou a nossa primeira dança num momento muito especial do nosso dia e casamento! As aulas foram muito divertidas! Recomendamos muito! Obrigada!",
    photos: [wedding_filipa_miguel.url],
  },
  {
    couple: "Margarida & André",
    text: "A Sofia foi espetacular, sempre simpática, explicou tudo com muita paciência. Deu-nos motivação e encorajou-nos a aproveitar todos os instantes. Ao início, pensámos que ia ser mais complicado, mas no final estávamos super à vontade com tudo e conseguimos desfrutar da nossa dança. A Sofia sentia a coreografia com muito entusiasmo, o que nos ajudou bastante a tornar cada momento mais natural e divertido! Obrigado por todo o trabalho, foi uma experiência excelente!",
    photos: [wedding_margarida_andre.url],
  },
  {
    couple: "Inês & Diogo",
    text: "Adorámos cada passo da nossa dança! Com extraordinária empatia e engenho, a Sofia captou a essência das nossas ideias e desenhou uma coreografia que nos representou. Foi um momento marcante do nosso grande dia e culminou de forma incrível com os convidados a juntarem-se a nós na pista! As aulas foram momentos descontraídos e muito divertidos, em que os nervos dos preparativos para o casamento se dissipavam. Gostámos tanto que vamos continuar com as aulas regulares! Obrigado, Sofia e Davidance!",
    photos: [wedding_ines_diogo.url],
  },
  {
    couple: "Nanci & João",
    text: "A nossa experiência na Davidance foi fantástica! A Sofia é uma professora muito paciente, com excelentes ideias para a primeira dança dos noivos e com a capacidade de transformar noivos “pés de chumbo” em dançarinos que se divertem. Obrigado, Sofia!",
    photos: [wedding_nanci_joao.url],
  },
  {
    couple: "Zélia & João",
    text: "Sofia, muito obrigada pelo seu profissionalismo. Correu tudo muito bem! Foi um momento muito feliz e bem sucedido, graças ao seu elevado prestígio. Um grande beijinho!",
    photos: [wedding_zelia_joao.url],
  },
  {
    couple: "Carina & André",
    text: "A Davidance foi a melhor escolha que podíamos teria feito (autênticos pés de chumbo) para preparar uma dança linda no nosso grande dia! A Sofia foi o nosso pilar durante toda a aprendizagem da coreografia que pedimos para ser simples, pois o nosso jeitinho para dançar era zero. Disse-nos logo para não nos preocuparmos, pois estaríamos muito bem preparados! E assim foi, surpreendemo-nos a nós próprios e a todos os nossos convidados! A passagem pela Davidance também ficou marcada pela paciência, calma e diversão da nossa querida Sofia, com a sua incrível energia e criatividade! Muito obrigado pelos momentos que passámos contigo Sofia, na Davidance!",
    photos: [wedding_carina_andre.url],
  },
  {
    couple: "Katherine & Antonino",
    text: "Gostámos muito das aulas de dança na Davidance para o nosso casamento. A Sofia é uma ótima professora, com muita paciência e dedicação. Mesmo sem termos experiência em dança, ela conseguiu ensinar-nos uma coreografia muito divertida e elegante, que foi, sem dúvida, uma parte muito especial do nosso casamento. Obrigada, Sofia!",
    photos: [wedding_katherine_antonino.url],
  },
  {
    couple: "Rita & David",
    text: "Em apenas 4 aulas, a Sofia conseguiu criar um momento inesquecível, tanto para nós como para os convidados. Durante os ensaios, deixou-nos sempre bastante à vontade e mais confiantes com a dança, adaptando sempre ao nosso gosto! Obrigada, Sofia e Davidance!",
    photos: [wedding_rita_david.url],
  },
  {
    couple: "Andreia & Diogo",
    text: "A Sofia foi incrível, sempre criativa e disponível para adaptar a coreografia ao nosso gosto e capacidades. Fizemos uma excelente escolha, não podíamos ter sido uma melhor equipa a criar esta dança! Percebe-se de longe que a Sofia põe o coração em todas as danças que cria, é fantástica! Obrigada por tudo!",
    photos: [wedding_andreia_diogo.url],
  },
  {
    couple: "Joana & Hélder",
    text: "Queremos deixar um enorme obrigado à Sofia, que nos acolheu na Davidance, por toda a dedicação e paciência na preparação da nossa dança de casamento. Sabemos que não temos o dom da dança (nem lá perto!) e a música não era das mais fáceis, mas a Sofia conseguiu criar uma coreografia que fez todo o sentido para nós, bonita, divertida e que nos deixou super à vontade. Foi um momento especial que vamos guardar para sempre, e não teria sido possível sem a vossa ajuda. Obrigado por tudo!",
    photos: [wedding_joana_helder.url],
  },
  {
    couple: "Katharina & Ricardo",
    text: "Não vamos mentir - estávamos muito reticentes no início. Nunca tínhamos dançado a par e pensámos “Como é que vamos aprender uma coreografia em 4 ensaios?”. A verdade é que foi possível! A Sofia, com base nas músicas escolhidas por nós, tinha já uma sugestão de coreografia e, sem sabermos como, foi a nossa cara! A Sofia é super atenciosa, paciente e claramente uma grande artista e professora. Adorámos o resultado e os convidados também. Recomendamos muito o seu trabalho.",
    photos: [wedding_katharina_ricardo.url],
  },
  {
    couple: "Verónica & Diogo",
    text: "Adorámos a nossa experiência na Davidance! A Sofia foi simplesmente incrível, super profissional e ao mesmo tempo simpática e divertida. Os ensaios tornaram-se dos nossos momentos preferidos de toda a preparação do casamento! Criou uma coreografia linda, exatamente ao nosso estilo e ajudou-nos sempre com imensa paciência (mesmo com a nossa falta de jeito!). A nossa dança ficou inesquecível graças a ela. Recomendamos muito a Davidance a todos os noivos!",
    photos: [wedding_veronica_diogo.url],
  },
  {
    couple: "Cláudia & Pedro",
    text: "A Davidance já era um lugar como casa antes e por isso, fez-nos todo o sentido ter as nossas aulas de dança para noivos lá. Foi uma experiência incrível! A música que escolhemos era animada e divertida, muito diferente da “comum” dança dos noivos e a Sofia, com a sua energia contagiante, criatividade e sensibilidade artística, tornou cada aula única e a coreografia cheia de significado. Vivemos momentos muito especiais, que guardamos para sempre. Obrigado à Davidance e em especial à Sofia, por tornar o nosso grande dia ainda mais memorável!",
    photos: [wedding_claudia_pedro.url],
  },
  {
    couple: "Tânia & Ricardo",
    text: "Queremos agradecer todo o empenho que colocaste na nossa dança. Gostámos muito da coreografia e sentimos que foi pensada com muito cuidado e sensatez, tendo sempre em conta a nossa realidade naquela altura, especialmente o facto de eu estar grávida, o que valorizámos bastante. A dança acabou por correr muito bem no dia do casamento, os convidados adoraram vê-la e recebemos muitos elogios. Também cumprimos aquilo a que nos comprometemos e ensaiámos bastante em casa, o que sem dúvida ajudou para que tudo corresse da melhor forma. Um beijinho e obrigada!",
    photos: [],
  },
  {
    couple: "Daniela & Rui",
    text: "Escolhemos a Davidance por referência de outro casal e adorámos a experiência. Desde o primeiro contacto com a Sofia que nos sentimos muito acolhidos e que estávamos em boas mãos! Sendo que temos os 2, dois pés esquerdos, a Sofia proporcionou aulas divertidas e personalizadas, fazendo com que conseguíssemos ter uma dança bonita para o nosso dia! Divertimo-nos bastante e agradecemos à Sofia esta experiência!",
    photos: [wedding_daniela_rui.url],
  },
  {
    couple: "Alexandra & Hugo",
    text: "Queríamos deixar um agradecimento especial pelo tempo que passámos nas aulas na Davidance. Foram momentos muito divertidos, leves e cheios de boa energia. A dedicação, paciência e simpatia da Sofia fizeram toda a diferença. Graças a isso, conseguimos transformar a nossa primeira dança do casamento num momento único, que vamos guardar para sempre na memória. Obrigada por tudo!",
    photos: [wedding_alexandra_hugo.url],
  },
  {
    couple: "Inês & Bruno",
    text: "Conseguiram fazer o impossível! Queremos agradecer do fundo do coração por toda a dedicação, paciência e boa energia nas nossas aulas de dança. Transformaram um momento que nos deixava um pouco nervosos em algo leve, divertido e muito especial. A Sofia é uma excelente coreógrafa e atendeu sempre às nossas dificuldades, pronta a alterar quando não estávamos tão à vontade. A tua forma de ensinar é incrível e ajudaste-nos não só a preparar a nossa dança, mas também a criar uma memória que vamos guardar com muito carinho. Recomendamos 1000%",
    photos: [wedding_ines_bruno.url],
  },
  {
    couple: "Mariana & João",
    text: "Para quem não tinha jeitinho nenhum (e continuou a não ter muito), em quatro aulas conseguiu-se fazer uma coreografia muito gira e que divertiu toda a gente na nossa festa (só por bons motivos). Adorámos as aulas com a Sofia, divertimo-nos e rimos muito, aprendemos a sentir os ritmos da música e ela percebeu que há esperança para toda a gente, mesmo quando parece impossível! Muito obrigado!",
    photos: [wedding_mariana_joao.url],
  },
  {
    couple: "Paula & Paulo",
    text: "A nossa querida Sofia conseguiu a proeza de em 4 ensaios dar vida ao nosso sonho de dançarmos no dia do casamento. Com o seu jeito delicado, mostrou-se uma grande profissional. Identificou o que queríamos e desenhou a coreografia perfeita. Ensinou passo a passo, deu-nos uma energia e motivação maravilhosa e principalmente nunca nos largou mesmo quando era mais difícil. A Sofia mostrou-nos o caminho e até fez nascer a vontade de continuarmos a dançar! Desejamos que continues sempre a espalhar a tua magia. Somos teus FÃS! Obrigada, Sofia!!!!",
    photos: [wedding_paula_paulo.url],
  },
  {
    couple: "Nadja & Rui",
    text: "Tivemos uma experiência maravilhosa com as aulas de dança para o nosso casamento. Como um casal sem experiência prévia em dança, as aulas encontraram o equilíbrio perfeito entre diversão e desafio e incentivaram-nos o suficiente para melhorarmos, sem deixar de ser algo totalmente alcançável. A nossa instrutora foi incrivelmente atenciosa e encorajadora durante todo o processo, adaptando sempre o ritmo e o estilo para se adequar ao nosso nível de conforto e às nossas necessidades de aprendizagem. Graças à sua paciência e orientação, não só aprendemos uma coreografia bonita, mas também ganhámos confiança e desfrutámos de cada momento. Estamos muito gratos pela sua amabilidade, profissionalismo e dedicação. Obrigada, Sofia!",
    photos: [],
  },
  {
    couple: "Mariana & Pedro",
    text: "Começámos as aulas de dança sem saber muito bem o que esperar e acabámos por gostar mais do que imaginávamos. A Sofia esteve sempre disponível para nos ajudar durante todo o processo e criou uma coreografia que nos fez desfrutar do momento. Acabou por ser uma parte muito divertida da preparação do casamento e, hoje, não trocaríamos esta experiência por nada!",
    photos: [wedding_mariana_pedro.url],
  },
  {
    couple: "Joana & Lourenço",
    text: "A Sofia é uma excelente profissional. Teve paciência connosco, apesar do pouco jeitinho, e fez-nos aprender a dança de forma perfeita. Correu tudo muito bem graças a ela. Obrigado, Sofia!",
    photos: [wedding_joana_lourenco.url],
  },
  {
    couple: "Catarina & Pedro",
    text: "Tivemos uma experiência incrível na Davidance! Adorámos a coreografia e a Sofia foi sempre muito querida e paciente. Tínhamos zero experiência de dança e com poucas aulas, conseguimos dançar uma música completa e criar um momento que foi muito especial no nosso casamento. Recomendamos imenso e repetíamos sem pensar duas vezes!",
    photos: [wedding_catarina_pedro.url],
  },
  { couple: "Filipa & André", text: "", photos: [] },
  { couple: "Mariana & Carolina", text: "", photos: [] },
  { couple: "Carolina & Gabriel", text: "", photos: [] },
  { couple: "Joana & Pedro", text: "", photos: [] },
  { couple: "Tânia & Jair", text: "", photos: [] },
  { couple: "Mafalda & Nuno", text: "", photos: [] },
  { couple: "Andreia & Ruben", text: "", photos: [] },
];
export const orderedTestimonials = [
  ...testimonials.filter((t) => t.photos.length > 0),
  ...testimonials.filter((t) => t.photos.length === 0),
];
export const projectConfig = {
  title: "Projeto Davidance",
  description:
    "O Projeto Davidance é um programa de formação artística para alunos que procuram aprofundar a sua experiência em dança, através de um trabalho exigente a nível técnico, artístico e performativo. Ao longo do ano, trabalhamos repertório, criação coreográfica e diferentes processos de trabalho, em contacto com profissionais convidados. Um percurso para desenvolver a versatilidade e a identidade artística. Fazer parte do Projeto implica compromisso, assiduidade e responsabilidade, com o próprio trabalho e para com o grupo.",
  directionTitle: "Direção Artística",
  directionText:
    "Bailarina, coreógrafa e professora, Sofia David Luz orienta o percurso artístico do Projeto, acompanhando a formação, a interpretação e a criação coreográfica do grupo.",
  formationTitle: "Formação 2026/2027",
  formations: [
    {
      title: "Formação exclusiva",
      subtitle: "",
      people: [
        {
          name: "Quorum Dance Company (Margarida Carvalho)",
          area: "Repertório da companhia",
          photo: quorum.url,
        },
        { name: "Rita Spider", area: "Criação Coreográfica", photo: ritaSpider.url },
      ],
    },
    {
      title: "Workshops",
      subtitle: "Abertos a todos os alunos",
      people: [
        { name: "Quorum Dance Company", area: "Contemporâneo", photo: quorum.url },
        { name: "Rita Spider", area: "Fusion", photo: ritaSpider.url },
        { name: "Colin Vieira", area: "Lyrical Jazz", photo: "" },
        { name: "Afonso Rola", area: "Commercial & Lyrical Jazz", photo: afonsoRola.url },
      ],
    },
  ],
  dancersTitle: "Bailarinos 26/27",
  groupPhoto: projectGroup.url,
  groups: [
    {
      title: "Grupo A",
      people: [
        { name: "Andreia Silva", photo: "" },
        { name: "Carolina Carvalho", photo: "" },
        { name: "Cátia Soares", photo: dancerCatiaSoares.url },
        { name: "Leonor Catarrilhas", photo: dancerLeonorCatarrilhas.url },
        { name: "Margarida Palminha", photo: "" },
        { name: "Maria Inês Costa", photo: "" },
        { name: "Matheus Gonçalves", photo: "" },
        { name: "Meylin Leyva", photo: "" },
        { name: "Raquel Pinto", photo: "" },
        { name: "Sofia Conde", photo: "" },
        { name: "Sofia Silva", photo: "" },
        { name: "Susana Ferreira", photo: dancerSusanaFerreira.url },
      ],
    },
    {
      title: "Grupo B",
      people: [
        { name: "Alexandre Portugal", photo: "" },
        { name: "Deusa Santana", photo: "" },
        { name: "Carolina Maia", photo: dancerCarolinaMaia.url },
        { name: "Joana Luz", photo: "" },
        { name: "Margarida Dores", photo: "" },
        { name: "Tatiana Teixeira", photo: "" },
      ],
    },
  ],
  historyTitle: "Percurso",
  videos: [
    {
      title: "Projeto Davidance 25/26 — Senhora do Mar",
      src: "",
      youtubeId: "0DMrdPdzlv4",
      poster: img_projeto_hero.url,
      coverFit: "contain",
    },
    {
      title: "Projeto Davidance 25/26 — Futebol",
      src: "",
      youtubeId: "iP9PhHy5qao",
      poster: futebolCover.url,
      coverFit: "cover",
    },
    {
      title: "Projeto Davidance 24/25 — Voilá",
      src: "",
      youtubeId: "VpOSiGaMLLM",
      poster: voilaCover.url,
      coverFit: "cover",
    },
    {
      title: "Projeto Davidance 23/24 — Canção sem final",
      src: "",
      youtubeId: "D4RMznCCitc",
      poster: cancaoCover.url,
      coverFit: "cover",
    },
  ],
  futureTitle: "Queres fazer parte?",
  futureText:
    "O Projeto Davidance 26/27 está completo, mas o teu percurso pode começar nas aulas regulares da Davidance. A frequência de Contemporâneo I/II ou Lyrical Jazz faz parte da preparação necessária para integrar o Projeto. É nas aulas que aprofundas a técnica, desenvolves a interpretação e constróis a experiência para novos desafios.\nSe gostavas de fazer parte de uma próxima edição, fala connosco sobre a tua formação. A entrada depende de audição e das vagas disponíveis.",
  futureButton: "Começa agora!",
};
export const navLinks = [
  { to: "/", label: "Davidance" },
  { to: "/horarios", label: "Horário" },
  { to: "/projeto-davidance", label: "Projeto Davidance" },
  { to: "/casamentos", label: "Casamentos" },
] as const;
export const getStyle = (slug: string) => styles.find((s) => s.slug === slug);
export const getTeacherByName = (name: string) => teachers.find((t) => t.name === name);
export const getTeacherStyles = (name: string) => styles.filter((s) => s.teacher === name);
export const canEnrolInLevel = (style: Style, level: string, approved = false) => {
  const selected = style.levels?.find((l) => l.name === level);
  return Boolean(selected && (!selected.requiresApproval || approved));
};

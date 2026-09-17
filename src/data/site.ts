/**
 * Conteúdo central do site — ponto único de substituição.
 * Toda esta estrutura foi desenhada para, futuramente, ser alimentada por um
 * CMS / painel administrativo (eventos, ministérios, pregadores, agenda etc.)
 * bastando trocar estes objetos por dados vindos da API.
 */

import aboutChurch from "@/assets/about-church.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

import sermon2 from "@/assets/sermon-2.jpg";
import sermon3 from "@/assets/sermon-3.jpg";
import bispoJorge from "@/assets/bispo-jorge.png.asset.json";
import pastoraFatima from "@/assets/pastora-fatima.png.asset.json";

export const church = {
  name: "Igreja Batista Renovada Elim",
  shortName: "Elim",
  tagline: "Um lugar para crescer em Deus, viver em comunhão e experimentar uma nova história.",
  address: "Estr. do Camboatá, 1980 - Deodoro, Rio de Janeiro - RJ, 21665-001",
  phone: "(21) 99145-1101",
  whatsapp: "5521991451101",
  email: "contato@ibrelim.com.br",
  mapsQuery: "Igreja Batista Renovada Elim, Estrada do Camboatá 1980, Deodoro, Rio de Janeiro",
  social: {
    instagram: "https://www.instagram.com/ibreoficial/",
    facebook: "https://www.facebook.com/IBREoficial/",
    youtube: "https://www.youtube.com/@igrejabatistarenovadaelim8853",
  },
} as const;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Ministérios", href: "#ministerios" },
  { label: "Cultos", href: "#cultos" },
  { label: "Eventos", href: "#eventos" },
  { label: "Mensagens", href: "#mensagens" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

export const about = {
  mission:
    "Anunciar o evangelho de Jesus Cristo com excelência e amor, formando discípulos comprometidos com a Palavra, com a família e com a cidade.",
  vision:
    "“Levanta-te, resplandece, porque a tua luz chegou, e a glória do Senhor raiou sobre ti” (Isaías 60:1). Ser uma igreja que irradia a luz de Cristo, refletindo a glória de Deus e atraindo todos os povos e gerações para Ele.",
  values: [
    "Fidelidade à Palavra",
    "Adoração com reverência",
    "Comunhão verdadeira",
    "Serviço e generosidade",
    "Família como prioridade",
    "Excelência em tudo",
  ],
  text: "A Igreja Batista Renovada Elim nasceu do desejo de ver vidas restauradas pelo poder do evangelho. Desde o primeiro culto, em uma sala simples, até os dias de hoje, seguimos crendo que Deus continua escrevendo novas histórias — e a sua pode começar aqui.",
  image: aboutChurch,
};

export const stats = [
  { value: 1200, suffix: "+", label: "Membros" },
  { value: 8, suffix: "", label: "Ministérios" },
  { value: 27, suffix: "", label: "Anos de história" },
  { value: 40, suffix: "+", label: "Células e grupos" },
];

export const ministries = [
  { icon: "Baby", name: "Infantil", description: "Ensino bíblico lúdico e seguro para as crianças." },
  { icon: "Flame", name: "Jovens", description: "Uma geração apaixonada por Jesus e por pessoas." },
  { icon: "Flower2", name: "Mulheres", description: "Encontros de fé, cuidado e restauração." },
  { icon: "Shield", name: "Homens", description: "Discipulado, caráter e liderança cristã." },
  { icon: "HeartHandshake", name: "Casais", description: "Fortalecendo lares sobre o fundamento da Palavra." },
  { icon: "Music", name: "Louvor", description: "Adoração com excelência e coração quebrantado." },
  { icon: "Hand", name: "Intercessão", description: "Oração constante pela igreja e pela cidade." },
  { icon: "Megaphone", name: "Evangelismo", description: "Levando esperança às ruas e às nações." },
] as const;

export const services = [
  { name: "Escola Bíblica Dominical", day: "Domingo", time: "08:00", note: "Classes por faixa etária" },
  { name: "Culto da Família", day: "Domingo", time: "18:00", note: "Culto principal com ceia mensal" },
  { name: "Culto de Oração", day: "Quarta-feira", time: "19:30", note: "Intercessão e Palavra" },
];

export const events = [
  {
    id: "conferencia-jovens",
    title: "Conferência de Jovens — Nova História",
    date: "12 a 14 de setembro",
    image: event1,
    description: "Três noites de louvor, palavra e comunhão com preletores convidados de todo o país.",
  },
  {
    id: "encontro-mulheres",
    title: "Encontro de Mulheres Elim",
    date: "05 de outubro",
    image: event2,
    description: "Um dia inteiro de ministração, oficinas e cuidado para mulheres de todas as idades.",
  },
  {
    id: "batismo",
    title: "Culto de Batismos",
    date: "26 de outubro",
    image: event3,
    description: "Celebre conosco a decisão de novas vidas que publicamente seguem a Jesus.",
  },
];

/** Preparado para integração com a API do YouTube: basta preencher `youtubeId`. */
export const sermons = [
  {
    id: "adoracao-que-agrada",
    title: "A adoração que agrada ao Pai",
    preacher: "Pastora Fatima Pinheiro",
    date: "21 de julho de 2026",
    image: pastoraFatima.url,
    youtubeId: "",
  },
  {
    id: "quando-deus-reescreve",
    title: "Quando Deus reescreve a sua história",
    preacher: "Bispo Jorge Henrique",
    date: "14 de julho de 2026",
    image: bispoJorge.url,
    youtubeId: "",
  },
  {
    id: "comunhao-verdadeira",
    title: "Comunhão verdadeira em tempos difíceis",
    preacher: "Pastor Carlos",
    date: "07 de julho de 2026",
    image: sermon3,
    youtubeId: "",
  },
];

export const gallery = [
  { src: gallery1, alt: "Congregação adorando durante o culto", span: "tall" },
  { src: event1, alt: "Conferência de jovens lotada", span: "wide" },
  { src: gallery2, alt: "Crianças do ministério infantil", span: "normal" },
  { src: gallery3, alt: "Mãos em oração", span: "tall" },
  { src: event3, alt: "Culto de batismos", span: "normal" },
  { src: sermon2, alt: "Ministério de louvor no palco", span: "wide" },
] as const;

export const testimonials = [
  {
    name: "Ana Carolina",
    role: "Membro há 6 anos",
    text: "Cheguei na Elim quebrada e encontrei uma família. Aqui aprendi que Deus ainda restaura o que parecia perdido.",
  },
  {
    name: "Rafael e Bruna",
    role: "Ministério de Casais",
    text: "Nosso casamento foi salvo dentro desta igreja. O cuidado pastoral e a Palavra mudaram completamente o nosso lar.",
  },
  {
    name: "Pedro Henrique",
    role: "Ministério de Jovens",
    text: "Encontrei propósito. Hoje sirvo, estudo a Bíblia e vejo minha geração se aproximando de Jesus.",
  },
];

export const timeline = [
  { year: "1999", title: "O primeiro culto", text: "Doze famílias se reuniram em uma sala alugada no centro da cidade." },
  { year: "2005", title: "Primeiro templo", text: "A igreja inaugura sua sede própria e inicia a Escola Bíblica Dominical." },
  { year: "2012", title: "Expansão dos ministérios", text: "Nascem os ministérios de jovens, casais e intercessão." },
  { year: "2019", title: "Missões e plantação", text: "Duas congregações filhas são plantadas na região metropolitana." },
  { year: "2026", title: "Uma nova história", text: "Mais de 1.200 membros vivendo comunhão e servindo a cidade." },
];

export const faqs = [
  {
    q: "Sou visitante. Como funciona o culto?",
    a: "Nossos cultos duram cerca de 90 minutos, com momentos de louvor, oração e pregação da Palavra. Uma equipe de recepção estará à sua espera para orientar você.",
  },
  {
    q: "Preciso me vestir de alguma forma específica?",
    a: "Não. Venha como estiver — o mais importante é o seu coração diante de Deus.",
  },
  {
    q: "Existe programação para crianças?",
    a: "Sim. Durante o Culto da Família funciona o Ministério Infantil, com salas por faixa etária e equipe treinada.",
  },
  {
    q: "Como faço parte de um ministério?",
    a: "Fale com a recepção ou envie uma mensagem pelo formulário de contato. Teremos prazer em conversar sobre o seu chamado.",
  },
  {
    q: "É possível pedir oração ou uma visita?",
    a: "Sim. Envie seu pedido pelo formulário ou pelo WhatsApp e nossa equipe pastoral entrará em contato.",
  },
];

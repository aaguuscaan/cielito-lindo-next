export type Lang = "es" | "en";

export const dictionary = {
  es: {
    nav: { about: "Sobre mí", projects: "Proyectos", contact: "Contacto", cv: "CV" },
    hero: {
      eyebrow: "Junior AI Engineer & Web Developer · Argentina",
      titleLine1: "Hola,",
      titleLine2: "soy Agus.",
      subtitle:
        "Me gusta convertir ideas en experiencias digitales que la gente disfruta usar.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Hablemos",
      note: "9:14 am — segundo mate del día",
      checklistTitle: "En progreso:",
      checklist: [
        { label: "Aprender", done: true },
        { label: "Crear", done: true },
        { label: "Mejorar", done: true },
        { label: "Tomar mate", done: false },
      ],
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Un poco sobre mi escritorio (y sobre mí)",
      paragraph:
        "Tengo 17 años y vivo en Argentina. Diseño y programo cosas: sitios web, agentes de IA, interfaces que se sienten bien al usar. Lo que más me gusta no es solo que funcione — es que se sienta cuidado.",
      traits: [
        "Curiosa",
        "Detallista hasta la obsesión",
        "Siempre aprendiendo algo nuevo",
        "Nunca deja un proyecto a medias",
        "Fan de los productos con alma",
      ],
      stickyDefault: "recordatorio: tomar agua (además del mate)",
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Cosas que fui construyendo",
      hint: "Pasá el mouse por cada objeto para abrirlo.",
      visit: "Ver sitio",
      code: "Código",
      items: [
        {
          name: "Cielito Lindo",
          tag: "Web de reservas",
          description:
            "Un sitio de reservas para una cabaña de montaña, con un plano arquitectónico como hilo visual conductor.",
          tech: ["Next.js", "Tailwind", "Firebase"],
          visit: "https://cielito-lindo-next.vercel.app/",
          code: "https://github.com/aaguuscaan/cielito-lindo-next",
        },
        {
          name: "Esencia",
          tag: "Plataforma de retiro espiritual",
          description:
            "Landing para un retiro espiritual femenino: papel suave, ilustraciones botánicas y mucha calma.",
          tech: ["HTML", "CSS", "JavaScript"],
          visit: "https://esencia-livid.vercel.app/",
          code: "https://github.com/aaguuscaan/Esencia",
        },
        {
          name: "AI Agent",
          tag: "Implementar un agente conversacional",
          description:
            "Un agente conversacional con memoria propia, documentado como si fuera su diario personal.",
          tech: ["Python", "Groq", "Streamlit"],
          visit: "https://github.com/aaguuscaan/groq-llm",
          code: "https://github.com/aaguuscaan/groq-llm",
        },
        {
          name: "LLM Base",
          tag: "Modelo asincrónico Groq y Anthropic",
          description:
            "Modelo base entrenado desde cero para experimentar con arquitecturas pequeñas de lenguaje.",
          tech: ["Python", "Asyncio", "Streaming", "Pydantic"],
          visit: "https://github.com/aaguuscaan/LLM-Client-Async",
          code: "https://github.com/aaguuscaan/LLM-Client-Async",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Creamos algo increíble?",
      subtitle:
        "Si llegaste hasta acá, probablemente ya tengamos algo de qué hablar ☕",
      cv: "Descargar CV",
      time: "6:48 pm — lámpara encendida",
    },
    footer: "Hecho a mano, con mate, en Argentina.",
    egg: {
      duck: "¡Encontraste al pato! 🦆 Vive detrás del monitor.",
      coffee: "El mate se transformó en café. Modo trasnoche activado.",
      konami: "¡Código Konami! El sweater cambió de color.",
    },
  },
  en: {
    nav: { about: "About", projects: "Projects", contact: "Contact", cv: "Resume" },
    hero: {
      eyebrow: "Junior AI Engineer & Web Developer · Argentina",
      titleLine1: "Hey,",
      titleLine2: "I'm Agus.",
      subtitle:
        "I like turning ideas into digital experiences people actually enjoy using.",
      ctaPrimary: "See projects",
      ctaSecondary: "Let's talk",
      note: "9:14 am — second mate of the day",
      checklistTitle: "In progress:",
      checklist: [
        { label: "Learn", done: true },
        { label: "Create", done: true },
        { label: "Improve", done: true },
        { label: "Drink mate", done: false },
      ],
    },
    about: {
      eyebrow: "About me",
      title: "A little about my desk (and about me)",
      paragraph:
        "I'm 17 and I live in Argentina. I design and build things: websites, AI agents, interfaces that feel good to use. What I love most isn't just that it works — it's that it feels cared for.",
      traits: [
        "Curious",
        "Detail-obsessed",
        "Always learning something new",
        "Never leaves a project unfinished",
        "Believer in products with soul",
      ],
      stickyDefault: "reminder: drink water (besides mate)",
    },
    projects: {
      eyebrow: "Projects",
      title: "Things I've been building",
      hint: "Hover each object to open it up.",
      visit: "Visit site",
      code: "Code",
      items: [
        {
          name: "Cielito Lindo",
          tag: "Booking site",
          description:
            "A booking site for a mountain cabin, using an architectural blueprint as the visual thread.",
          tech: ["Next.js", "Tailwind", "Firebase"],
          visit: "https://cielito-lindo-next.vercel.app/",
          code: "https://github.com/aaguuscaan/cielito-lindo",
        },
        {
          name: "Esencia",
          tag: "Retreat booklet",
          description:
            "Landing page for a women's spiritual retreat: soft paper, botanical illustrations, quiet calm.",
          tech: ["Next.js", "TypeScript", "CMS"],
          visit: "https://esencia-livid.vercel.app/",
          code: "https://github.com/aaguuscaan/esencia",
        },
        {
          name: "AI Agent",
          tag: "Robot notebook",
          description:
            "A conversational agent with its own memory, documented like a personal diary.",
          tech: ["Python", "LangChain", "Vector DB"],
          visit: "https://github.com/aaguuscaan/groq-llm",
          code: "https://github.com/aaguuscaan/groq-llm",
        },
        {
          name: "LLM Base",
          tag: "Research folder",
          description:
            "A base model trained from scratch to experiment with small language architectures.",
          tech: ["PyTorch", "CUDA", "Jupyter"],
          visit: "https://github.com/aaguuscaan/LLM-Client-Async",
          code: "https://github.com/aaguuscaan/LLM-Client-Async",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Shall we build something great?",
      subtitle: "If you made it this far, we probably already have something to talk about ☕",
      cv: "Download resume",
      time: "6:48 pm — lamp is on",
    },
    footer: "Handmade, with mate, in Argentina.",
    egg: {
      duck: "You found the duck! 🦆 It lives behind the monitor.",
      coffee: "The mate turned into coffee. Late-night mode activated.",
      konami: "Konami code! The sweater changed color.",
    },
  },
} as const;

export const languages = {
  es: "Español",
  en: "English",
  fr: "Français"
} as const;

export type SupportedLanguage = keyof typeof languages;
export const defaultLang: SupportedLanguage = "es";

export const ui = {
  es: {
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.ai": "IA & Lab",
    "nav.blog": "Blog",
    "nav.contact": "Contáctanos",
    "nav.sitemap": "Mapa del Sitio",
    "cta.whatsapp": "WhatsApp",
    "cta.whatsapp_long": "Escribir por WhatsApp",
    "cta.projects": "Explorar Proyectos",
    "cta.contact": "Iniciar Conversación",
    "footer.title": "¿Hablamos de tu próximo proyecto?",
    "footer.desc": "Diseñamos plataformas web de alto impacto, optimizamos la visibilidad digital de marcas turísticas y desarrollamos herramientas de analítica a medida desde Santa Marta, Colombia.",
    "footer.navigation": "Navegación",
    "footer.social": "Redes & Canales",
    "footer.rights": "Todos los derechos reservados.",
    "footer.tagline": "Marketing Turístico · Desarrollo Web · Analítica de Datos",
    "footer.location": "Santa Marta, Colombia",
    "whatsapp.tooltip": "¿Hablamos de tu proyecto?",
    "lang.switch": "Idioma"
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.ai": "AI & Lab",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.sitemap": "Sitemap",
    "cta.whatsapp": "WhatsApp",
    "cta.whatsapp_long": "Chat on WhatsApp",
    "cta.projects": "Explore Projects",
    "cta.contact": "Start a Project",
    "footer.title": "Ready to discuss your next project?",
    "footer.desc": "We build high-performance web platforms, elevate tourism brand visibility, and develop tailored business intelligence tools from Santa Marta, Colombia.",
    "footer.navigation": "Navigation",
    "footer.social": "Social & Channels",
    "footer.rights": "All rights reserved.",
    "footer.tagline": "Tourism Marketing · Web Engineering · Data Analytics",
    "footer.location": "Santa Marta, Colombia",
    "whatsapp.tooltip": "Let's talk about your project",
    "lang.switch": "Language"
  },
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.services": "Services",
    "nav.projects": "Projets",
    "nav.ai": "IA & Lab",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.sitemap": "Plan du Site",
    "cta.whatsapp": "WhatsApp",
    "cta.whatsapp_long": "Écrire sur WhatsApp",
    "cta.projects": "Explorer les Projets",
    "cta.contact": "Démarrer un Projet",
    "footer.title": "Parlons de votre prochain projet",
    "footer.desc": "Nous concevons des plateformes web performantes, développons la visibilité des marques touristiques et créons des outils d'analytique sur mesure depuis Santa Marta, Colombie.",
    "footer.navigation": "Navigation",
    "footer.social": "Réseaux & Canaux",
    "footer.rights": "Tous droits réservés.",
    "footer.tagline": "Marketing Touristique · Ingénierie Web · Analyse de Données",
    "footer.location": "Santa Marta, Colombie",
    "whatsapp.tooltip": "Discutons de votre projet",
    "lang.switch": "Langue"
  }
} as const;

export function getLangFromUrl(url: URL | string): SupportedLanguage {
  const pathname = typeof url === "string" ? url : url.pathname;
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (first === "en" || first === "fr") {
    return first;
  }
  return "es";
}

export function useTranslations(lang: SupportedLanguage) {
  return function t(key: keyof (typeof ui)["es"]): string {
    return (ui[lang] as any)[key] || (ui.es as any)[key] || key;
  };
}

export function cleanPathname(pathname: string): string {
  // Quita el prefijo /en o /fr si existe
  const cleaned = pathname.replace(/^\/(en|fr)(\/|$)/, "/");
  return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
}

export function getLocalizedPath(arg1: string, arg2?: string): string {
  let targetLang: SupportedLanguage = "es";
  let pathname = "/";

  if (!arg2) {
    pathname = arg1 || "/";
    targetLang = "es";
  } else if (arg1 === "es" || arg1 === "en" || arg1 === "fr") {
    targetLang = arg1 as SupportedLanguage;
    pathname = arg2;
  } else if (arg2 === "es" || arg2 === "en" || arg2 === "fr") {
    targetLang = arg2 as SupportedLanguage;
    pathname = arg1;
  } else {
    pathname = arg1;
  }

  const pure = cleanPathname(pathname || "/");
  if (targetLang === "es") {
    return pure;
  }
  return pure === "/" ? `/${targetLang}` : `/${targetLang}${pure}`;
}

export function getHreflangLinks(pathname: string, siteUrl = "https://juansadigital.com") {
  const base = siteUrl.replace(/\/$/, "");
  const pure = cleanPathname(pathname);
  
  const esPath = pure;
  const enPath = pure === "/" ? "/en" : `/en${pure}`;
  const frPath = pure === "/" ? "/fr" : `/fr${pure}`;

  return [
    { lang: "es", href: `${base}${esPath}` },
    { lang: "en", href: `${base}${enPath}` },
    { lang: "fr", href: `${base}${frPath}` },
    { lang: "x-default", href: `${base}${esPath}` }
  ];
}

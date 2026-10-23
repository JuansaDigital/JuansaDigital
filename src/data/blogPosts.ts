import type { SupportedLanguage } from '../i18n/ui';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  isoDate: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
  keywords: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  contentHtml: string;
}

export const blogPostsI18n: Record<SupportedLanguage, BlogPost[]> = {
  es: [
    {
      slug: "desarrollo-web-en-santa-marta",
      title: "Desarrollo Web en Santa Marta: Crea una Presencia Digital de Alto Impacto",
      date: "24 de febrero de 2026",
      isoDate: "2026-02-24",
      readTime: "5 min de lectura",
      category: "Desarrollo Web",
      image: "/images/blog-desarrollo.webp",
      excerpt: "Por qué un sitio web profesional, veloz y optimizado técnicamente es el verdadero motor de crecimiento para empresas y operadores turísticos en Santa Marta.",
      keywords: "desarrollo web en santa marta",
      author: {
        name: "Juan Salinas Calle",
        role: "Estratega Digital & Desarrollador Web",
        avatar: "/images/juan-salinas-portrait.webp"
      },
      contentHtml: `
        <p class="lead-paragraph">
          En un destino con el dinamismo turístico y comercial de Santa Marta, tener una presencia web genérica ya no es suficiente. Los viajeros y clientes corporativos toman decisiones en segundos desde sus teléfonos móviles: si tu plataforma es lenta, difícil de navegar o carece de información clara, simplemente buscarán otra opción.
        </p>

        <h2>1. El reto digital de las empresas en Santa Marta y el Caribe</h2>
        <p>
          Durante años, muchos hoteles, operadores ecoturísticos y empresas de servicios locales dependieron exclusivamente de redes sociales o de intermediarios externos. Si bien esos canales son útiles para visibilidad inicial, no te otorgan el control de tu marca ni de tus datos.
        </p>
        <p>
          Un sitio web propio y profesional es tu principal activo digital: te permite centralizar consultas, captar reservas directas, posicionarte en Google ante viajeros internacionales y proyectar la verdadera identidad de tu negocio.
        </p>

        <h2>2. WordPress vs. Astro: Elegir la tecnología adecuada</h2>
        <p>
          En JuanSa Digital no aplicamos plantillas prefabricadas infladas con plugins innecesarios. Seleccionamos la arquitectura según la necesidad específica del negocio:
        </p>
        <ul>
          <li><strong>WordPress Avanzado:</strong> Ideal para hoteles y agencias que requieren autogestión de contenidos, motores de reserva integrados, campos personalizados (CPT y JetEngine) y soporte multilingüe completo (español, inglés, francés).</li>
          <li><strong>Astro v5:</strong> Perfecto para plataformas que exigen velocidad extrema, puntuación perfecta en Core Web Vitals (< 1s de carga) y la mejor arquitectura de SEO técnico para competir en buscadores globales.</li>
        </ul>

        <h2>3. Experiencia móvil y reservas directas</h2>
        <p>
          Más del 75% del tráfico que busca experiencias en el Caribe colombiano navega desde dispositivos móviles. Por eso, el diseño debe ser <em>Mobile-First</em>: botones táctiles accesibles, tipografía legible bajo luz solar, galerías optimizadas y enlaces directos de contacto por WhatsApp o pasarelas de pago seguras (como Wompi, PayU o Stripe).
        </p>

        <h2>4. SEO Técnico: Ser visible cuando el viajero busca</h2>
        <p>
          El desarrollo web debe ir acompañado desde el primer día de una estructura semántica limpia:
        </p>
        <ul>
          <li>Jerarquía clara de encabezados (H1, H2, H3).</li>
          <li>Marcado estructurado <code>Schema.org</code> para hoteles (LodgingBusiness) o tours (TouristAttraction).</li>
          <li>Metadatos Open Graph para que al compartir enlaces en WhatsApp o redes sociales la previsualización sea atractiva y profesional.</li>
        </ul>

        <h2>Conclusión</h2>
        <p>
          Invertir en desarrollo web en Santa Marta no es solo comprar una página bonita; es construir una infraestructura digital sólida que trabaje para tu empresa las 24 horas del día. Si buscas renovar tu presencia web o crear una plataforma desde cero, el momento de dar el paso es ahora.
        </p>
      `
    },
    {
      slug: "marketing-digital-en-santa-marta",
      title: "Marketing Digital en Santa Marta: Impulsa tu Negocio Turístico",
      date: "20 de febrero de 2026",
      isoDate: "2026-02-20",
      readTime: "6 min de lectura",
      category: "Marketing Turístico",
      image: "/images/blog-marketing.webp",
      excerpt: "Estrategias de atracción de viajeros mediante posicionamiento SEO local, publicidad digital en Meta Ads y analítica para hoteles y agencias del Caribe.",
      keywords: "marketing digital en santa marta",
      author: {
        name: "Juan Salinas Calle",
        role: "Estratega Digital & Analítica",
        avatar: "/images/juan-salinas-portrait.webp"
      },
      contentHtml: `
        <p class="lead-paragraph">
          Santa Marta y el Magdalena poseen atractivos de clase mundial: desde las playas del Parque Tayrona y los ríos de Minca, hasta la expedición milenaria a Ciudad Perdida. Sin embargo, tener un destino extraordinario no garantiza ventas si tu estrategia de marketing digital no llega al público correcto en el momento indicado.
        </p>

        <h2>1. Entendiendo el viaje del turista contemporáneo</h2>
        <p>
          El ciclo de decisión de un viajero pasa por etapas muy claras: inspiración, investigación activa, comparación y reserva. Una estrategia integral de marketing digital turístico debe acompañar al usuario en cada una de esas fases:
        </p>
        <ul>
          <li><strong>Fase de Inspiración:</strong> Contenido visual inmersivo en Instagram y TikTok que despierte el deseo de conocer el destino.</li>
          <li><strong>Fase de Investigación:</strong> Artículos de blog y guías útiles posicionadas en Google que respondan preguntas clave: "¿cómo llegar?", "¿cuál es la mejor temporada?", "¿dónde hospedarse?".</li>
          <li><strong>Fase de Conversión:</strong> Páginas de aterrizaje rápidas con llamados a la acción claros y respuesta inmediata.</li>
        </ul>

        <h2>2. Publicidad Digital: Meta Ads y Google Ads con criterio</h2>
        <p>
          Publicar sin estrategia o simplemente presionar el botón "promocionar publicación" suele derivar en desperdicio de presupuesto publicitario. Una campaña rentable requiere:
        </p>
        <ul>
          <li><strong>Segmentación geográfica:</strong> Dirigir la pauta a las ciudades emisoras principales (Bogotá, Medellín, Cali, Barranquilla) y a mercados internacionales prioritarios (EE.UU., Canadá, Alemania, Francia).</li>
          <li><strong>Google Ads de Búsqueda:</strong> Capturar la demanda de usuarios que ya tienen la tarjeta en la mano buscando "hotel boutique cerca al Tayrona" o "tour a Ciudad Perdida 4 días".</li>
          <li><strong>Retargeting inteligente:</strong> Recordar a quienes visitaron tu sitio web las fechas disponibles o promociones especiales para cerrar la reserva.</li>
        </ul>

        <h2>3. Datos reales vs. métricas de vanidad</h2>
        <p>
          Los "me gusta" y los seguidores no pagan las cuentas operativas de un hotel o de una agencia. En JuanSa Digital promovemos la honestidad de datos:
        </p>
        <ul>
          <li>Medir cuántos clics se convierten en conversaciones de WhatsApp efectivas.</li>
          <li>Monitorear la tasa de conversión en tu motor de reservas directas.</li>
          <li>Implementar tableros en Google Looker Studio para visualizar en un solo panel de dónde vienen los huéspedes y cuál es el costo real de adquisición por cliente (CAC).</li>
        </ul>

        <h2>Conclusión</h2>
        <p>
          El marketing turístico en Santa Marta exige autenticidad, respeto por la cultura territorial y ejecución técnica impecable. La combinación de contenido de valor, pauta profesional y analítica de datos es la fórmula para asegurar ocupación constante a lo largo del año.
        </p>
      `
    }
  ],
  en: [
    {
      slug: "desarrollo-web-en-santa-marta",
      title: "Web Development in Santa Marta: Building High-Impact Digital Platforms",
      date: "February 24, 2026",
      isoDate: "2026-02-24",
      readTime: "5 min read",
      category: "Web Engineering",
      image: "/images/blog-desarrollo.webp",
      excerpt: "Why a professional, blazing-fast, and technically optimized website is the true growth engine for tourism operators and businesses in Santa Marta.",
      keywords: "web development in santa marta",
      author: {
        name: "Juan Salinas Calle",
        role: "Digital Strategist & Web Developer",
        avatar: "/images/juan-salinas-portrait.webp"
      },
      contentHtml: `
        <p class="lead-paragraph">
          In a dynamic tourism and commercial destination like Santa Marta, having a generic website is no longer sufficient. International travelers and corporate clients make decisions in seconds on their smartphones: if your platform is slow, confusing to navigate, or lacks transparent booking details, they will instantly move to a competitor.
        </p>

        <h2>1. The digital challenge for businesses in Santa Marta and the Colombian Caribbean</h2>
        <p>
          For years, many boutique hotels, ecotourism operators, and regional service providers relied solely on social media or third-party intermediaries (OTAs). While OTAs provide initial visibility, they charge high commissions (18%-25%) and keep control of your brand and guest relationship.
        </p>
        <p>
          Your own professionally engineered website is your primary digital asset: it centralizes inquiries, processes direct commission-free bookings, dominates Google rankings for international search queries, and showcases the authentic quality of your experience.
        </p>

        <h2>2. WordPress vs. Astro: Choosing the right architectural stack</h2>
        <p>
          At JuanSa Digital we never rely on bloated pre-made templates or unneeded plugins. We select the technical architecture strictly according to business requirements:
        </p>
        <ul>
          <li><strong>Advanced Enterprise WordPress:</strong> Best for hotels and tour agencies needing intuitive self-management, custom booking engines, customized fields (CPT & JetEngine), and seamless multilingual support (English, Spanish, French).</li>
          <li><strong>Astro v5:</strong> Ideal for platforms demanding blazing-fast speed, perfect Core Web Vitals (< 1s load time), zero client-side JavaScript overhead, and superior technical SEO to compete globally.</li>
        </ul>

        <h2>3. Mobile-First UX & frictionless direct bookings</h2>
        <p>
          Over 75% of travel searches across the Colombian Caribbean originate on mobile devices. Design must therefore be strictly <em>Mobile-First</em>: accessible tap targets, legible typography under bright sunlight, compressed WebP media, and direct pathways to WhatsApp contact or secure payment gateways (such as Wompi, PayU, or Stripe).
        </p>

        <h2>4. Technical SEO: Dominating high-intent search queries</h2>
        <p>
          Web engineering must include a pristine semantic architecture from day one:
        </p>
        <ul>
          <li>Strict semantic heading hierarchy (H1, H2, H3).</li>
          <li>Structured <code>Schema.org</code> markup for LodgingBusiness and TouristAttraction.</li>
          <li>Complete Open Graph tags ensuring rich, branded preview cards when shared on WhatsApp or social networks.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Investing in custom web development in Santa Marta is not merely about having an attractive website; it is about building robust commercial digital infrastructure that generates direct inquiries 24/7.
        </p>
      `
    },
    {
      slug: "marketing-digital-en-santa-marta",
      title: "Digital Marketing in Santa Marta: Fueling Tourism Business Growth",
      date: "February 20, 2026",
      isoDate: "2026-02-20",
      readTime: "6 min read",
      category: "Tourism Marketing",
      image: "/images/blog-marketing.webp",
      excerpt: "Traveler acquisition strategies through local SEO positioning, performance Meta Ads, and data analytics for Caribbean hotels and agencies.",
      keywords: "digital marketing in santa marta",
      author: {
        name: "Juan Salinas Calle",
        role: "Digital Strategist & Analytics",
        avatar: "/images/juan-salinas-portrait.webp"
      },
      contentHtml: `
        <p class="lead-paragraph">
          Santa Marta and Magdalena boast world-class attractions: from the secluded coves of Tayrona National Park and the cloud forest rivers of Minca to the millennial trek to the Lost City (Ciudad Perdida). However, having an extraordinary destination does not guarantee direct bookings if your digital marketing strategy fails to reach qualified travelers at the right decision point.
        </p>

        <h2>1. Understanding the contemporary traveler journey</h2>
        <p>
          A traveler's decision cycle evolves through four distinct stages: inspiration, active research, evaluation, and direct booking. An effective tourism marketing strategy addresses every single touchpoint:
        </p>
        <ul>
          <li><strong>Inspiration Stage:</strong> High-impact visual storytelling on Instagram and TikTok creating emotional connection and destination desire.</li>
          <li><strong>Research Stage:</strong> Authoritative guides and blog posts indexed on Google addressing key questions: "how to get to Tayrona", "best season for Ciudad Perdida", "boutique hotels in Santa Marta".</li>
          <li><strong>Conversion Stage:</strong> Ultra-fast landing pages with clear booking calls-to-action and immediate WhatsApp or payment response.</li>
        </ul>

        <h2>2. Paid Advertising: Meta Ads and Google Ads with strategic rigor</h2>
        <p>
          Posting randomly or blindly pressing the "boost post" button burns marketing budget without ROI. High-converting campaigns demand:
        </p>
        <ul>
          <li><strong>Geographic Precision:</strong> Targeting key domestic feeder markets (Bogotá, Medellín, Cali, Barranquilla) and high-value international markets (US, Canada, Germany, France, UK).</li>
          <li><strong>High-Intent Google Search Ads:</strong> Intercepting travelers with credit card in hand searching for "boutique hotel near Tayrona park" or "Lost City 4-day trek booking".</li>
          <li><strong>Smart Retargeting:</strong> Re-engaging past website visitors with seasonal packages or room availability to close the booking cycle.</li>
        </ul>

        <h2>3. Actionable Business Intelligence vs. vanity metrics</h2>
        <p>
          Social media "likes" do not cover operational expenses for hotels and tour operators. At JuanSa Digital we prioritize objective business data:
        </p>
        <ul>
          <li>Tracking exactly how many clicks convert into verified WhatsApp inquiries.</li>
          <li>Measuring booking engine conversion rates across traffic sources.</li>
          <li>Deploying unified Google Looker Studio dashboards to identify guest origin countries and true Customer Acquisition Cost (CAC).</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Tourism marketing in Santa Marta demands authenticity, regional cultural respect, and technical precision. Combining high-value content, targeted paid traffic, and continuous analytics guarantees consistent occupancy throughout both peak and off-peak seasons.
        </p>
      `
    }
  ],
  fr: [
    {
      slug: "desarrollo-web-en-santa-marta",
      title: "Développement Web à Santa Marta : Créer une Présence Numérique à Fort Impact",
      date: "24 février 2026",
      isoDate: "2026-02-24",
      readTime: "5 min de lecture",
      category: "Ingénierie Web",
      image: "/images/blog-desarrollo.webp",
      excerpt: "Pourquoi un site web professionnel, ultra-rapide et optimisé techniquement est le véritable moteur de croissance pour les entreprises à Santa Marta.",
      keywords: "développement web santa marta",
      author: {
        name: "Juan Salinas Calle",
        role: "Stratège Numérique & Développeur Web",
        avatar: "/images/juan-salinas-portrait.webp"
      },
      contentHtml: `
        <p class="lead-paragraph">
          Dans une destination au dynamisme touristique exceptionnel comme Santa Marta, disposer d'un site web générique ne suffit plus. Les voyageurs internationaux et les clients professionnels prennent des décisions en quelques secondes depuis leur smartphone : si votre plateforme est lente ou confuse, ils se tourneront immédiatement vers une alternative.
        </p>

        <h2>1. Le défi numérique des entreprises à Santa Marta et dans les Caraïbes</h2>
        <p>
          Pendant des années, de nombreux hôtels de charme, opérateurs écotouristiques et prestataires locaux ont dépendu uniquement des réseaux sociaux ou des plateformes tierces (OTAs). Bien que ces canaux apportent une visibilité initiale, ils prélèvent de fortes commissions (18%-25%) et ne vous permettent pas de fidéliser directement votre clientèle.
        </p>
        <p>
          Un site web professionnel est votre actif numérique principal : il vous permet de centraliser les demandes, de capter des réservations directes sans commission, de vous positionner sur Google auprès des voyageurs internationaux et de valoriser votre identité de marque.
        </p>

        <h2>2. WordPress vs. Astro : Choisir l'architecture technologique adaptée</h2>
        <p>
          Chez JuanSa Digital, nous refusons les modèles préfabriqués surchargés d'extensions inutiles. Nous sélectionnons l'architecture technique selon les besoins stricts du projet :
        </p>
        <ul>
          <li><strong>WordPress Avancé :</strong> Idéal pour les hôtels et agences qui requièrent une autonomie éditoriale, des moteurs de réservation sur mesure (CPT, JetEngine) et un support multilingue complet (français, espagnol, anglais).</li>
          <li><strong>Astro v5 :</strong> Parfait pour les plateformes exigeant une vitesse extrême, un score parfait aux Core Web Vitals (< 1s de chargement) et la meilleure architecture SEO pour rivaliser sur les moteurs de recherche internationaux.</li>
        </ul>

        <h2>3. Expérience mobile & réservations directes</h2>
        <p>
          Plus de 75% du trafic recherchant des séjours dans les Caraïbes colombiennes provient d'appareils mobiles. La conception doit donc être strictement <em>Mobile-First</em> : boutons tactiles accessibles, typographie fluide sous la lumière naturelle, médias WebP optimisés et redirection directe vers WhatsApp ou des passerelles de paiement sécurisées (Wompi, PayU, Stripe).
        </p>

        <h2>4. SEO Technique : Être visible au moment décisif</h2>
        <p>
          Le développement web doit intégrer dès le départ une structure sémantique irréprochable :
        </p>
        <ul>
          <li>Hiérarchie sémantique claire des titres (H1, H2, H3).</li>
          <li>Balisage structuré <code>Schema.org</code> pour l'hôtellerie (LodgingBusiness) et les excursions (TouristAttraction).</li>
          <li>Métadonnées Open Graph pour des partages élégants et professionnels sur WhatsApp et les réseaux sociaux.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Investir dans le développement web à Santa Marta ne consiste pas seulement à concevoir une page esthétique ; c'est bâtir une infrastructure commerciale pérenne qui travaille pour votre entreprise 24h/24.
        </p>
      `
    },
    {
      slug: "marketing-digital-en-santa-marta",
      title: "Marketing Digital à Santa Marta : Propulsez votre Entreprise Touristique",
      date: "20 février 2026",
      isoDate: "2026-02-20",
      readTime: "6 min de lecture",
      category: "Marketing Touristique",
      image: "/images/blog-marketing.webp",
      excerpt: "Stratégies d'acquisition de voyageurs par le SEO local, les publicités ciblées Meta Ads et l'analyse de données pour les hôtels et agences des Caraïbes.",
      keywords: "marketing digital santa marta",
      author: {
        name: "Juan Salinas Calle",
        role: "Stratège Numérique & Analyse de Données",
        avatar: "/images/juan-salinas-portrait.webp"
      },
      contentHtml: `
        <p class="lead-paragraph">
          Santa Marta et la région du Magdalena possèdent des richesses exceptionnelles : des plages du Parc Tayrona aux rivières de Minca, jusqu'au trek légendaire vers la Cité Perdue (Ciudad Perdida). Cependant, une destination extraordinaire ne garantit pas des réservations sans une stratégie de marketing digital ciblée et percutante.
        </p>

        <h2>1. Comprendre le parcours du voyageur moderne</h2>
        <p>
          Le cycle de décision d'un voyageur traverse plusieurs phases clés : inspiration, recherche active, évaluation et réservation. Une stratégie marketing intégrée doit l'accompagner à chaque étape :
        </p>
        <ul>
          <li><strong>Phase d'Inspiration :</strong> Contenu visuel immersif sur Instagram et TikTok pour susciter le désir de séjour.</li>
          <li><strong>Phase de Recherche :</strong> Guides pratiques et articles de blog référencés sur Google répondant aux questions essentielles : comment venir, quelle est la meilleure saison, où loger.</li>
          <li><strong>Phase de Conversion :</strong> Pages d'atterrissage rapides dotées d'appels à l'action précis et d'un canal de contact direct par WhatsApp.</li>
        </ul>

        <h2>2. Publicité Digitale : Meta Ads et Google Ads avec rigueur</h2>
        <p>
          Publier sans stratégie ou cliquer sur "booster la publication" entraîne souvent des dépenses publicitaires inutiles. Une campagne rentable exige :
        </p>
        <ul>
          <li><strong>Ciblage géographique précis :</strong> Adresser les principales villes émettrices colombiennes (Bogotá, Medellín, Cali) et les marchés internationaux clés (France, Canada, États-Unis, Allemagne).</li>
          <li><strong>Google Ads sur le réseau de recherche :</strong> Capter la demande des utilisateurs prêts à réserver pour "hôtel boutique Parc Tayrona" ou "trek Ciudad Perdida 4 jours".</li>
          <li><strong>Retargeting intelligent :</strong> Rappeler les disponibilités et offres spéciales aux personnes ayant déjà visité votre site.</li>
        </ul>

        <h2>3. Données réelles vs. indicateurs de vanité</h2>
        <p>
          Les "likes" et le nombre d'abonnés ne paient pas les charges opérationnelles d'un hôtel. Chez JuanSa Digital, nous privilégions la transparence des données :
        </p>
        <ul>
          <li>Mesurer le nombre de clics transformés en conversations concrètes sur WhatsApp.</li>
          <li>Suivre le taux de conversion sur votre moteur de réservations directes.</li>
          <li>Mettre en place des tableaux de bord Google Looker Studio pour identifier la provenance réelle des voyageurs et le coût d'acquisition client (CAC).</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Le marketing touristique à Santa Marta exige authenticité, respect du territoire et rigueur technique. L'alliance d'un contenu de qualité, de campagnes publicitaires ciblées et de l'analyse de données assure un taux d'occupation régulier toute l'année.
        </p>
      `
    }
  ]
};

export function getBlogPosts(lang: SupportedLanguage = "es"): BlogPost[] {
  return blogPostsI18n[lang] || blogPostsI18n.es;
}

export function getBlogPostBySlug(slug: string, lang: SupportedLanguage = "es"): BlogPost | undefined {
  const posts = getBlogPosts(lang);
  return posts.find((p) => p.slug === slug);
}

// Retrocompatibilidad con import { blogPosts }
export const blogPosts: BlogPost[] = blogPostsI18n.es;

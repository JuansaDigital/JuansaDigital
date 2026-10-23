# Plan de Evolución Dinámica · JuanSa Digital
## Inspirado en Studio Contra (`studiocontra.co/es`)

> **Objetivo:** Transformar la web de JuanSa Digital de una presentación estática oscura a una experiencia web interactiva, editorial y viva, adoptando la paleta de color característica, la tipografía Swiss Grotesk y las microinteracciones galardonadas de **Studio Contra** (Awwwards / Latin American Design Awards).

---

## 🎨 1. Extracción de la Paleta de Color de Studio Contra

A diferencia del estilo monocromático oscuro tradicional, Studio Contra utiliza un **juego dinámico de contrastes por sección**: un fondo base cálido tipo papel editorial (*Warm Chalk*), bloques de impacto en rojo puro (*Contra Red*), y secciones nocturnas (*Primary Black*) para el portafolio inmersivo.

### Tokens de Color Extraídos del Código Fuente de `studiocontra.co`:

| Token | Hex / Valor | Nombre | Rol en la Web |
| :--- | :--- | :--- | :--- |
| `--primary-white` | `#FAF8F4` | **Warm Chalk / Papel Editorial** | **Fondo base del sitio.** Da sensación de revista de diseño, lujo tranquilo y cero fatiga visual. |
| `--primary-black` | `#000000` | **Pure Pitch Black** | Tipografía de alto contraste sobre blanco, y fondo de la sección inmersiva de proyectos. |
| `--primary-red` | `#EC3A3A` | **Contra Red (Acento Eléctrico)** | Secciones de ruptura (ej. "Nuestros Servicios"), hover de enlaces y detalles llamativos. |
| `--orange-projects`| `#E18F4A` | **Warm Ochre** | Etiquetas de turismo y acento complementario cálido. |
| `--primary-blue` | `#3C82D5` | **Sky Cobalt** | Acento para tecnología, datos e indicadores de estado. |
| `--logo-yellow` | `#FEC800` | **Solar Yellow** | Micro-puntos de atención y alertas. |
| `--opacity-grey-10`| `rgba(171, 171, 171, 0.1)` | **Frosted Gray Muted** | Fondos de la barra de navegación y contenedores sutiles. |
| `--opacity-grey-30`| `rgba(171, 171, 171, 0.3)` | **Pill Border Gray** | Bordes de botones y líneas de separación divisoria. |

---

## ⚡ 2. Las 5 Animaciones y Microinteracciones Clave de Studio Contra

Studio Contra no usa animaciones recargadas; usa **física táctil y cambios de escala** que hacen que la web se sienta orgánica:

### 1. El Botón "Pill Morph" (Firma de Studio Contra)
- **Estado normal:** Botón redondeado completo (`border-radius: 80px`).
- **Al pasar el cursor (Hover):** Se contrae a esquinas cuadradas suaves (`border-radius: 8px`) con una curva de aceleración elástica:
  ```css
  transition: border-radius 0.35s cubic-bezier(0.89, -0.01, 0.1, 0.99);
  ```

### 2. Pinned Work Camera (Galería Fija con Scroll-Snap)
- Al hacer scroll, la sección de proyectos se **fija en pantalla completa (100vh sticky)**.
- Mientras el usuario sigue bajando la rueda del ratón, el texto de la izquierda cambia (`Gatorade` → `DoceMil` → `League of Legends`) y la imagen de fondo hace un fundido suave (`opacity: 1`, `transition: opacity 0.28s ease`).
- Para JuanSa Digital: adaptaremos este efecto para mostrar los 4 proyectos insignia (*Discover La Guajira*, *Logan Valuation*, *Wiwa Tour*, *Visit Valle*).

### 3. Acordeones Editoriales con Iconos Reactivos (`+` / `—`)
- Lista tipográfica con líneas divisorias (`1px solid #000`).
- Al hacer clic, el icono `+` rota y conmuta a `—`, desplegando el texto explicativo con un deslizamiento vertical fluido.

### 4. Transición Cromática por Secciones (Color Inversion)
- **Hero & Intro:** Fondo Blanco Crema (`#FAF8F4`) con texto negro (`#000000`).
- **Showcase de Proyectos:** Fondo Negro Carbón (`#000000`) con imágenes a sangre y tipografía blanca.
- **Servicios:** Ruptura en Rojo Studio Contra (`#EC3A3A`) con texto blanco puro.
- **Footer:** Retorno al Blanco Crema con tipografía bold gigante.

### 5. Carrusel Horizontal de Marcas / Clientes
- Tira deslizable de logos con desplazamiento táctil y barra de scroll ultra delgada personalizada.

---

## 📸 3. Lista de Fotos y Material que Necesitamos

Para que el diseño se vea al nivel de Studio Contra y no como una maqueta con capturas genéricas, necesitamos las siguientes imágenes en **alta resolución (mínimo 1920x1080 px o 2560x1440 px)**:

### A. Fotografías de Identidad & Marca (Para Hero y Nosotros)
- [ ] **Foto 1: Retrato Editorial de Juan Salinas / JuanSa Digital**
  - *Estilo:* Fotografía natural, iluminación lateral suave, fondo limpio (puede ser en oficina, con laptop o exterior arquitectónico en Santa Marta).
  - *Uso:* Sección "Nosotros" y presentación de la consultoría.
- [ ] **Foto 2: Banner Panorámico de Santa Marta / Sierra Nevada / Caribe**
  - *Estilo:* Vista cinematográfica aérea o a nivel de costa de Santa Marta o el Parque Tayrona, que comunique territorio turístico y sofisticación.
  - *Uso:* Banner hero o separador visual a pantalla completa.
- [ ] **Foto 3 (Opcional pero muy potente): Video corto en bucle (5 a 10 seg)**
  - *Estilo:* Video atmosférico sin audio (puedes subirlo a Vimeo o MP4 comprimido en WebM): olas de Santa Marta, navegación en laptop o tomas aéreas de destinos.
  - *Uso:* Fondo de pantalla del Hero como hace Studio Contra.

### B. Mockups y Fotografía de Proyectos (Portafolio)
Para que los proyectos resalten como en Studio Contra (que muestra fotos de estilo de vida, interfaces en iPad o portadas cinematográficas):
- [ ] **Discover La Guajira:** Foto de alta calidad del desierto de La Guajira / cultura Wayuu o captura limpia del portal en pantalla completa.
- [ ] **Wiwa Tour:** Fotografía real de trekking a Ciudad Perdida / Sierra Nevada o viajeros en la selva.
- [ ] **Logan Valuation:** Fotografía de arquitectura corporativa moderna o mockup editorial del sitio.
- [ ] **Visit Valle:** Imagen cultural del Valle del Cauca (arquitectura colonial, salsa o paisajes verdes).
- [ ] **Providencia Isla:** Imagen marina / arrecifes o playas de Providencia.
- [ ] **Chez Boaz Tours:** Viajeros boutique en experiencia turística privada.

### C. Logotipos de Clientes y Plataformas (Formato PNG transparente o SVG)
- [ ] Logo de **Logan Valuation**
- [ ] Logo institucional de **Discover La Guajira / Gobernación**
- [ ] Logo de **Visit Valle**
- [ ] Logo de **Wiwa Tour**
- [ ] Logo de **Tornus Agency**
- [ ] Logo de **Chez Boaz Tours**
- [ ] Logo de **SITUR / Valledupar**

---

## 📋 4. Plan de Implementación Paso a Paso

```
FASE 1: Sistema de Diseño & Tokens (Studio Contra Palette)
  ├── 1.1 Configurar variables CSS en src/styles/global.css (#FAF8F4, #EC3A3A, #000000, etc.)
  ├── 1.2 Importar tipografía Swiss Neo-Grotesk con jerarquías de 80px (display-d1)
  └── 1.3 Implementar la animación del botón "Pill Morph" (80px -> 8px)

FASE 2: Componentes Dinámicos Interactivos
  ├── 2.1 Pinned Work Camera (Scroll sticky para proyectos destacados)
  ├── 2.2 Acordeones dinámicos para Servicios (+ / — reactivo)
  ├── 2.3 Carrusel horizontal de logos y marcas aliadas con scrollbar personalizada
  └── 2.4 Bloque de Servicios en color de ruptura (Contra Red #EC3A3A)

FASE 3: Integración de Fotografías y Recursos Reales
  ├── 3.1 Cargar las fotos proporcionadas en public/images/ en formato WebP optimizado
  ├── 3.2 Montar las fotos de proyectos y el retrato de JuanSa
  └── 3.3 Validar contrastes WCAG AAA sobre fondos claros y oscuros

FASE 4: Revisión de Páginas (Inicio, Nosotros, Servicios, Proyectos, Contacto)
  ├── 4.1 Aplicar el nuevo ritmo visual en las 5 páginas
  ├── 4.2 Probar microinteracciones en móvil y escritorio
  └── 4.3 Pruebas de rendimiento Lighthouse y compilación Astro en limpio
```

---

## 🚀 Próximo Paso Inmediato
1. Revisa esta paleta y estructura.
2. Indícame si quieres que comencemos aplicando la **paleta de Studio Contra (`#FAF8F4` base, `#EC3A3A` acento, `#000000` pitch)** y el **botón animado Pill Morph**, mientras me pasas o definimos las fotos.

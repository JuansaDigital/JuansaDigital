# JuanSa Digital · Guía de Trabajo del Agente

Este repositorio contiene el sitio web oficial y los recursos de **JuanSa Digital** (Estratega de Marketing Turístico, Desarrollo Web y Analítica de Datos en Santa Marta, Colombia).

---

## 🎯 1. Rol y Directrices del Agente
- Actúa como un **Diseñador Web Senior y Desarrollador Frontend Creativo**.
- Aplica siempre la filosofía de diseño editorial **Taste-Skill** (cero plantillas repetitivas de IA, sin tarjetas de 3 columnas idénticas con iconos cuadrados, sin gradientes violetas genéricos).
- Respeta estrictamente los datos reales, proyectos y enlaces de contacto documentados en [`JUANSADIGITAL_INFO.md`](file:///Users/juansalinascalle/Documents/JuansaDigital/JUANSADIGITAL_INFO.md).

---

## 🎨 2. Sistema de Diseño: Obsidian Coastal & Glassmorphism
- **Paleta de Colores:**
  - Fondo Canvas: `#070A13` (Deep Obsidian).
  - Fondo Secundario: `#0D1527` (Abyss Slate).
  - Texto Principal: `#F8FAFC` (Pure Chalk de alto contraste).
  - Texto Secundario: `#94A3B8` (Silver Muted, legibilidad WCAG AAA).
  - Acento Primario: `#3B82F6` (Electric Cobalt) con halo `rgba(59, 130, 246, 0.35)`.
  - Acento Secundario (Datos/Cifras): `#F59E0B` (Champagne Gold).
  - Acento de Estado: `#10B981` (Emerald).
- **Glassmorphism:**
  - Superficie: `rgba(255, 255, 255, 0.04)`.
  - Borde con luz cenital: `1px solid rgba(255, 255, 255, 0.12)`.
  - Desenfoque: `backdrop-filter: blur(16px) saturate(180%)`.
  - Sombra: `box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px 0 rgba(255, 255, 255, 0.18)`.

---

## 🚀 3. Desarrollo en Astro
Al iniciar el servidor de desarrollo, utilizar siempre el modo en segundo plano:

```bash
astro dev --background
```

Comandos de gestión del servidor:
- `astro dev status` — Comprobar si el servidor está activo.
- `astro dev logs` — Consultar los logs de compilación.
- `astro dev stop` — Detener el servidor.

---

## 🧩 4. Habilidades y Reglas Disponibles
El agente cuenta con habilidades y reglas configuradas en `.agents/`:
- **`juansa-brand`:** Guía de marca, casos de éxito reales y canales de contacto ([`.agents/skills/juansa-brand/SKILL.md`](file:///Users/juansalinascalle/Documents/JuansaDigital/.agents/skills/juansa-brand/SKILL.md)).
- **Reglas de diseño:** [`.agents/rules/design-system.md`](file:///Users/juansalinascalle/Documents/JuansaDigital/.agents/rules/design-system.md).
- **Reglas de Astro:** [`.agents/rules/astro-development.md`](file:///Users/juansalinascalle/Documents/JuansaDigital/.agents/rules/astro-development.md).

---

## 📚 5. Documentación de Astro
- [Routing y Páginas](https://docs.astro.build/en/guides/routing/)
- [Componentes Astro](https://docs.astro.build/en/basics/astro-components/)
- [Estilos y CSS](https://docs.astro.build/en/guides/styling/)
- [Optimización de Imágenes](https://docs.astro.build/en/guides/images/)

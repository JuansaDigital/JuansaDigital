# Reglas de Diseño: Obsidian Coastal & Glassmorphism Premium

## 1. Filosofía Estética Anti-Slop
- **Sin clichés de IA:** Prohibido usar tarjetas idénticas de 3 columnas con iconos en cajitas cuadradas, píldoras flotantes vacías ("✨ AI Powered"), gradientes violetas genéricos o titulares centrados de 3 líneas.
- **Titulares:** Máximo 2 líneas a cualquier resolución. Uso de `clamp()` y tracking ajustado (`-0.02em`).
- **Composición:** Alternar geometrías en cada sección (bloques asimétricos, tablas editoriales, vitrinas horizontales).
- **Contraste:** Todo texto debe garantizar legibilidad WCAG AAA sobre fondos oscuros.

## 2. Paleta de Colores
- **Canvas Base:** `#070A13` (Deep Obsidian)
- **Fondo Secundario:** `#0D1527` (Abyss Slate)
- **Superficie de Cristal (Base):** `rgba(255, 255, 255, 0.04)`
- **Superficie de Cristal (Hover):** `rgba(255, 255, 255, 0.08)`
- **Borde de Cristal (Luz Cenital):** `1px solid rgba(255, 255, 255, 0.12)`
- **Desenfoque Glass:** `backdrop-filter: blur(16px) saturate(180%)`
- **Sombra Glass:** `box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px 0 rgba(255, 255, 255, 0.18)`
- **Texto Principal:** `#F8FAFC` (Pure Chalk)
- **Texto Secundario:** `#94A3B8` (Silver Muted)
- **Acento Primario (Tech/Cobalto):** `#3B82F6` (Electric Cobalt) con brillo `rgba(59, 130, 246, 0.35)`
- **Acento Secundario (Oro Champán/Datos):** `#F59E0B` (Champagne Gold)
- **Acento Estado:** `#10B981` (Emerald) para indicadores activos

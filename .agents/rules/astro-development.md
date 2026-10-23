# Reglas de Desarrollo en Astro

## 1. Servidor de Desarrollo
Al iniciar el servidor de desarrollo, utilizar siempre el modo en segundo plano:
```bash
astro dev --background
```
Monitorear y controlar con:
- `astro dev status`
- `astro dev logs`
- `astro dev stop`

## 2. Convenciones de Componentes y Rendimiento
- **Estructura:** Modularizar en `src/components/`, `src/layouts/` y `src/pages/`.
- **Islas de Interactivad:** Reducir al mínimo el JavaScript del cliente. Utilizar `client:load` o `client:visible` únicamente para componentes que requieren interactividad táctil inmediata (ej. el radar interactivo de turismo o el menú móvil).
- **Imágenes:** Usar formatos modernos `.webp` o `.avif` con atributos `width`, `height`, `loading="lazy"` y `decoding="async"`.
- **Estilos:** Utilizar tokens CSS centralizados en `src/styles/` o clases CSS modulares acordes al sistema Glassmorphism de JuanSa Digital.

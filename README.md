# Agus — Portfolio

Un portfolio editorial y hecho a mano para Agustina, Junior AI Engineer & Web Developer.
Cuenta la historia de un día de trabajo — de la mañana con mate fresco a la tarde con la lámpara encendida — a través de una ilustración original de escritorio que evoluciona en cada sección.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- lucide-react
- Ilustraciones 100% en SVG hechas a mano (sin librerías de imágenes ni IA generativa)

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

> Nota: las tipografías (Space Grotesk + Inter) se descargan de Google Fonts en build time vía `next/font/google`, así que necesitás conexión a internet la primera vez que corras `npm run dev` o `npm run build`.

## Estructura

```
src/
  app/
    layout.tsx        # fonts, metadata, providers
    page.tsx           # orden de las secciones
    globals.css         # tokens de color, tipografía, texturas de papel
  components/
    Nav.tsx             # nav sticky + selector ES/EN
    Hero.tsx
    About.tsx           # "hoja de papel" pegada con cinta
    Projects.tsx        # cada proyecto es un objeto del escritorio
    Contact.tsx
    Footer.tsx
    EggToast.tsx        # aviso de easter eggs encontrados
    illustrations/
      DeskScene.tsx      # la ilustración principal (Agus + escritorio), recibe `stage` 0-3
      ProjectIcon.tsx     # ilustraciones de cada proyecto
  lib/
    dictionary.ts        # copy en ES/EN
    language-context.tsx
    scene-context.tsx    # estado de los easter eggs (mate→café, Konami, pato)
    use-reduced-motion.ts
```

## La historia del scroll

`DeskScene` recibe un `stage` (0 a 3) que va agregando capas al dibujo: más stickers en la laptop,
el Arduino asomando, la lámpara encendida, el pizarrón del notebook con más bocetos. Cada sección del
sitio le pasa un stage distinto para que el escritorio se sienta "vivo" a medida que se avanza.

## Easter eggs

- 🦆 Hay un pato escondido detrás de la pantalla de la laptop en el Hero.
- ☕ Hacé click 5 veces en el mate para que se transforme en café.
- 🎮 Código Konami (↑ ↑ ↓ ↓ ← → ← → B A) cambia el color del sweater.
- 📝 El post-it de la sección "Sobre mí" cambia de mensaje en cada visita.

## Accesibilidad

- Foco visible en todos los elementos interactivos.
- `prefers-reduced-motion` respetado (animaciones infinitas se desactivan).
- Contraste AA en textos sobre fondos claros y oscuros.
- Roles y `aria-label` en los elementos clickeables de las ilustraciones.

## Deploy

Funciona out-of-the-box en Vercel: conectá el repo y listo. Como usa `next/font/google`,
el único requisito es que el entorno de build tenga acceso a internet.

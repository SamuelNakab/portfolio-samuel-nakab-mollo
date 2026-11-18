# Portfolio · Samuel Nakab Mollo

Portfolio personal de Samuel Nakab Mollo, desarrollador backend y de IA.

Hecho con [Astro](https://astro.build): genera un sitio estático, rápido y con muy poco JavaScript.

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Dónde se cambia cada cosa

- **Textos, proyectos, links y tecnologías:** `src/data/contenido.js`
- **Colores y estilos generales:** `src/styles/global.css` (variables al principio)
- **Secciones:** `src/components/`
- **Capturas de los proyectos:** `public/capturas/`
- **Logos:** `public/logos/` (de [Simple Icons](https://simpleicons.org))

## Deploy

Está conectado a Vercel: cada push a `main` publica el sitio solo.

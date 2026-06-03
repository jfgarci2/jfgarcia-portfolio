# Cómo ver el portafolio completo

## 1. Arrancar el sitio (local)

```powershell
cd C:\Users\jfgar\Documents\PORTAFOLIO\jfgarcia-portfolio
npm run dev
```

Abre el navegador en la URL que muestra la terminal (normalmente **http://localhost:3000**).

## 2. Recorrido recomendado (todo el sitio)

| Paso | URL | Qué ver |
|------|-----|---------|
| 1 | http://localhost:3000/es | Inicio en español (hero, clientes, proyectos) |
| 2 | http://localhost:3000/es#work | Tarjetas AMVA, DAP, DEVIMED… |
| 3 | http://localhost:3000/es/work/amva | Case study AMVA + galería + Power BI |
| 4 | http://localhost:3000/es/work/medellin-dap | Case study Medellín DAP |
| 5 | http://localhost:3000/es/work/rag-pot-medellin | RAG POT + enlace demo |
| 6 | http://localhost:3000/es#demos | Demos |
| 7 | http://localhost:3000/es#about | Foto, CV, perfil |
| 8 | http://localhost:3000/es#hire | Contratación / consultoría |
| 9 | http://localhost:3000/es#contact | Email, LinkedIn, GitHub |

Inglés: cambia `/es` por la raíz **http://localhost:3000** o el botón **EN** en el menú.

## 3. Versión antigua (no usar)

Si ves **http://localhost:5173**, es el proyecto Vite viejo en la carpeta `PORTAFOLIO`. El portafolio actual es **Next.js en el puerto 3000**.

## 4. Publicar en internet (siguiente paso)

1. Subir `jfgarcia-portfolio` a GitHub (`jfgarci2`).
2. Conectar el repo en [vercel.com](https://vercel.com) → Deploy.
3. Variable de entorno: `NEXT_PUBLIC_SITE_URL` = tu URL final (ej. `https://tu-proyecto.vercel.app`).

## 5. Proyectos sin tableros públicos

**DEVIMED**, **Bioexplora** y **Gobernación de Antioquia** muestran un resumen SIG (geodatabases, SQL, Python) — no hay Power BI enlazado. El foco para recruiters está en AMVA, DAP y el RAG.

## 6. Capturas en alta resolución

Las capturas DAP se escalan a **1920 px** con `scripts/upscale-work-images.py`. Para máxima nitidez, reexporta desde Power BI a ~1920 px y sustituye en `public/work/dashboards/…`.

# Portafolio — plan por fases

Organización acordada contigo. Cada fase se cierra antes de pasar a la siguiente.

## Fase 0 — Identidad (hecho / en curso)

| Ítem | Estado | Notas |
|------|--------|--------|
| LinkedIn | ✅ | `https://www.linkedin.com/in/josé-fernando-garcía-pérez-3a139021b` en Contact, Footer, Hire, JSON-LD |
| CV PDF | ✅ | `public/cv-jose-fernando-garcia.pdf` |
| Foto perfil | ✅ | `public/headshot.jpg` |
| 6 años Data Analyst | ✅ | Textos y contador del hero |
| Banner LinkedIn (opcional) | ⏳ | Si quieres el banner teal del perfil en el sitio, envíalo como PNG |

---

## Fase 1 — Imágenes del portafolio inicial (tú preparas, yo integro)

### ¿PDF o captura?

**No es obligatorio usar PDF.** Para la web es mejor:

1. **PNG o JPG** desde Power BI: abre el tablero publicado → vista que quieras mostrar → captura (Win+Shift+S) o **Exportar** si tu licencia lo permite.
2. Si solo tienes **PDF**, también sirve: guárdalo y yo puedo orientarte a convertir cada página a `.webp` (más liviano que PDF en la página).

Recomendación: **1920×1080** o similar, texto legible, sin datos sensibles.

### Carpeta donde debes dejar los archivos

Copia tus archivos aquí (puedes usar PDF temporalmente; ideal **.webp** o **.png**):

```
jfgarcia-portfolio/public/work/
├── amva.webp                    ← tarjeta principal proyecto AMVA (1 imagen “hero”)
├── medellin-dap.webp            ← tarjeta DAP
├── rag-pot-medellin.webp        ← RAG / planeación
├── devimed.webp
├── bioexplora.webp
├── iatech.webp
├── antioquia.webp
└── dashboards/                  ← opcional: detalle por tablero
    ├── amva/
    │   ├── permisos.webp
    │   ├── plan-accion.webp
    │   ├── sancionatorios.webp
    │   └── arboles.webp
    └── medellin-dap/
        ├── presentacion-amva.webp
        ├── juridico.webp
        ├── anywhere.webp
        ├── oficios-upt-pot.webp
        ├── temas-estrategicos.webp
        ├── proceso-participativo.webp
        ├── mesas-pot-2025.webp
        └── portafolio-subdireccion.webp
```

Hoy el sitio usa **mock animado** si falta `amva.webp`, etc. En cuanto subas la imagen con ese nombre, la tarjeta la muestra sola.

### Lista de tableros con enlace (para que sepas cuál capturar)

**AMVA (4 publicados)**

| Archivo sugerido | Tablero |
|------------------|---------|
| `dashboards/amva/permisos.webp` | Permisos ambientales |
| `dashboards/amva/plan-accion.webp` | Plan de acción |
| `dashboards/amva/sancionatorios.webp` | Sancionatorios |
| `dashboards/amva/arboles.webp` | Árboles |

AMVA publica 4 tableros (permisos, sancionatorios, plan de acción, árboles). Expedientes e industria no aplican.

**Medellín DAP (7 Power BI + 1 web)**

| Archivo sugerido | Tablero |
|------------------|---------|
| `dashboards/medellin-dap/presentacion-amva.webp` | Presentación AMVA |
| `dashboards/medellin-dap/juridico.webp` | Jurídico |
| `dashboards/medellin-dap/anywhere.webp` | Anywhere |
| `dashboards/medellin-dap/oficios-upt-pot.webp` | Oficios UPT/POT |
| `dashboards/medellin-dap/temas-estrategicos.webp` | Temas estratégicos |
| `dashboards/medellin-dap/proceso-participativo.webp` | Proceso participativo |
| `dashboards/medellin-dap/mesas-pot-2025.webp` | Mesas POT 2025 |
| `dashboards/medellin-dap/portafolio-subdireccion.webp` | Portafolio subdirección (Netlify) |

Los enlaces vivos están en `data/dashboards.ts` (iframe en case studies).

**Mínimo para Fase 1:** solo las **6–8 imágenes** `*.webp` en la raíz de `public/work/` (una por proyecto en la grilla Work). Las de `dashboards/` las usamos en Fase 2.

---

## Fase 2 — Case studies con galería

- Galería de capturas por proyecto en `/work/amva` y `/work/medellin-dap`.
- Texto EN/ES ya existe; se enriquece con tus notas por tablero.

## Fase 3 — Proyectos sin tablero público

- DEVIMED, Bioexplora, Iatech, Antioquia: foto/diagrama + bullets (sin iframe).

## Fase 4 — Deploy

- GitHub + Vercel + `NEXT_PUBLIC_SITE_URL` + post LinkedIn con URL final.

---

## Qué me envías en el chat cuando termines Fase 1

Ejemplo:

> “Subí `amva.webp` y `medellin-dap.webp` en public/work”

o

> “Dejé PDFs en `TABLEROS DE DATOS GITHUB/capturas/`”

Yo los renombro, convierto a webp si hace falta y actualizo el sitio.

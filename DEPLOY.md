# Publicar en Vercel

## Opción A — CLI (recomendada)

1. Inicia sesión en Vercel (solo la primera vez):

   ```powershell
   cd C:\Users\jfgar\Documents\PORTAFOLIO\jfgarcia-portfolio
   npx vercel@latest login
   ```

2. Despliega a producción:

   ```powershell
   npx vercel@latest deploy --prod --yes
   ```

3. En [vercel.com](https://vercel.com) → tu proyecto → **Settings → Environment Variables**:

   - `NEXT_PUBLIC_SITE_URL` = URL final (ej. `https://jfgarcia-portfolio.vercel.app`)

4. **Redeploy** después de guardar la variable.

## Opción B — GitHub + Vercel (CI automático)

1. Crea repo en GitHub (`jfgarci2/jfgarcia-portfolio`) y sube este proyecto.
2. [vercel.com/new](https://vercel.com/new) → Import Git Repository.
3. Framework: **Next.js** (detectado automáticamente).
4. Añade `NEXT_PUBLIC_SITE_URL` y despliega.

## Dominio personalizado (opcional)

Vercel → Project → **Domains** → añade tu dominio y sigue el DNS.

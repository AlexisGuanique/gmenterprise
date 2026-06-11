# Landing Template

Template base para landings corporativas (estilo [ePoint AI](https://epointai.com/), [DB Studio](https://www.dbstudiomedia.com/), etc.).

Stack: **Next.js 15** · **React 19** · **TypeScript** · **Tailwind CSS 4**

## Inicio rápido

```bash
npm install
cp .env.example .env.local
npm run dev
```

Espera a ver **`✓ Ready`** en la terminal (puede tardar 10–30 s la primera vez). Luego abre:

**http://127.0.0.1:3000** → redirige a `/en`

### Si `npm run dev` no arranca o se queda en "Starting..."

1. **Espera** — la primera compilación tarda; debe aparecer `✓ Ready`.
2. **Puerto ocupado** — cierra otras terminales con Next.js o usa otro puerto:
   ```bash
   npx next dev --hostname 127.0.0.1 --port 3001
   ```
3. **Limpia la caché** y reinicia:
   ```bash
   npm run dev:clean
   ```
4. **Windows** — si no recarga al guardar archivos, añade en `.env.local`:
   ```
   WATCHPACK_POLLING=true
   ```
5. Usa **`127.0.0.1`** en lugar de `localhost` si el navegador no conecta.
6. No uses la URL **Network** (`100.x.x.x`) salvo que sepas que tu red/VPN lo permite.

## Estructura del proyecto

```
src/
├── config/           ← Personaliza aquí al clonar para un cliente
│   ├── site.config.ts      # Marca, contacto, logo, CTA
│   ├── navigation.ts       # Menú header + enlaces legales footer
│   ├── home-sections.ts    # Secciones activas en Home
│   ├── theme.config.ts     # Preset activo (cambiar aquí)
│   └── theme-presets.ts    # Paletas: default, epoint-ai, db-studio, ocean
├── data/
│   ├── site.ts             # Textos de páginas (hero, FAQ, about, blog…)
│   └── legal.ts            # Políticas legales
├── components/
│   ├── layout/             # Header, Footer, CookieBanner
│   ├── home/               # Secciones del Home (modulares)
│   ├── about/ contact/ blog/ schedule/ legal/ shared/
└── app/[locale]/           # Rutas con i18n (en, es)
```

## Personalizar una nueva landing

### 1. Datos de la empresa

Edita `src/config/site.config.ts`:

- Nombre, emails, teléfono, dirección
- Logo (`public/images/logo.svg` o `.png`)
- Texto del botón CTA del header
- URLs de Calendly / widget de reservas

### 2. Navegación

Edita `src/config/navigation.ts`:

- Añade o quita rutas del menú
- Ajusta enlaces legales del footer

### 3. Secciones del Home

Edita `src/config/home-sections.ts`:

```ts
{ id: "faq", enabled: false }  // oculta la sección FAQ
```

Reordena el array para cambiar el orden en pantalla.

### 4. Contenido

Edita `src/data/site.ts` para textos de hero, FAQ, about, blog, formulario de contacto.

Edita `src/data/legal.ts` o las secciones en `src/data/legal.ts` para políticas legales.

### 5. Colores (presets por cliente)

En `src/config/theme.config.ts`, cambia el preset activo:

```ts
export const activeThemePreset: ThemePresetId = "epoint-ai";
```

Presets disponibles en `src/config/theme-presets.ts`:

| Preset | Estilo |
|--------|--------|
| `default` | Menta pastel viva + dorado soleado (recomendado) |
| `epoint-ai` | Cyan pastel + ámbar |
| `db-studio` | Lavanda pastel + melocotón |
| `ocean` | Azul cielo pastel + coral |

Para un color 100% custom, añade un nuevo preset en `theme-presets.ts`.

### 6. Pricing

Edita planes, add-ons y políticas en `src/data/pricing.ts`.

## Rutas incluidas

| Ruta | Descripción |
|------|-------------|
| `/[locale]` | Home con secciones modulares |
| `/[locale]/about` | Sobre nosotros |
| `/[locale]/pricing` | Planes y precios |
| `/[locale]/blog` | Listado de artículos |
| `/[locale]/blog/[slug]` | Artículo individual |
| `/[locale]/contact` | Oficinas + formulario |
| `/[locale]/schedule-a-call` | Widget de reservas |
| `/[locale]/privacy-policy` | Privacidad |
| `/[locale]/term-of-services` | Términos |
| `/[locale]/cookie-policy` | Cookies |
| `/[locale]/refund-policy` | Reembolsos |

## Cookies

El componente `CookieBanner` guarda la preferencia en `localStorage` (`cookie-consent`: `accepted` | `declined`).

## Variables de entorno

| Variable | Uso |
|----------|-----|
| `NEXT_PUBLIC_CALENDLY_URL` | Embed de Calendly |
| `NEXT_PUBLIC_BOOKING_WIDGET_URL` | Widget alternativo (GoHighLevel, etc.) |
| `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` | POST del formulario de contacto |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número WhatsApp para flujo de compra (sin + ni espacios, ej. `15551234567`) |

## Añadir una nueva sección al Home

1. Crea el componente en `src/components/home/MiSeccion.tsx`
2. Añade el `id` en `src/config/home-sections.ts`
3. Regístralo en el `switch` de `src/components/home/HomeSections.tsx`

## Build

```bash
npm run build
npm start
```

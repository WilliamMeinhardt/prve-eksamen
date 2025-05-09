# Impact IT - Nettside for utleie av IT-utstyr

Dette prosjektet er en nettside for Impact IT, et norsk selskap som tilbyr utleie av IT-utstyr. Nettsiden er bygget med Next.js, React og Tailwind CSS.

## Teknologivalg

### Next.js
Next.js er valgt som rammeverk for dette prosjektet av flere grunner:
- **Server-side rendering (SSR)**: Gir bedre ytelse og SEO-optimalisering
- **App Router**: Enkel og intuitiv routing med støtte for layouts og nested routes
- **Server Components**: Reduserer mengden JavaScript som sendes til klienten
- **Server Actions**: Gjør det enkelt å implementere server-side funksjonalitet uten å bygge separate API-endepunkter
- **API Routes**: Enkelt å lage backend-funksjonalitet
- **Vercel Deployment**: Enkel og rask deployment

### Tailwind CSS
Tailwind CSS er valgt for styling:
- **Utility-first**: Rask utvikling med forhåndsdefinerte klasser
- **Responsivt design**: Enkelt å lage responsive layouts
- **Tilpasningsdyktig**: Kan enkelt tilpasses til prosjektets behov
- **Mindre CSS**: Reduserer mengden CSS som må lastes

### TypeScript
TypeScript gir:
- **Typesikkerhet**: Fanger feil under utvikling
- **Bedre IDE-støtte**: Autocompletions og bedre dokumentasjon
- **Enklere vedlikehold**: Lettere å refaktorere kode

### shadcn/ui
shadcn/ui er brukt for UI-komponenter:
- **Tilgjengelige komponenter**: Ferdigbygde, tilgjengelige komponenter
- **Tilpasningsdyktig**: Komponenter kan enkelt tilpasses
- **Konsistent design**: Sikrer et konsistent utseende på tvers av nettsiden



## Hvordan kjøre prosjektet lokalt

1. Klone repositoriet:
\`\`\`bash
git clone https://github.com/impact-it/website.git
cd website
\`\`\`

2. Installer avhengigheter:
\`\`\`bash
npm install
\`\`\`

3. Start utviklingsserveren:
\`\`\`bash
npm run dev
\`\`\`

4. Åpne nettleseren og gå til `http://localhost:3000`

1. Bygg prosjektet:
\`\`\`bash
npm run build
\`\`\`

2. Start produksjonsserveren:
\`\`\`bash
npm start
\`\`\

## Prosjektstruktur

\`\`\`
impact-it/
├── app/                  # Next.js App Router
│   ├── admin/            # Admin-side for å legge til/fjerne produkter
│   ├── ansatte/          # Side med oversikt over ansatte
│   ├── utstyr/           # Side med oversikt over utstyr
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Hovedside
├── components/           # React-komponenter
│   ├── ui/               # UI-komponenter fra shadcn/ui
│   ├── header.tsx        # Navigasjonsheader
│   └── footer.tsx        # Footer
├── lib/                  # Hjelpefunksjoner og data
│   ├── actions.ts        # Server Actions for admin-funksjonalitet
│   ├── data.ts           # Dummydata for ansatte
│   └── utils.ts          # Hjelpefunksjoner
├── public/               # Statiske filer
│   └── data/             # JSON-data for utstyr
└── README.md             # Prosjektdokumentasjon
\`\`\`

## Sikkerhet og datahåndtering

- **Server Actions**: Brukes for å håndtere data på serversiden
- **Validering**: Input valideres både på klient- og serversiden
- **Typesikkerhet**: TypeScript brukes for å sikre korrekt datahåndtering

## Fremtidige forbedringer

- Implementere autentisering for admin-området
- Legge til en database for lagring av data (f.eks. PostgreSQL eller MongoDB)
- Legge til booking-funksjonalitet
- Implementere betalingsløsning
- Legge til flerspråklig støtte

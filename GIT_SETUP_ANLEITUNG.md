# Git Setup Anleitung für Mietservice24

## 🔧 Git Installation (falls nicht vorhanden)

1. **Git herunterladen**: https://git-scm.com/download/win
2. **Installation durchführen** mit Standard-Einstellungen
3. **PowerShell neu starten**

## 📤 Projekt zu GitHub hochladen

### Schritt 1: Git Repository initialisieren
```bash
git init
```

### Schritt 2: Remote Repository hinzufügen
```bash
git remote add origin https://github.com/Simplefysed/mietservice24.git
```

### Schritt 3: Alle Dateien hinzufügen
```bash
git add .
```

### Schritt 4: Ersten Commit erstellen
```bash
git commit -m "Initial commit: Mietservice24 Next.js application

- Next.js 14 with App Router
- TypeScript implementation
- Tailwind CSS styling
- Interactive calendar booking system
- Service detail pages for equipment rental
- Responsive design for all devices
- Complete error handling
- Landing page with hero, services, about, contact sections"
```

### Schritt 5: Zum GitHub Repository pushen
```bash
git branch -M main
git push -u origin main
```

## 🎯 Projektstruktur für Git

```
mietservice24/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│   ├── global-error.tsx
│   └── services/
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── Calendar.tsx
├── lib/
│   └── services.ts
├── .gitignore
├── README.md
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── postcss.config.js
```

## ⚠️ Wichtige Hinweise

1. **Node_modules**: Wird automatisch von .gitignore ausgeschlossen
2. **.next**: Build-Ordner wird ignoriert
3. **Environment Files**: .env Dateien werden nicht hochgeladen
4. **TypeScript**: Vollständig konfiguriert und einsatzbereit

## 🚀 Nach dem Upload

Nach dem Upload können andere Entwickler das Projekt klonen:

```bash
git clone https://github.com/Simplefysed/mietservice24.git
cd mietservice24
npm install
npm run dev
```

## 📞 Support

Bei Problemen mit Git oder GitHub, kontaktieren Sie:
- GitHub Support
- Git Documentation: https://git-scm.com/doc

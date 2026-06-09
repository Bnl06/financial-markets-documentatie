# Deployen via GitHub Pages

## 1. Nieuwe repository maken

Ga naar GitHub en maak een repository, bijvoorbeeld:

```text
financial-markets-studybook
```

## 2. Bestanden uploaden

Upload alles uit deze zip naar de root van je repository. Je moet dus onder andere dit zien:

```text
mkdocs.yml
requirements.txt
.github/workflows/deploy-docs.yml
docs/
```

## 3. GitHub Pages instellen

Ga naar:

```text
Settings → Pages
```

Zet **Build and deployment** op:

```text
GitHub Actions
```

## 4. Workflow starten

Push naar de `main` branch. Daarna loopt de workflow automatisch.

Je kan dit controleren via:

```text
Actions → Deploy docs
```

## 5. Website openen

Na een paar minuten staat je site online op ongeveer:

```text
https://jouwnaam.github.io/financial-markets-studybook/
```

## Taal switchen

- Nederlands staat in `/nl/`
- English staat in `/en/`
- Rechtsboven staat een taal-knop.
- Als je klikt, opent dezelfde pagina in de andere taal.
- De site bewaart je positie op de pagina via een scrollpercentage.

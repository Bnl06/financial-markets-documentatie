# Introduction to Financial Markets StudyBook — GitHub Pages multilingual

Deze versie is gemaakt om volledig via **GitHub** te deployen met **GitHub Pages** en **GitHub Actions**.

## Wat zit erin?

- `docs/nl/` = volledige Nederlandse versie
- `docs/en/` = volledige Engelse versie
- vaste taalwisselknop rechtsboven
- taalwissel bewaart de scrollpositie, zodat je op ongeveer dezelfde plaats blijft op dezelfde pagina
- 2-daags studiepad
- Zensical / MkDocs Material layout
- GitHub Actions workflow voor deployment

## Deployen

1. Maak een nieuwe GitHub repository.
2. Upload alle bestanden uit deze map naar je repository.
3. Ga in GitHub naar **Settings → Pages**.
4. Kies bij **Build and deployment** voor **GitHub Actions**.
5. Push naar `main`.
6. Wacht tot de workflow klaar is.
7. Open de GitHub Pages link.

## Belangrijk

Pas eventueel in `mkdocs.yml` dit aan:

```yml
site_url: https://USERNAME.github.io/REPOSITORY_NAME/
```

Vervang `USERNAME` en `REPOSITORY_NAME` door jouw GitHub naam en repositorynaam.

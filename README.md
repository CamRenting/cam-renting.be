# cam-renting.be

Website van Cam-Renting: pakketlevering en transport in Leuven en Antwerpen (PostNL, bpost, Colis Privé).
Gewone HTML/CSS/JS, geen build nodig. Talen: NL / FR / EN.

Pagina's: `index.html`, `fleet.html`, `partners.html`, `contact.html`.

## Aanpassen

- Telefoon en e-mail: bovenaan `js/script.js` (`CONFIG`). Dit bestand is publiek, zet er alleen gegevens in die iedereen mag zien.
- Teksten: `I18N` in `js/script.js` (de Nederlandse tekst staat ook in de HTML).
- Kleuren: `:root` bovenaan `css/style.css`.
- Logo: `logo.svg` (zwart, transparante achtergrond) en `favicon.svg`.

## Online (GitHub Pages)

Repository → Settings → Pages → Deploy from a branch → `main` / `(root)`.
Het bestand `CNAME` bevat `cam-renting.be`. Zet bij je domeinregistrar vier `A`-records naar
`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` en een `CNAME` `www` naar
`camrenting.github.io` (controleer de adressen in de GitHub Pages-documentatie).

## Contactformulier

Zonder `formEndpoint` opent het formulier het mailprogramma van de bezoeker (mailto). Voor rechtstreeks
versturen: maak een gratis formulier op formspree.io en plak het adres in `CONFIG.formEndpoint`.

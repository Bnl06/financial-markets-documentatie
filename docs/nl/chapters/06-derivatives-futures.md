> **Nederlandse variant** — Dit is de hoofdversie voor het studeren. Gebruik de Engelse variant vooral om Engelse vaktermen te herkennen.

# Unit 6 — Derivatives: Forwards, Futures and Swaps

!!! abstract "Kernzin"

    Derivaten halen hun waarde uit een onderliggende waarde. Ze worden gebruikt voor hedging, speculatie en arbitrage.

## 1. Derivative

Een derivative is een contract waarvan de waarde afhangt van een underlying asset, zoals een aandeel, rente, valuta of commodity.

## 2. Forward contract

Een forward is een overeenkomst vandaag om in de toekomst een asset te kopen of verkopen tegen een vooraf bepaalde prijs. Het contract is meestal OTC en maatwerk.

Arbitragevrije forward price zonder income:

$$F=S(1+r)^T$$

Voorbeeld: spot price = 250, interest = 2,3%, maturity = 1 jaar.

$$F=250(1.023)=255.75$$

## 3. Futures

Een future lijkt op een forward, maar is gestandaardiseerd en wordt verhandeld op een beurs. Futures hebben marking-to-market en margin requirements, waardoor counterparty risk lager is dan bij forwards.

## 4. Hedging met futures

Een bedrijf met toekomstige onzekerheid kan futures gebruiken om een prijs vast te leggen. Bijvoorbeeld: een importeur die later dollars nodig heeft, kan valuta-futures gebruiken om wisselkoersrisico te beperken.

## 5. Swaps

Een swap is een contract waarbij partijen cashflows uitwisselen. Bekend voorbeeld: interest rate swap, waarbij fixed interest wordt geruild tegen floating interest.

## 6. Arbitrage

Arbitrage is winst zonder risico en zonder netto-investering. In efficiënte markten verdwijnen arbitragemogelijkheden snel omdat traders ze benutten.

## Examenfocus

Leg het verschil uit tussen hedging en speculatie. Bij hedging gebruik je derivaten om een bestaand risico te verminderen. Bij speculatie neem je juist risico om winst te maken.

---

## Examenaanvulling — toegevoegd zonder bestaande documentatie te verwijderen

!!! note "Niet-destructieve update"
    De oorspronkelijke documentatie hierboven is bewust behouden. Deze aanvulling voegt examenfocus, extra begrippen, modelantwoorden en veelgemaakte fouten toe zonder de bestaande uitleg te vervangen.

!!! abstract "Kernzin"
    Forwards, futures en swaps laten toe risico’s af te dekken of te speculeren op toekomstige prijzen.

## Wat moet je kunnen op het examen?

- Vergelijk OTC forward met beursgenoteerde future.
- Leg long versus short uit.
- Bereken forward price en payoff.
- Verbind margin, clearing house en marking-to-market met risicobeheer.

## Kernmechanisme

Gebruik bij open vragen altijd deze structuur: **definitie → mechanisme → voorbeeld → gevolg/link met andere units**. Zo toon je dat je niet alleen losse woorden kent, maar ook relaties met financiële markten en instellingen.

## Formules en rekenfocus

- `Forward price ≈ S_0(1+r)^T`
- `Long forward payoff = S_T - K`
- `Short forward payoff = K - S_T`

!!! warning "Veelgemaakte fouten"
    - Alleen een definitie geven zonder relatie met markten of instellingen.
    - Een formule gebruiken zonder te zeggen welke renteconventie of periode gebruikt wordt.
    - Payoff en profit verwarren bij opties.
    - Ratings, indexgewichten of ordertypes uit het hoofd kennen maar niet kunnen toepassen.

## Begrippenlijst per unit

| Begrip | English term | Definitie | Examenbelang | Gelinkt aan |
| --- | --- | --- | --- | --- |
| derivative | derivative | Financieel contract waarvan waarde afhangt van onderliggende waarde. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 6 — Forwards, Futures and Swaps. | futures; options |
| underlying asset | underlying asset | Actief waarop een derivaat gebaseerd is. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 6 — Forwards, Futures and Swaps. | derivatives |
| forward contract | forward contract | OTC-contract om later te kopen/verkopen tegen vandaag afgesproken prijs. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 6 — Forwards, Futures and Swaps. | forward price |
| future contract | futures contract | Gestandaardiseerd beurscontract met dagelijkse afrekening. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 6 — Forwards, Futures and Swaps. | marking-to-market |
| forward price | forward price | Theoretische prijs voor levering later, vaak S0(1+r)^T zonder inkomen/opslag. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 6 — Forwards, Futures and Swaps. | cost of carry |
| long position | long position | Positie die profiteert van stijgende onderliggende prijs. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 6 — Forwards, Futures and Swaps. | payoff |
| short position | short position | Positie die profiteert van dalende onderliggende prijs. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 6 — Forwards, Futures and Swaps. | payoff |
| marking-to-market | marking-to-market | Dagelijkse winst/verlies-afrekening op futures. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 6 — Forwards, Futures and Swaps. | margin account |
| margin | margin | Waarborg om futuresverplichtingen te garanderen. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 6 — Forwards, Futures and Swaps. | clearing house |
| clearing house | clearing house | Instelling die tegenpartijrisico in beursderivaten beheert. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 6 — Forwards, Futures and Swaps. | futures |
| swap | swap | Contract om toekomstige kasstromen uit te wisselen. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 6 — Forwards, Futures and Swaps. | interest rate swap |
| hedging | hedging | Risico afdekken met een tegengestelde positie. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 6 — Forwards, Futures and Swaps. | derivatives |
| speculation | speculation | Positie innemen om te profiteren van verwachte prijsbeweging. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 6 — Forwards, Futures and Swaps. | risk |

## Voorbeeldvragen met korte modelantwoorden

??? question "Waarom heeft een future minder tegenpartijrisico dan een forward?"
    **Kort modelantwoord:** Door standaardisatie, clearing house, margins en dagelijkse afrekening.
??? question "Wanneer gebruik je hedging?"
    **Kort modelantwoord:** Wanneer je een bestaand prijs-, rente- of valutarisico wil verminderen.

## Link met andere units

- **Unit 1** levert het basisschema: actoren, markten, intermediairs en balanslogica.
- **Units 2–4** leveren waardering van geldmarkt-, obligatie- en aandeleninstrumenten.
- **Units 5–7** leveren risico, portfolio en derivaten.
- **Units 9–12** verklaren banking, crisis, regulation en supervision.

!!! tip "Studietip"
    Leer elk begrip actief: dek de definitie af, zeg hardop een voorbeeld, en leg daarna de link met minstens één andere unit.

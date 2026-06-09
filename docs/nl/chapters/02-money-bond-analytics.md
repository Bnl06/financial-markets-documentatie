# Unit 2 — Money and Bond Analytics

!!! abstract "Kernzin"
    Money and Bond Analytics gaat over rente, tijdswaarde en waardering van cashflows.

## Wat moet je kunnen op het examen?

- Kies exact of benaderend Fisher afhankelijk van vraag.
- Gebruik simple interest voor kortlopende geldmarktinstrumenten.
- Gebruik compounding en discounting voor FV/PV, annuities en obligaties.
- Los YTM op als interne opbrengstvoet, vaak via Excel.

## Kernmechanisme

Gebruik bij open vragen altijd deze structuur: **definitie → mechanisme → voorbeeld → gevolg/link met andere units**. Zo toon je dat je niet alleen losse woorden kent, maar ook relaties met financiële markten en instellingen.

## Formules en rekenfocus

- `(1+r_nominal)=(1+r_real)(1+π^e)`
- `r_nominal ≈ r_real + π^e`
- `V_T = V_0(1+rT)`
- `V_T = V_0(1+r/m)^{mT}`
- `V_0 = V_T/(1+r)^T`
- `Bond price = sum of discounted coupons and principal`

!!! warning "Veelgemaakte fouten"
    - Alleen een definitie geven zonder relatie met markten of instellingen.
    - Een formule gebruiken zonder te zeggen welke renteconventie of periode gebruikt wordt.
    - Payoff en profit verwarren bij opties.
    - Ratings, indexgewichten of ordertypes uit het hoofd kennen maar niet kunnen toepassen.

## Begrippenlijst per unit

| Begrip | English term | Definitie | Examenbelang | Gelinkt aan |
| --- | --- | --- | --- | --- |
| time value of money | time value of money | Principe dat geld vandaag meer waard is dan dezelfde som later. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 2 — Money and Bond Analytics. | PV; FV |
| nominal interest rate | nominal interest rate | Rente zonder correctie voor inflatie. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 2 — Money and Bond Analytics. | Fisher relation |
| real interest rate | real interest rate | Rente na correctie voor verwachte inflatie. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 2 — Money and Bond Analytics. | Fisher relation |
| expected inflation | expected inflation | Inflatieverwachting over de looptijd van het instrument. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 2 — Money and Bond Analytics. | Fisher relation |
| Fisher relation | Fisher relation | Exact: (1+nominale rente)=(1+reële rente)(1+verwachte inflatie). | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 2 — Money and Bond Analytics. | inflation; bond yields |
| simple interest | simple interest | Lineaire renteopbouw: Vt = V0(1+rT). | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 2 — Money and Bond Analytics. | T-bills; money market |
| compound interest | compound interest | Rente-op-rente waarbij interest mee kapitaliseert. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 2 — Money and Bond Analytics. | future value |
| future value | future value | Waarde later na oprenting. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 2 — Money and Bond Analytics. | compounding |
| present value | present value | Huidige waarde van toekomstige cashflow via discontering. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 2 — Money and Bond Analytics. | bond pricing |
| discounting | discounting | Toekomstige waarde terugrekenen naar vandaag. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 2 — Money and Bond Analytics. | PV |
| annuity | annuity | Reeks gelijke betalingen op vaste tijdstippen. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 2 — Money and Bond Analytics. | loan payments |
| perpetuity | perpetuity | Oneindige reeks gelijke cashflows. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 2 — Money and Bond Analytics. | DDM |
| growing perpetuity | growing perpetuity | Oneindige cashflowreeks met constante groei. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 2 — Money and Bond Analytics. | Gordon model |
| spot rate | spot rate | Rente voor een nulcouponbetaling op specifieke looptijd. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 2 — Money and Bond Analytics. | term structure |
| yield to maturity | yield to maturity | Interne opbrengstvoet die obligatieprijs gelijk maakt aan PV van cashflows. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 2 — Money and Bond Analytics. | bond pricing |
| coupon | coupon | Periodieke rentebetaling van een obligatie. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 2 — Money and Bond Analytics. | bond cashflows |
| face value | face value | Nominale waarde die op vervaldag wordt terugbetaald. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 2 — Money and Bond Analytics. | bonds |
| bond price | bond price | Som van verdisconteerde coupons en hoofdsom. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 2 — Money and Bond Analytics. | YTM; spot rates |
| basis point | basis point | Één honderdste van een procentpunt: 0,01%. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 2 — Money and Bond Analytics. | rates |
| day count convention | day count convention | Afspraak om dagen om te zetten in jaarfracties, bv. ACT/360. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 2 — Money and Bond Analytics. | T-bills |

## Voorbeeldvragen met korte modelantwoorden

??? question "Bereken FV/PV en noteer welke renteconventie je gebruikt."
    **Kort modelantwoord:** Punten krijg je voor tijdslijn, juiste formule, juiste periodieke rente en eenheden.
??? question "Waarom is YTM niet hetzelfde als coupon?"
    **Kort modelantwoord:** Coupon bepaalt cashflows; YTM is de disconteringsvoet die de prijs verklaart.

## Link met andere units

- **Unit 1** levert het basisschema: actoren, markten, intermediairs en balanslogica.
- **Units 2–4** leveren waardering van geldmarkt-, obligatie- en aandeleninstrumenten.
- **Units 5–7** leveren risico, portfolio en derivaten.
- **Units 9–12** verklaren banking, crisis, regulation en supervision.

!!! tip "Studietip"
    Leer elk begrip actief: dek de definitie af, zeg hardop een voorbeeld, en leg daarna de link met minstens één andere unit.

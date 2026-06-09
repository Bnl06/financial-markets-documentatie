> **Nederlandse variant** — Dit is de hoofdversie voor het studeren. Gebruik de Engelse variant vooral om Engelse vaktermen te herkennen.

# Unit 2 — Money and Bond Analytics

!!! abstract "Kernzin"

    Unit 2 leert hoe geldwaarde door de tijd verandert: interest, inflatie, present value, future value, obligatieprijs en yield.

## 1. Nominale en reële interest

De nominale rente is de rente die je ziet in contracten. De reële rente corrigeert voor verwachte inflatie.

Exacte Fisher-relatie:

$$1+r_{nominal}=(1+r_{real})(1+\pi^e)$$

Benadering:

$$r_{nominal}\approx r_{real}+\pi^e$$

!!! example "Voorbeeld"

    Nominale rente = 2,3%. Verwachte inflatie = 2,7%.  
    Reële rente ≈ 2,3% - 2,7% = -0,4%.  
    Je koopkracht daalt dus ondanks een positieve nominale rente.

## 2. Simple interest

Bij simple interest groeit interest lineair met de tijd.

$$V_T=V_0(1+rT)$$

Dit wordt vaak gebruikt bij money market instrumenten zoals T-bills.

## 3. Compounding

Bij compounding krijg je interest op interest.

Annual compounding:

$$V_T=V_0(1+r)^T$$

Semi-annual compounding:

$$V_T=V_0\left(1+\frac{r}{2}\right)^{2T}$$

## 4. Present value

Present value is wat een toekomstige cashflow vandaag waard is.

$$V_0=\frac{V_T}{(1+r)^T}$$

Hoe hoger de interest rate, hoe lager de present value. Geld in de toekomst is minder waard dan geld vandaag omdat je vandaag kan investeren.

## 5. Annuity

Een annuity is een reeks gelijke betalingen op vaste momenten. De present value is de som van alle gedisconteerde betalingen.

$$PV=\sum_{t=1}^{T}\frac{CF_t}{(1+r)^t}$$

## 6. Obligatieprijs

Een obligatieprijs is de present value van coupons plus principal.

Voor een 2-jarige coupon bond met face value 100 en coupon 3:

$$P=\frac{3}{(1+s_1)}+\frac{103}{(1+s_2)^2}$$

Gebruik de juiste spot rate per maturity. De cashflow over 1 jaar wordt gedisconteerd met de 1-year spot rate; de cashflow over 2 jaar met de 2-year spot rate.

## 7. Yield to maturity

De **yield to maturity** is de ene discontovoet die de huidige prijs gelijk maakt aan alle toekomstige cashflows.

$$P=\sum_{t=1}^{T}\frac{CF_t}{(1+y)^t}$$

Je lost dit meestal op met Excel `IRR`, `RATE` of Goal Seek.

## Examenfocus

Leg altijd uit of je simple interest, compounding of discounting gebruikt. Bij obligaties moet je het verschil tussen **spot rates** en **yield to maturity** kunnen uitleggen.

---

## Examenaanvulling — toegevoegd zonder bestaande documentatie te verwijderen

!!! note "Niet-destructieve update"
    De oorspronkelijke documentatie hierboven is bewust behouden. Deze aanvulling voegt examenfocus, extra begrippen, modelantwoorden en veelgemaakte fouten toe zonder de bestaande uitleg te vervangen.

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

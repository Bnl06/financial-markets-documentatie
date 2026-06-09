> **Nederlandse variant** — Dit is de hoofdversie voor het studeren. Gebruik de Engelse variant vooral om Engelse vaktermen te herkennen.

# Unit 7 — Derivatives: Options

!!! abstract "Kernzin"

    Een optie geeft een recht, geen verplichting. De koper betaalt een premie; de schrijver ontvangt de premie maar neemt verplichtingen op zich.

## 1. Call en put

| Optie | Recht voor koper | Verwachting koper |
|---|---|---|
| Call | kopen tegen strike price | underlying stijgt |
| Put | verkopen tegen strike price | underlying daalt |

## 2. Long en short

- **Long option**: je koopt de optie en betaalt premium.
- **Short option / write option**: je schrijft de optie en ontvangt premium, maar je moet leveren of afnemen als de koper uitoefent.

## 3. Payoff en profit

Call payoff:

$$\max(0,S_T-K)$$

Put payoff:

$$\max(0,K-S_T)$$

Profit houdt ook rekening met de premium.

## 4. Break-even

Bij een long call is break-even:

$$K+premium$$

Bij een long put is break-even:

$$K-premium$$

## 5. Protective put en hedging

Een belegger kan een put kopen om een minimum verkoopprijs te verzekeren. Dit werkt als verzekering: je betaalt premium en beperkt downside risk.

## Examenfocus

Je moet kunnen uitleggen waarom een optie asymmetrisch is. De koper heeft beperkt verlies tot de premium, maar mogelijke winst kan groter zijn. De schrijver heeft het omgekeerde profiel.

---

## Examenaanvulling — toegevoegd zonder bestaande documentatie te verwijderen

!!! note "Niet-destructieve update"
    De oorspronkelijke documentatie hierboven is bewust behouden. Deze aanvulling voegt examenfocus, extra begrippen, modelantwoorden en veelgemaakte fouten toe zonder de bestaande uitleg te vervangen.

!!! abstract "Kernzin"
    Options combineren recht, premie, payoff en break-even; payoff en profit zijn niet hetzelfde.

## Wat moet je kunnen op het examen?

- Maak payofftabellen voor long/short call en put.
- Bereken break-even door totale profit gelijk aan nul te zetten.
- Let op teken van premies: betalen is min, ontvangen is plus.
- Gebruik opties voor bescherming of speculatie.

## Kernmechanisme

Gebruik bij open vragen altijd deze structuur: **definitie → mechanisme → voorbeeld → gevolg/link met andere units**. Zo toon je dat je niet alleen losse woorden kent, maar ook relaties met financiële markten en instellingen.

## Formules en rekenfocus

- `Call payoff = max(S_T-K,0)`
- `Put payoff = max(K-S_T,0)`
- `Profit = payoff - paid premium + received premium`

!!! warning "Veelgemaakte fouten"
    - Alleen een definitie geven zonder relatie met markten of instellingen.
    - Een formule gebruiken zonder te zeggen welke renteconventie of periode gebruikt wordt.
    - Payoff en profit verwarren bij opties.
    - Ratings, indexgewichten of ordertypes uit het hoofd kennen maar niet kunnen toepassen.

## Begrippenlijst per unit

| Begrip | English term | Definitie | Examenbelang | Gelinkt aan |
| --- | --- | --- | --- | --- |
| option | option | Recht, geen verplichting, om onderliggende waarde te kopen of verkopen. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 7 — Options. | call; put |
| call option | call option | Recht om te kopen tegen uitoefenprijs. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 7 — Options. | options payoff |
| put option | put option | Recht om te verkopen tegen uitoefenprijs. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 7 — Options. | protective put |
| strike price | strike price | Prijs waartegen optie mag worden uitgeoefend. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 7 — Options. | moneyness |
| premium | premium | Prijs die betaald wordt voor de optie. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 7 — Options. | profit vs payoff |
| payoff | payoff | Waarde van optie op vervaldag vóór premie. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 7 — Options. | profit |
| profit | profit | Payoff min betaalde premie of plus ontvangen premie. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 7 — Options. | break-even |
| break-even | break-even | Onderliggende prijs waarbij totale winst nul is. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 7 — Options. | option exercises |
| long call | long call | Koop van call: winstpotentieel bij stijging, verlies beperkt tot premie. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 7 — Options. | call option |
| short call | short call | Schrijven van call: premie ontvangen, mogelijk groot verlies bij stijging. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 7 — Options. | options risk |
| long put | long put | Koop van put: bescherming of winst bij daling. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 7 — Options. | put option |
| short put | short put | Schrijven van put: premie ontvangen, verlies bij daling. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 7 — Options. | options risk |
| protective put | protective put | Aandeel plus put om neerwaarts risico te beperken. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 7 — Options. | hedging |
| covered call | covered call | Aandeel bezitten en call schrijven tegen premie. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 7 — Options. | income strategy |

## Voorbeeldvragen met korte modelantwoorden

??? question "Wat is het verschil tussen payoff en profit?"
    **Kort modelantwoord:** Payoff is waarde op einddatum vóór premie; profit houdt premies mee in rekening.
??? question "Hoe vind je break-even?"
    **Kort modelantwoord:** Schrijf totale profit als functie van S_T en zet die gelijk aan nul.

## Link met andere units

- **Unit 1** levert het basisschema: actoren, markten, intermediairs en balanslogica.
- **Units 2–4** leveren waardering van geldmarkt-, obligatie- en aandeleninstrumenten.
- **Units 5–7** leveren risico, portfolio en derivaten.
- **Units 9–12** verklaren banking, crisis, regulation en supervision.

!!! tip "Studietip"
    Leer elk begrip actief: dek de definitie af, zeg hardop een voorbeeld, en leg daarna de link met minstens één andere unit.

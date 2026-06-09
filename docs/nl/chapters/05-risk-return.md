> **Nederlandse variant** — Dit is de hoofdversie voor het studeren. Gebruik de Engelse variant vooral om Engelse vaktermen te herkennen.

# Unit 5 — Risk and Return

!!! abstract "Kernzin"

    Rendement is de beloning voor risico, maar niet elk risico wordt even beloond. Diversificatie vermindert specifiek risico.

## 1. Return

Return meet hoeveel een belegging opbrengt tegenover de initiële investering. Bij meerdere jaren gebruik je compound growth.

$$V_T=V_0(1+r_1)(1+r_2)...(1+r_T)$$

De jaarlijkse groeivoet is de rate die startwaarde omzet naar eindwaarde.

## 2. Risk

Risk betekent onzekerheid over toekomstige uitkomsten. In financiële markten wordt risico vaak gemeten met variance en standard deviation.

- **Variance**: gemiddelde kwadratische afwijking van het gemiddelde.
- **Standard deviation / volatility**: wortel van variance.

## 3. Arithmetic average versus growth rate

De arithmetic average is het gewone gemiddelde van returns. De growth rate houdt rekening met compounding en is meestal lager bij volatiliteit.

!!! warning "Examenvalkuil"

    Een gemiddelde return van +50% en -50% is 0%, maar je kapitaal gaat van 100 naar 150 en daarna naar 75. Je eindigt dus met verlies.

## 4. Portfolio theory

Een portfolio combineert assets. Het verwachte rendement is het gewogen gemiddelde:

$$E(r_p)=w_AE(r_A)+w_BE(r_B)$$

De variantie hangt ook af van correlatie:

$$\sigma_p^2=w_A^2\sigma_A^2+w_B^2\sigma_B^2+2w_Aw_B\sigma_A\sigma_B\rho_{AB}$$

Lage of negatieve correlatie verlaagt portfolio risk.

## 5. Diversification

Diversificatie werkt omdat niet alle assets tegelijk op dezelfde manier bewegen. Als correlatie lager is dan 1, kan een portfolio minder risicovol zijn dan het gewogen gemiddelde van individuele risico's.

## Examenfocus

Je moet kunnen uitleggen dat portfolio risk niet alleen afhangt van individuele volatilities, maar ook van correlaties. Dat is de kern van diversificatie.

---

## Examenaanvulling — toegevoegd zonder bestaande documentatie te verwijderen

!!! note "Niet-destructieve update"
    De oorspronkelijke documentatie hierboven is bewust behouden. Deze aanvulling voegt examenfocus, extra begrippen, modelantwoorden en veelgemaakte fouten toe zonder de bestaande uitleg te vervangen.

!!! abstract "Kernzin"
    Risk and Return meet rendement, volatiliteit en portefeuillediversificatie.

## Wat moet je kunnen op het examen?

- Bereken verwacht rendement als gewogen gemiddelde.
- Bereken portefeuillevolatiliteit met correlatie.
- Leg uit waarom correlatie onder +1 diversificatie oplevert.
- Vermijd verwarring tussen procent en decimaal.

## Kernmechanisme

Gebruik bij open vragen altijd deze structuur: **definitie → mechanisme → voorbeeld → gevolg/link met andere units**. Zo toon je dat je niet alleen losse woorden kent, maar ook relaties met financiële markten en instellingen.

## Formules en rekenfocus

- `E(R_p)=Σ w_iE(R_i)`
- `σ_p²=w_1²σ_1²+w_2²σ_2²+2w_1w_2ρσ_1σ_2`
- `Return=(P_1-P_0+income)/P_0`

!!! warning "Veelgemaakte fouten"
    - Alleen een definitie geven zonder relatie met markten of instellingen.
    - Een formule gebruiken zonder te zeggen welke renteconventie of periode gebruikt wordt.
    - Payoff en profit verwarren bij opties.
    - Ratings, indexgewichten of ordertypes uit het hoofd kennen maar niet kunnen toepassen.

## Begrippenlijst per unit

| Begrip | English term | Definitie | Examenbelang | Gelinkt aan |
| --- | --- | --- | --- | --- |
| return | return | Rendement als prijsverandering plus inkomen t.o.v. startwaarde. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 5 — Risk and Return. | risk |
| expected return | expected return | Gemiddeld verwacht rendement, vaak gewogen volgens kansen of portefeuillegewichten. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 5 — Risk and Return. | portfolio |
| risk | risk | Onzekerheid rond toekomstige rendementen. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 5 — Risk and Return. | volatility |
| variance | variance | Gemiddelde gekwadrateerde afwijking van het rendement. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 5 — Risk and Return. | standard deviation |
| volatility | volatility | Standaardafwijking van rendementen; maatstaf voor risico. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 5 — Risk and Return. | portfolio risk |
| covariance | covariance | Maat voor samenbeweging van twee rendementen. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 5 — Risk and Return. | correlation |
| correlation | correlation | Gestandaardiseerde samenhang tussen -1 en +1. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 5 — Risk and Return. | diversification |
| diversification | diversification | Risico verlagen door activa te combineren die niet perfect samen bewegen. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 5 — Risk and Return. | portfolio risk |
| portfolio risk | portfolio risk | Risico van gecombineerde portefeuille inclusief covariantie/correlatie. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 5 — Risk and Return. | volatility |
| asset allocation | asset allocation | Verdeling van portefeuille over activaklassen. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 5 — Risk and Return. | risk-return |
| systematic risk | systematic risk | Marktrisico dat niet weg te diversifiëren is. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 5 — Risk and Return. | beta |
| idiosyncratic risk | idiosyncratic risk | Specifiek risico dat door diversificatie kan dalen. | Kan als definitie, vergelijking of toepassing gevraagd worden in Unit 5 — Risk and Return. | diversification |

## Voorbeeldvragen met korte modelantwoorden

??? question "Waarom is correlatie belangrijk?"
    **Kort modelantwoord:** Ze bepaalt hoeveel risico wegvalt wanneer activa worden gecombineerd.
??? question "Wat gebeurt bij negatieve correlatie?"
    **Kort modelantwoord:** Portefeuillerisico kan sterk dalen omdat verliezen deels worden gecompenseerd.

## Link met andere units

- **Unit 1** levert het basisschema: actoren, markten, intermediairs en balanslogica.
- **Units 2–4** leveren waardering van geldmarkt-, obligatie- en aandeleninstrumenten.
- **Units 5–7** leveren risico, portfolio en derivaten.
- **Units 9–12** verklaren banking, crisis, regulation en supervision.

!!! tip "Studietip"
    Leer elk begrip actief: dek de definitie af, zeg hardop een voorbeeld, en leg daarna de link met minstens één andere unit.

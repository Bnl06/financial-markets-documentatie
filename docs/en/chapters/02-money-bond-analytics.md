> **English variant** — This page is prepared for GitBook Variants. Financial key terms are kept close to the course terminology. Always verify formulas and official definitions with the Dutch/original course version.

# Unit 2 — Money and Bond Analytics

!!! abstract "Core sentence"

    Unit 2 leert hoe geldwaarde door de tijd verandert: interest, inflatie, present value, future value, obligatieprijs en yield.

## 1. Nominale en reële interest

The nominal interest rate is the rate you see in contracts. The real interest rate corrects for expected inflation.

Exact Fisher relation:

$$1+r_{nominal}=(1+r_{real})(1+\pi^e)$$

Benadering:

$$r_{nominal}\approx r_{real}+\pi^e$$

!!! example "Example"

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

## Exam focus

Leg altijd uit of je simple interest, compounding of discounting gebruikt. Bij bonds moet je het verschil tussen **spot rates** en **yield to maturity** kunnen explain.

---

## Exam addendum — added without removing the existing documentation

!!! note "Non-destructive update"
    The original documentation above has deliberately been preserved. This addendum adds exam focus, extra terms, model answers and common mistakes without replacing the existing explanation.

!!! abstract "Core sentence"
    Money and Bond Analytics is about interest rates, time value of money and valuing cash flows.

## What should you be able to do on the exam?

- Choose exact or approximate Fisher depending on the question.
- Use simple interest for short-term money-market instruments.
- Use compounding and discounting for FV/PV, annuities and bonds.
- Solve YTM as an internal rate, often with Excel.

## Core mechanism

For open questions, use this structure: **definition → mechanism → example → consequence/link with other units**. This shows that you know relationships, not just isolated terms.

## Formulas and calculation focus

- `(1+r_nominal)=(1+r_real)(1+π^e)`
- `r_nominal ≈ r_real + π^e`
- `V_T = V_0(1+rT)`
- `V_T = V_0(1+r/m)^{mT}`
- `V_0 = V_T/(1+r)^T`
- `Bond price = sum of discounted coupons and principal`

!!! warning "Common mistakes"
    - Giving only a definition without linking it to markets or institutions.
    - Using a formula without stating the rate convention or time period.
    - Confusing payoff and profit for options.
    - Memorising ratings, index weights or order types without being able to apply them.

## Terms by unit

| Term | Dutch term | Definition | Exam relevance | Related to |
| --- | --- | --- | --- | --- |
| time value of money | time value of money | Principle that money today is worth more than the same amount later. | Can be asked as a definition, comparison or application in Unit 2 — Money and Bond Analytics. | PV; FV |
| nominal interest rate | nominal interest rate | Interest rate not adjusted for inflation. | Can be asked as a definition, comparison or application in Unit 2 — Money and Bond Analytics. | Fisher relation |
| real interest rate | real interest rate | Interest rate adjusted for expected inflation. | Can be asked as a definition, comparison or application in Unit 2 — Money and Bond Analytics. | Fisher relation |
| expected inflation | expected inflation | Expected inflation over the instrument maturity. | Can be asked as a definition, comparison or application in Unit 2 — Money and Bond Analytics. | Fisher relation |
| Fisher relation | Fisher relation | Exact relation: (1+nominal rate)=(1+real rate)(1+expected inflation). | Can be asked as a definition, comparison or application in Unit 2 — Money and Bond Analytics. | inflation; bond yields |
| simple interest | simple interest | Linear interest accrual: Vt = V0(1+rT). | Can be asked as a definition, comparison or application in Unit 2 — Money and Bond Analytics. | T-bills; money market |
| compound interest | compound interest | Interest-on-interest where interest is capitalised. | Can be asked as a definition, comparison or application in Unit 2 — Money and Bond Analytics. | future value |
| future value | future value | Value at a future date after compounding. | Can be asked as a definition, comparison or application in Unit 2 — Money and Bond Analytics. | compounding |
| present value | present value | Current value of a future cash flow by discounting. | Can be asked as a definition, comparison or application in Unit 2 — Money and Bond Analytics. | bond pricing |
| discounting | discounting | Converting a future value to today. | Can be asked as a definition, comparison or application in Unit 2 — Money and Bond Analytics. | PV |
| annuity | annuity | Series of equal payments at fixed times. | Can be asked as a definition, comparison or application in Unit 2 — Money and Bond Analytics. | loan payments |
| perpetuity | perpetuity | Infinite series of equal cash flows. | Can be asked as a definition, comparison or application in Unit 2 — Money and Bond Analytics. | DDM |
| growing perpetuity | growing perpetuity | Infinite cash-flow stream growing at a constant rate. | Can be asked as a definition, comparison or application in Unit 2 — Money and Bond Analytics. | Gordon model |
| spot rate | spot rate | Rate for a zero-coupon cash flow at a specific maturity. | Can be asked as a definition, comparison or application in Unit 2 — Money and Bond Analytics. | term structure |
| yield to maturity | yield to maturity | Internal rate equating bond price to PV of its cash flows. | Can be asked as a definition, comparison or application in Unit 2 — Money and Bond Analytics. | bond pricing |
| coupon | coupon | Periodic interest payment on a bond. | Can be asked as a definition, comparison or application in Unit 2 — Money and Bond Analytics. | bond cashflows |
| face value | face value | Nominal amount repaid at maturity. | Can be asked as a definition, comparison or application in Unit 2 — Money and Bond Analytics. | bonds |
| bond price | bond price | Sum of discounted coupons and principal. | Can be asked as a definition, comparison or application in Unit 2 — Money and Bond Analytics. | YTM; spot rates |
| basis point | basis point | One hundredth of one percentage point: 0.01%. | Can be asked as a definition, comparison or application in Unit 2 — Money and Bond Analytics. | rates |
| day count convention | day count convention | Rule for converting days into year fractions, e.g. ACT/360. | Can be asked as a definition, comparison or application in Unit 2 — Money and Bond Analytics. | T-bills |

## Sample questions with short model answers

??? question "Bereken FV/PV en noteer welke renteconventie je gebruikt."
    **Short model answer:** Punten krijg je voor tijdslijn, juiste formule, juiste periodieke rente en eenheden.
??? question "Why is YTM niet hetzelfde als coupon?"
    **Short model answer:** Coupon bepaalt cashflows; YTM is de disconteringsvoet die de prijs verklaart.

## Links with other units

- **Unit 1** provides the basic map: actors, markets, intermediaries and balance-sheet logic.
- **Units 2–4** provide valuation for money-market, bond and equity instruments.
- **Units 5–7** provide risk, portfolio and derivatives logic.
- **Units 9–12** explain banking, crisis, regulation and supervision.

!!! tip "Study tip"
    Learn each term actively: cover the definition, say an example out loud, then connect it to at least one other unit.

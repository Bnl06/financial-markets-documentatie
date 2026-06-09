> **English variant** — This page is prepared for GitBook Variants. Financial key terms are kept close to the course terminology. Always verify formulas and official definitions with the Dutch/original course version.

# Unit 7 — Derivatives: Options

!!! abstract "Core sentence"

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

## Exam focus

Je moet kunnen explain waarom een optie asymmetrisch is. De koper heeft beperkt verlies tot de premium, maar mogelijke winst kan groter zijn. De schrijver heeft het omgekeerde profiel.

---

## Exam addendum — added without removing the existing documentation

!!! note "Non-destructive update"
    The original documentation above has deliberately been preserved. This addendum adds exam focus, extra terms, model answers and common mistakes without replacing the existing explanation.

!!! abstract "Core sentence"
    Options combine rights, premiums, payoffs and break-even points; payoff and profit are not the same.

## What should you be able to do on the exam?

- Build payoff tables for long/short calls and puts.
- Compute break-even by setting total profit equal to zero.
- Watch premium signs: paid is minus, received is plus.
- Use options for protection or speculation.

## Core mechanism

For open questions, use this structure: **definition → mechanism → example → consequence/link with other units**. This shows that you know relationships, not just isolated terms.

## Formulas and calculation focus

- `Call payoff = max(S_T-K,0)`
- `Put payoff = max(K-S_T,0)`
- `Profit = payoff - paid premium + received premium`

!!! warning "Common mistakes"
    - Giving only a definition without linking it to markets or institutions.
    - Using a formula without stating the rate convention or time period.
    - Confusing payoff and profit for options.
    - Memorising ratings, index weights or order types without being able to apply them.

## Terms by unit

| Term | Dutch term | Definition | Exam relevance | Related to |
| --- | --- | --- | --- | --- |
| option | option | Right, not obligation, to buy or sell an underlying asset. | Can be asked as a definition, comparison or application in Unit 7 — Options. | call; put |
| call option | call option | Right to buy at the strike price. | Can be asked as a definition, comparison or application in Unit 7 — Options. | options payoff |
| put option | put option | Right to sell at the strike price. | Can be asked as a definition, comparison or application in Unit 7 — Options. | protective put |
| strike price | strike price | Price at which the option may be exercised. | Can be asked as a definition, comparison or application in Unit 7 — Options. | moneyness |
| premium | premium | Price paid for the option. | Can be asked as a definition, comparison or application in Unit 7 — Options. | profit vs payoff |
| payoff | payoff | Option value at maturity before premium. | Can be asked as a definition, comparison or application in Unit 7 — Options. | profit |
| profit | profit | Payoff minus paid premium or plus received premium. | Can be asked as a definition, comparison or application in Unit 7 — Options. | break-even |
| break-even | break-even | Underlying price where total profit equals zero. | Can be asked as a definition, comparison or application in Unit 7 — Options. | option exercises |
| long call | long call | Buying a call: upside potential, loss limited to premium. | Can be asked as a definition, comparison or application in Unit 7 — Options. | call option |
| short call | short call | Writing a call: receive premium, potential large loss when price rises. | Can be asked as a definition, comparison or application in Unit 7 — Options. | options risk |
| long put | long put | Buying a put: protection or gain when price falls. | Can be asked as a definition, comparison or application in Unit 7 — Options. | put option |
| short put | short put | Writing a put: receive premium, loss when price falls. | Can be asked as a definition, comparison or application in Unit 7 — Options. | options risk |
| protective put | protective put | Stock plus put to limit downside risk. | Can be asked as a definition, comparison or application in Unit 7 — Options. | hedging |
| covered call | covered call | Holding the stock and writing a call for premium. | Can be asked as a definition, comparison or application in Unit 7 — Options. | income strategy |

## Sample questions with short model answers

??? question "Wat is het verschil tussen payoff en profit?"
    **Short model answer:** Payoff is waarde op einddatum vóór premie; profit houdt premies mee in rekening.
??? question "Hoe vind je break-even?"
    **Short model answer:** Schrijf totale profit als functie van S_T en zet die gelijk aan nul.

## Links with other units

- **Unit 1** provides the basic map: actors, markets, intermediaries and balance-sheet logic.
- **Units 2–4** provide valuation for money-market, bond and equity instruments.
- **Units 5–7** provide risk, portfolio and derivatives logic.
- **Units 9–12** explain banking, crisis, regulation and supervision.

!!! tip "Study tip"
    Learn each term actively: cover the definition, say an example out loud, then connect it to at least one other unit.

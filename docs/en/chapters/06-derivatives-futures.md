> **English variant** — This page is prepared for GitBook Variants. Financial key terms are kept close to the course terminology. Always verify formulas and official definitions with the Dutch/original course version.

# Unit 6 — Derivatives: Forwards, Futures and Swaps

!!! abstract "Core sentence"

    Derivaten halen hun waarde uit een onderliggende waarde. Ze worden gebruikt voor hedging, speculatie en arbitrage.

## 1. Derivative

Een derivative is een contract waarvan de waarde afhangt van een underlying asset, zoals een share, rente, valuta of commodity.

## 2. Forward contract

Een forward is een overeenkomst vandaag om in de toekomst een asset te kopen of verkopen tegen een vooraf bepaalde prijs. Het contract is meestal OTC en maatwerk.

Arbitrage-free forward price without income:

$$F=S(1+r)^T$$

Example: spot price = 250, interest = 2,3%, maturity = 1 jaar.

$$F=250(1.023)=255.75$$

## 3. Futures

Een future lijkt op een forward, maar is gestandaardiseerd en wordt verhandeld op een beurs. Futures hebben marking-to-market en margin requirements, waardoor counterparty risk lager is dan bij forwards.

## 4. Hedging met futures

A company facing future uncertainty can use futures to lock in a price. For example, an importer that will need dollars later can use currency futures to reduce exchange-rate risk.

## 5. Swaps

A swap is a contract in which parties exchange cash flows. A well-known example is an interest rate swap, where fixed interest is exchanged for floating interest.

## 6. Arbitrage

Arbitrage is profit without risk and without net investment. In efficient markets, arbitrage opportunities disappear quickly because traders exploit them.

## Exam focus

Leg het verschil uit tussen hedging en speculatie. Bij hedging gebruik je derivaten om een bestaand risk te verminderen. Bij speculatie neem je juist risk om winst te maken.

---

## Exam addendum — added without removing the existing documentation

!!! note "Non-destructive update"
    The original documentation above has deliberately been preserved. This addendum adds exam focus, extra terms, model answers and common mistakes without replacing the existing explanation.

!!! abstract "Core sentence"
    Forwards, futures and swaps allow hedging or speculation on future prices.

## What should you be able to do on the exam?

- Compare an OTC forward with an exchange-traded future.
- Explain long versus short.
- Compute forward price and payoff.
- Connect margin, clearing house and marking-to-market to risk management.

## Core mechanism

For open questions, use this structure: **definition → mechanism → example → consequence/link with other units**. This shows that you know relationships, not just isolated terms.

## Formulas and calculation focus

- `Forward price ≈ S_0(1+r)^T`
- `Long forward payoff = S_T - K`
- `Short forward payoff = K - S_T`

!!! warning "Common mistakes"
    - Giving only a definition without linking it to markets or institutions.
    - Using a formula without stating the rate convention or time period.
    - Confusing payoff and profit for options.
    - Memorising ratings, index weights or order types without being able to apply them.

## Terms by unit

| Term | Dutch term | Definition | Exam relevance | Related to |
| --- | --- | --- | --- | --- |
| derivative | derivative | Financial contract whose value depends on an underlying asset. | Can be asked as a definition, comparison or application in Unit 6 — Forwards, Futures and Swaps. | futures; options |
| underlying asset | underlying asset | Asset on which a derivative is based. | Can be asked as a definition, comparison or application in Unit 6 — Forwards, Futures and Swaps. | derivatives |
| forward contract | forward contract | OTC agreement to buy/sell later at a price set today. | Can be asked as a definition, comparison or application in Unit 6 — Forwards, Futures and Swaps. | forward price |
| futures contract | future contract | Standardised exchange-traded contract with daily settlement. | Can be asked as a definition, comparison or application in Unit 6 — Forwards, Futures and Swaps. | marking-to-market |
| forward price | forward price | Theoretical future delivery price, often S0(1+r)^T without income/storage. | Can be asked as a definition, comparison or application in Unit 6 — Forwards, Futures and Swaps. | cost of carry |
| long position | long position | Position benefiting from an increase in the underlying price. | Can be asked as a definition, comparison or application in Unit 6 — Forwards, Futures and Swaps. | payoff |
| short position | short position | Position benefiting from a decrease in the underlying price. | Can be asked as a definition, comparison or application in Unit 6 — Forwards, Futures and Swaps. | payoff |
| marking-to-market | marking-to-market | Daily settlement of gains and losses on futures. | Can be asked as a definition, comparison or application in Unit 6 — Forwards, Futures and Swaps. | margin account |
| margin | margin | Collateral deposit guaranteeing futures obligations. | Can be asked as a definition, comparison or application in Unit 6 — Forwards, Futures and Swaps. | clearing house |
| clearing house | clearing house | Institution managing counterparty risk in exchange-traded derivatives. | Can be asked as a definition, comparison or application in Unit 6 — Forwards, Futures and Swaps. | futures |
| swap | swap | Contract to exchange future cash flows. | Can be asked as a definition, comparison or application in Unit 6 — Forwards, Futures and Swaps. | interest rate swap |
| hedging | hedging | Reducing risk with an offsetting position. | Can be asked as a definition, comparison or application in Unit 6 — Forwards, Futures and Swaps. | derivatives |
| speculation | speculation | Taking a position to profit from expected price movements. | Can be asked as a definition, comparison or application in Unit 6 — Forwards, Futures and Swaps. | risk |

## Sample questions with short model answers

??? question "Why heeft een future minder tegenpartijrisico dan een forward?"
    **Short model answer:** Door standaardisatie, clearing house, margins en dagelijkse afrekening.
??? question "Wanneer gebruik je hedging?"
    **Short model answer:** Wanneer je een bestaand prijs-, rente- of valutarisico wil verminderen.

## Links with other units

- **Unit 1** provides the basic map: actors, markets, intermediaries and balance-sheet logic.
- **Units 2–4** provide valuation for money-market, bond and equity instruments.
- **Units 5–7** provide risk, portfolio and derivatives logic.
- **Units 9–12** explain banking, crisis, regulation and supervision.

!!! tip "Study tip"
    Learn each term actively: cover the definition, say an example out loud, then connect it to at least one other unit.

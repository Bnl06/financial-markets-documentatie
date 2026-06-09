> **English variant** — This page is prepared for GitBook Variants. Financial key terms are kept close to the course terminology. Always verify formulas and official definitions with the Dutch/original course version.

# Unit 5 — Risk and Return

!!! abstract "Core sentence"

    Rendement is de beloning voor risk, maar niet elk risk wordt even beloond. Diversificatie vermindert specifiek risk.

## 1. Return

Return meet hoeveel een belegging opbrengt tegenover de initiële investering. Bij meerdere jaren gebruik je compound growth.

$$V_T=V_0(1+r_1)(1+r_2)...(1+r_T)$$

De jaarlijkse groeivoet is de rate die startwaarde omzet naar eindwaarde.

## 2. Risk

Risk betekent onzekerheid over toekomstige uitkomsten. In financial markets wordt risk vaak gemeten met variance en standard deviation.

- **Variance**: gemiddelde kwadratische afwijking van het gemiddelde.
- **Standard deviation / volatility**: wortel van variance.

## 3. Arithmetic average versus growth rate

De arithmetic average is het gewone gemiddelde van returns. De growth rate houdt rekening met compounding en is meestal lager bij volatiliteit.

!!! warning "Exam pitfall"

    Een gemiddelde return van +50% en -50% is 0%, maar je kapitaal gaat van 100 naar 150 en daarna naar 75. Je eindigt dus met verlies.

## 4. Portfolio theory

A portfolio combines assets. The expected return is the weighted average:

$$E(r_p)=w_AE(r_A)+w_BE(r_B)$$

De variantie hangt ook af van correlatie:

$$\sigma_p^2=w_A^2\sigma_A^2+w_B^2\sigma_B^2+2w_Aw_B\sigma_A\sigma_B\rho_{AB}$$

Lage of negatieve correlatie verlaagt portfolio risk.

## 5. Diversification

Diversificatie werkt omdat niet alle assets tegelijk op dezelfde manier bewegen. Als correlatie lager is dan 1, kan een portfolio minder riskvol zijn dan het gewogen gemiddelde van individuele risk's.

## Exam focus

Je moet kunnen explain dat portfolio risk niet alleen afhangt van individuele volatilities, maar ook van correlaties. Dat is de kern van diversificatie.

---

## Exam addendum — added without removing the existing documentation

!!! note "Non-destructive update"
    The original documentation above has deliberately been preserved. This addendum adds exam focus, extra terms, model answers and common mistakes without replacing the existing explanation.

!!! abstract "Core sentence"
    Risk and Return measures return, volatility and portfolio diversification.

## What should you be able to do on the exam?

- Compute expected return as a weighted average.
- Compute portfolio volatility using correlation.
- Explain why correlation below +1 creates diversification.
- Avoid confusing percentages and decimals.

## Core mechanism

For open questions, use this structure: **definition → mechanism → example → consequence/link with other units**. This shows that you know relationships, not just isolated terms.

## Formulas and calculation focus

- `E(R_p)=Σ w_iE(R_i)`
- `σ_p²=w_1²σ_1²+w_2²σ_2²+2w_1w_2ρσ_1σ_2`
- `Return=(P_1-P_0+income)/P_0`

!!! warning "Common mistakes"
    - Giving only a definition without linking it to markets or institutions.
    - Using a formula without stating the rate convention or time period.
    - Confusing payoff and profit for options.
    - Memorising ratings, index weights or order types without being able to apply them.

## Terms by unit

| Term | Dutch term | Definition | Exam relevance | Related to |
| --- | --- | --- | --- | --- |
| return | return | Gain as price change plus income relative to initial value. | Can be asked as a definition, comparison or application in Unit 5 — Risk and Return. | risk |
| expected return | expected return | Average expected return, often probability- or portfolio-weighted. | Can be asked as a definition, comparison or application in Unit 5 — Risk and Return. | portfolio |
| risk | risk | Uncertainty about future returns. | Can be asked as a definition, comparison or application in Unit 5 — Risk and Return. | volatility |
| variance | variance | Average squared deviation of returns. | Can be asked as a definition, comparison or application in Unit 5 — Risk and Return. | standard deviation |
| volatility | volatility | Standard deviation of returns; risk measure. | Can be asked as a definition, comparison or application in Unit 5 — Risk and Return. | portfolio risk |
| covariance | covariance | Measure of co-movement between two returns. | Can be asked as a definition, comparison or application in Unit 5 — Risk and Return. | correlation |
| correlation | correlation | Standardised relation between -1 and +1. | Can be asked as a definition, comparison or application in Unit 5 — Risk and Return. | diversification |
| diversification | diversification | Reducing risk by combining assets that do not move perfectly together. | Can be asked as a definition, comparison or application in Unit 5 — Risk and Return. | portfolio risk |
| portfolio risk | portfolio risk | Risk of combined portfolio including covariance/correlation. | Can be asked as a definition, comparison or application in Unit 5 — Risk and Return. | volatility |
| asset allocation | asset allocation | Distribution of a portfolio across asset classes. | Can be asked as a definition, comparison or application in Unit 5 — Risk and Return. | risk-return |
| systematic risk | systematic risk | Market-wide risk that cannot be diversified away. | Can be asked as a definition, comparison or application in Unit 5 — Risk and Return. | beta |
| idiosyncratic risk | idiosyncratic risk | Asset-specific risk that can be reduced by diversification. | Can be asked as a definition, comparison or application in Unit 5 — Risk and Return. | diversification |

## Sample questions with short model answers

??? question "Why is correlatie belangrijk?"
    **Short model answer:** Ze bepaalt hoeveel risico wegvalt wanneer activa worden gecombineerd.
??? question "Wat gebeurt bij negatieve correlatie?"
    **Short model answer:** Portefeuillerisico kan sterk dalen omdat verliezen deels worden gecompenseerd.

## Links with other units

- **Unit 1** provides the basic map: actors, markets, intermediaries and balance-sheet logic.
- **Units 2–4** provide valuation for money-market, bond and equity instruments.
- **Units 5–7** provide risk, portfolio and derivatives logic.
- **Units 9–12** explain banking, crisis, regulation and supervision.

!!! tip "Study tip"
    Learn each term actively: cover the definition, say an example out loud, then connect it to at least one other unit.

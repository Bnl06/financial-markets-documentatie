> **English variant** — This page is prepared for GitBook Variants. Financial key terms are kept close to the course terminology. Always verify formulas and official definitions with the Dutch/original course version.

# Unit 8 — All exercises uitgewerkt

!!! abstract "Aanpak"

    For each exercise: recognise the question type, choose the formula, fill in the numbers and interpret the result.

## Exercise 1 — Exact Fisher relation

**Question:** nominale 1-jaarsrente = 4,3%, reële rente = 0,5%. Gevraagde expected inflation.

Formula:

$$1+r_n=(1+r_r)(1+\pi^e)$$

Oplossen naar inflatie:

$$\pi^e=\frac{1+r_n}{1+r_r}-1$$

Invullen:

$$\pi^e=\frac{1.043}{1.005}-1=0.0378=3.78\%$$

**Explanation:** nominale rente bestaat uit real compensation plus inflatiecompensatie. Exact gebruik je de vermenigvuldiging, niet gewoon aftrekken.

## Exercise 2 — Fisher approximation

Nominale rente = 2,3%. Verwachte inflatie over de volgende 12 maanden = 2,7%.

$$r_{real}\approx r_{nominal}-\pi^e=2.3\%-2.7\%=-0.4\%$$

**Waarom expected inflation?** Omdat de obligatie over de toekomst loopt. Historische inflatie is niet de juiste input.

## Exercise 3 — Simple interest

Loan = €2.500, rente = 3,4% per jaar, maturity = 4 maanden.

$$V_T=V_0(1+rT)$$

$$V_T=2500(1+0.034\times\frac{4}{12})=2528.33$$

The borrower pays **€2.528,33** terug.

## Exercise 4 — T-bill with ACT/360

Face value = 100, rente = 1,2%, maturity = 0,572222 jaar.

Bij simple discounting:

$$V_0=\frac{V_T}{1+rT}$$

$$V_0=\frac{100}{1+0.012\times0.572222}=99.31802$$

**Excel:** `=YEARFRAC(DATE(2024,3,3),DATE(2024,9,25),2)` voor ACT/360.

## Exercise 5 — Time to double

€2.500 groeit naar €5.000 aan 3% annual compounding.

$$5000=2500(1.03)^T$$

$$T=\frac{\ln(5000/2500)}{\ln(1.03)}=23.45$$

It takes **23,45 jaar**.

## Exercise 6 — Semi-annual compounding

€3.000, 15 jaar, 4,5% p.a. semi-annual.

$$V_T=3000\left(1+\frac{0.045}{2}\right)^{15\times2}=5848.18$$

## Exercise 7 — Present value of one cash flow

€1.000 over 30 jaar, 7% annual compounding.

$$PV=\frac{1000}{(1.07)^{30}}=131.37$$

Interpretatie: bij 7% is €131,37 vandaag equivalent aan €1.000 over 30 jaar.

## Exercise 8 — Present value annuity

€1.000 per jaar, 10 jaar, interest = 2,5%.

$$PV=\frac{1000}{1.025}+\frac{1000}{1.025^2}+...+\frac{1000}{1.025^{10}}=8752.06$$

**Excel:** `=PV(2.5%,10,1000)` geeft hetzelfde bedrag met negatief teken door Excel-cashflowconventie.

## Exercise 9 — Coupon bond price

2-jarige bond, coupon 3%, face value 100, spot rates: 5% en 5,7%.

Cashflows: jaar 1 = 3, jaar 2 = 103.

$$P=\frac{3}{1.05}+\frac{103}{(1.057)^2}=2.86+92.19=95.05$$

**Important:** gebruik voor elke maturity de bijhorende spot rate.

## Exercise 10 — Spot rate from T-bill price

T-bill price = 97,80, face value = 100, maturity = 10/12, annual compounding.

$$\frac{100}{(1+s)^{10/12}}=97.80$$

Oplossen geeft:

$$s=\left(\frac{100}{97.80}\right)^{12/10}-1=2.71\%$$

## Exercise 11 — Yield to maturity

Bond price = 103,25. 4-jarige 2%-coupon bond. Face value 100.

Vergelijking:

$$103.25=\frac{2}{1+y}+\frac{2}{(1+y)^2}+\frac{2}{(1+y)^3}+\frac{102}{(1+y)^4}$$

Dit los je op met Excel `IRR`: cashflows `-103.25, 2, 2, 2, 102`.

Antwoord: **1,164%**.

## Exercise 12 — Growing perpetuity

Dividend volgend jaar = 3, groei = 2%, required return = 10%.

$$V=\frac{CF_1}{r-g}=\frac{3}{0.10-0.02}=37.5$$

Waarde share = **€37,50**.

## Exercise 13 — Realised returns and growth rate

Startwaarde = €6.000. Returns: 3,4%, -7%, 5,7%, 12,45%.

Eindwaarde:

$$6000(1.034)(0.93)(1.057)(1.1245)=6857.87$$

Jaarlijkse groeivoet:

$$6000(1+r)^4=6857.87$$

$$r=\left(\frac{6857.87}{6000}\right)^{1/4}-1=3.40\%$$

## Exercise 14 — Historical returns

Te berekenen voor stocks, T-bills, Treasury Bonds, Corporate Bonds en Real Estate:

- arithmetic average: `=AVERAGE(range)`;
- growth rate: eindwaarde/startwaarde tot macht `1/n` min 1;
- minimum: `=MIN(range)`;
- maximum: `=MAX(range)`;
- variance sample: `=VAR.S(range)`;
- standard deviation: `=STDEV.S(range)`;
- covariance en correlation via Analysis ToolPak.

Resultaten uit de oplossing:

| Statistic | S&P 500 | T.Bills | T. Bonds | Corp. Bonds | Real Estate |
|---|---:|---:|---:|---:|---:|
| Arithmetic Average | 11.82% | 3.33% | 5.11% | 7.19% | 4.36% |
| Growth Rate | 9.98% | 3.28% | 4.84% | 6.93% | 4.18% |
| Minimum | -43.84% | 0.03% | -11.12% | -15.68% | -12.00% |
| Maximum | 52.56% | 14.03% | 32.81% | 29.05% | 24.10% |
| Variance | 0.03787129 | 0.00092273 | 0.00589805 | 0.00564278 | 0.00391376 |
| Standard dev | 19.46% | 3.04% | 7.68% | 7.51% | 6.26% |

## Exercise 15 — 50/50 portfolio

Stocks: expected return 11,82%, volatility 19,46%. Bonds: expected return 5,11%, volatility 7,68%. Correlation = -2%.

Expected return:

$$E(r_p)=0.5(11.82\%)+0.5(5.11\%)=8.465\%$$

Variance:

$$\sigma_p^2=0.5^2(19.46\%)^2+0.5^2(7.68\%)^2+2(0.5)(0.5)(19.46\%)(7.68\%)(-2\%)$$

$$\sigma_p^2=1.079\%$$

Volatility:

$$\sigma_p=\sqrt{1.079\%}=10.389\%$$

## Exercise 16 — Arbitrage-free forward price

Spot = 250, risk-free rate = 2,3%, maturity = 1 jaar.

$$F=S(1+r)^T=250(1.023)=255.75$$

## Exercise 17 — Call + short put break-even

Stock = 100. Long call strike 100, premium 3. Short put strike 100, premium 2.

Call profit:

$$\max(0,S_T-100)-3$$

Short put profit:

$$-\max(0,100-S_T)+2$$

Net premium = -3 + 2 = -1. Break-even wanneer totale payoff 1 is. Dat gebeurt bij:

$$S_T=101$$

Dan is de call 1 waard, de put 0, en de netto premiumkost is 1.

---

## Exam addendum — added without removing the existing documentation

!!! note "Non-destructive update"
    The original documentation above has deliberately been preserved. This addendum adds exam focus, extra terms, model answers and common mistakes without replacing the existing explanation.

This page collects exam-focused exercises. Try them first, then check the approach.

| Exercise | Core idea | Answer / approach |
|---|---|---|
| Exact Fisher | Nominal 4.3%, real 0.5% | Expected inflation = 3.78%. |
| Approximate Fisher | Nominal 2.3%, expected inflation 2.7% | Real rate ≈ -0.4%. |
| Simple interest | €2,500, 3.4%, 4 months | €2,528.33. |
| T-bill ACT/360 | Price per 100 at 1.2% | `100/(1+0.012*T)`. |
| Compounding | €3,000, 15 years, 4.5% semiannual | €5,848.18. |
| PV | €1,000 in 30 years at 7% | €131.37. |
| Annuity | €1,000 per year, 10 years, 2.5% | €8,752.06. |
| Bond pricing | Discount coupons + principal | Use spot rates per cash flow. |
| Gordon | D1=3, r=10%, g=2% | 37.5. |
| Portfolio | Weights, vols, correlation | Use variance formula and square root. |
| Forward | S0=250, r=2.3%, 1 year | 255.75. |
| Option break-even | Long put + short call | Set total profit = 0. |

!!! tip "Exam approach"
    Always write: given data, formula, filled-in formula, answer with unit/percentage.

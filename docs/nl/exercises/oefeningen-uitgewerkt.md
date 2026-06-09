> **Nederlandse variant** — Dit is de hoofdversie voor het studeren. Gebruik de Engelse variant vooral om Engelse vaktermen te herkennen.

# Unit 8 — Alle oefeningen uitgewerkt

!!! abstract "Aanpak"

    Bij elke oefening: herken het type vraag, kies de formule, vul in en interpreteer het resultaat.

## Oefening 1 — Exacte Fisher-relatie

**Vraag:** nominale 1-jaarsrente = 4,3%, reële rente = 0,5%. Gevraagde verwachte inflatie.

Formule:

$$1+r_n=(1+r_r)(1+\pi^e)$$

Oplossen naar inflatie:

$$\pi^e=\frac{1+r_n}{1+r_r}-1$$

Invullen:

$$\pi^e=\frac{1.043}{1.005}-1=0.0378=3.78\%$$

**Uitleg:** nominale rente bestaat uit reële vergoeding plus inflatiecompensatie. Exact gebruik je de vermenigvuldiging, niet gewoon aftrekken.

## Oefening 2 — Fisher-benadering

Nominale rente = 2,3%. Verwachte inflatie over de volgende 12 maanden = 2,7%.

$$r_{real}\approx r_{nominal}-\pi^e=2.3\%-2.7\%=-0.4\%$$

**Waarom verwachte inflatie?** Omdat de obligatie over de toekomst loopt. Historische inflatie is niet de juiste input.

## Oefening 3 — Simple interest

Loan = €2.500, rente = 3,4% per jaar, maturity = 4 maanden.

$$V_T=V_0(1+rT)$$

$$V_T=2500(1+0.034\times\frac{4}{12})=2528.33$$

De borrower betaalt **€2.528,33** terug.

## Oefening 4 — T-bill met ACT/360

Face value = 100, rente = 1,2%, maturity = 0,572222 jaar.

Bij simple discounting:

$$V_0=\frac{V_T}{1+rT}$$

$$V_0=\frac{100}{1+0.012\times0.572222}=99.31802$$

**Excel:** `=YEARFRAC(DATE(2024,3,3),DATE(2024,9,25),2)` voor ACT/360.

## Oefening 5 — Tijd tot verdubbeling

€2.500 groeit naar €5.000 aan 3% annual compounding.

$$5000=2500(1.03)^T$$

$$T=\frac{\ln(5000/2500)}{\ln(1.03)}=23.45$$

Het duurt **23,45 jaar**.

## Oefening 6 — Semi-annual compounding

€3.000, 15 jaar, 4,5% p.a. semi-annual.

$$V_T=3000\left(1+\frac{0.045}{2}\right)^{15\times2}=5848.18$$

## Oefening 7 — Present value van één cashflow

€1.000 over 30 jaar, 7% annual compounding.

$$PV=\frac{1000}{(1.07)^{30}}=131.37$$

Interpretatie: bij 7% is €131,37 vandaag equivalent aan €1.000 over 30 jaar.

## Oefening 8 — Present value annuity

€1.000 per jaar, 10 jaar, interest = 2,5%.

$$PV=\frac{1000}{1.025}+\frac{1000}{1.025^2}+...+\frac{1000}{1.025^{10}}=8752.06$$

**Excel:** `=PV(2.5%,10,1000)` geeft hetzelfde bedrag met negatief teken door Excel-cashflowconventie.

## Oefening 9 — Coupon bond prijs

2-jarige bond, coupon 3%, face value 100, spot rates: 5% en 5,7%.

Cashflows: jaar 1 = 3, jaar 2 = 103.

$$P=\frac{3}{1.05}+\frac{103}{(1.057)^2}=2.86+92.19=95.05$$

**Belangrijk:** gebruik voor elke maturity de bijhorende spot rate.

## Oefening 10 — Spot rate uit T-bill prijs

T-bill price = 97,80, face value = 100, maturity = 10/12, annual compounding.

$$\frac{100}{(1+s)^{10/12}}=97.80$$

Oplossen geeft:

$$s=\left(\frac{100}{97.80}\right)^{12/10}-1=2.71\%$$

## Oefening 11 — Yield to maturity

Bond price = 103,25. 4-jarige 2%-coupon bond. Face value 100.

Vergelijking:

$$103.25=\frac{2}{1+y}+\frac{2}{(1+y)^2}+\frac{2}{(1+y)^3}+\frac{102}{(1+y)^4}$$

Dit los je op met Excel `IRR`: cashflows `-103.25, 2, 2, 2, 102`.

Antwoord: **1,164%**.

## Oefening 12 — Growing perpetuity

Dividend volgend jaar = 3, groei = 2%, required return = 10%.

$$V=\frac{CF_1}{r-g}=\frac{3}{0.10-0.02}=37.5$$

Waarde aandeel = **€37,50**.

## Oefening 13 — Realised returns en growth rate

Startwaarde = €6.000. Returns: 3,4%, -7%, 5,7%, 12,45%.

Eindwaarde:

$$6000(1.034)(0.93)(1.057)(1.1245)=6857.87$$

Jaarlijkse groeivoet:

$$6000(1+r)^4=6857.87$$

$$r=\left(\frac{6857.87}{6000}\right)^{1/4}-1=3.40\%$$

## Oefening 14 — Historical returns

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

## Oefening 15 — 50/50 portfolio

Stocks: expected return 11,82%, volatility 19,46%. Bonds: expected return 5,11%, volatility 7,68%. Correlation = -2%.

Expected return:

$$E(r_p)=0.5(11.82\%)+0.5(5.11\%)=8.465\%$$

Variance:

$$\sigma_p^2=0.5^2(19.46\%)^2+0.5^2(7.68\%)^2+2(0.5)(0.5)(19.46\%)(7.68\%)(-2\%)$$

$$\sigma_p^2=1.079\%$$

Volatility:

$$\sigma_p=\sqrt{1.079\%}=10.389\%$$

## Oefening 16 — Arbitragevrije forward price

Spot = 250, risk-free rate = 2,3%, maturity = 1 jaar.

$$F=S(1+r)^T=250(1.023)=255.75$$

## Oefening 17 — Call + short put break-even

Stock = 100. Long call strike 100, premium 3. Short put strike 100, premium 2.

Call profit:

$$\max(0,S_T-100)-3$$

Short put profit:

$$-\max(0,100-S_T)+2$$

Net premium = -3 + 2 = -1. Break-even wanneer totale payoff 1 is. Dat gebeurt bij:

$$S_T=101$$

Dan is de call 1 waard, de put 0, en de netto premiumkost is 1.

---

## Examenaanvulling — toegevoegd zonder bestaande documentatie te verwijderen

!!! note "Niet-destructieve update"
    De oorspronkelijke documentatie hierboven is bewust behouden. Deze aanvulling voegt examenfocus, extra begrippen, modelantwoorden en veelgemaakte fouten toe zonder de bestaande uitleg te vervangen.

Deze pagina bundelt de examengerichte oefeningen. Maak eerst zelf, kijk daarna naar de aanpak.

| Oefening | Kern | Antwoord / aanpak |
|---|---|---|
| Fisher exact | Nominaal 4,3%, real 0,5% | Verwachte inflatie = 3,78%. |
| Fisher approximate | Nominaal 2,3%, verwachte inflatie 2,7% | Reële rente ≈ -0,4%. |
| Simple interest | €2.500, 3,4%, 4 maanden | €2.528,33. |
| T-bill ACT/360 | Prijs per 100 bij 1,2% | `100/(1+0.012*T)`. |
| Compounding | €3.000, 15 jaar, 4,5% semiannual | €5.848,18. |
| PV | €1.000 binnen 30 jaar aan 7% | €131,37. |
| Annuity | €1.000 per jaar, 10 jaar, 2,5% | €8.752,06. |
| Bond pricing | Coupons + hoofdsom disconteren | Gebruik spot rates per cashflow. |
| Gordon | D1=3, r=10%, g=2% | 37,5. |
| Portfolio | Gewicht, vol, correlatie | Variantieformule en wortel nemen. |
| Forward | S0=250, r=2,3%, 1 jaar | 255,75. |
| Option break-even | Long put + short call | Zet totale profit = 0. |

!!! tip "Examenaanpak"
    Noteer altijd: gegeven data, formule, ingevulde formule, antwoord met eenheid/percentage.

> **English variant** — Checked against the course slide pack, the exercise solutions and the Dutch summary. Key financial terms follow the terminology used in *Introduction to Financial Markets*.

# Unit 8 — All worked exercises

!!! abstract "Approach"

    For every exercise: recognize the type of question, choose the formula, fill in the values and interpret the result.

## Exercise 1 — Exact Fisher relation

**Question:** nominal 1-year interest rate = 4.3%, real interest rate = 0.5%. Find the expected inflation rate.

Formula:

$$1+r_n=(1+r_r)(1+\pi^e)$$

Solve for inflation:

$$\pi^e=\frac{1+r_n}{1+r_r}-1$$

Fill in:

$$\pi^e=\frac{1.043}{1.005}-1=0.0378=3.78\%$$

**Explanation:** the nominal rate consists of real compensation plus inflation compensation. In the exact formula, you use multiplication, not just subtraction.

## Exercise 2 — Fisher approximation

Nominal interest rate = 2.3%. Expected inflation over the next 12 months = 2.7%.

$$r_{real}\approx r_{nominal}-\pi^e=2.3\%-2.7\%=-0.4\%$$

**Why expected inflation?** Because the bond runs over the future. Historical inflation is not the correct input.

## Exercise 3 — Simple interest

Loan = €2,500, interest rate = 3.4% per year, maturity = 4 months.

$$V_T=V_0(1+rT)$$

$$V_T=2500(1+0.034\times\frac{4}{12})=2528.33$$

The borrower repays **€2,528.33**.

## Exercise 4 — T-bill with ACT/360

Face value = 100, interest rate = 1.2%, maturity = 0.572222 years.

With simple discounting:

$$V_0=\frac{V_T}{1+rT}$$

$$V_0=\frac{100}{1+0.012\times0.572222}=99.31802$$

**Excel:** `=YEARFRAC(DATE(2024,3,3),DATE(2024,9,25),2)` for ACT/360.

## Exercise 5 — Time until doubling

€2,500 grows to €5,000 at 3% annual compounding.

$$5000=2500(1.03)^T$$

$$T=\frac{\ln(5000/2500)}{\ln(1.03)}=23.45$$

It takes **23.45 years**.

## Exercise 6 — Semi-annual compounding

€3,000, 15 years, 4.5% p.a. semi-annual compounding.

$$V_T=3000\left(1+\frac{0.045}{2}\right)^{15\times2}=5848.18$$

## Exercise 7 — Present value of one cash flow

€1,000 in 30 years, 7% annual compounding.

$$PV=\frac{1000}{(1.07)^{30}}=131.37$$

Interpretation: at 7%, €131.37 today is equivalent to €1,000 in 30 years.

## Exercise 8 — Present value annuity

€1,000 per year, 10 years, interest rate = 2.5%.

$$PV=\frac{1000}{1.025}+\frac{1000}{1.025^2}+...+\frac{1000}{1.025^{10}}=8752.06$$

**Excel:** `=PV(2.5%,10,1000)` gives the same amount with a negative sign because of Excel's cash-flow convention.

## Exercise 9 — Coupon bond price

2-year bond, coupon 3%, face value 100, spot rates: 5% and 5.7%.

Cash flows: year 1 = 3, year 2 = 103.

$$P=\frac{3}{1.05}+\frac{103}{(1.057)^2}=2.86+92.19=95.05$$

**Important:** use the corresponding spot rate for each maturity.

## Exercise 10 — Spot rate from T-bill price

T-bill price = 97.80, face value = 100, maturity = 10/12, annual compounding.

$$\frac{100}{(1+s)^{10/12}}=97.80$$

Solving gives:

$$s=\left(\frac{100}{97.80}\right)^{12/10}-1=2.71\%$$

## Exercise 11 — Yield to maturity

Bond price = 103.25. 4-year 2%-coupon bond. Face value 100.

Equation:

$$103.25=\frac{2}{1+y}+\frac{2}{(1+y)^2}+\frac{2}{(1+y)^3}+\frac{102}{(1+y)^4}$$

Solve this with Excel `IRR`: cash flows `-103.25, 2, 2, 2, 102`.

Answer: **1.164%**.

## Exercise 12 — Growing perpetuity

Dividend next year = 3, growth = 2%, required return = 10%.

$$V=\frac{CF_1}{r-g}=\frac{3}{0.10-0.02}=37.5$$

Stock value = **€37.50**.

## Exercise 13 — Realised returns and growth rate

Starting value = €6,000. Returns: 3.4%, -7%, 5.7%, 12.45%.

Ending value:

$$6000(1.034)(0.93)(1.057)(1.1245)=6857.87$$

Annual growth rate:

$$6000(1+r)^4=6857.87$$

$$r=\left(\frac{6857.87}{6000}\right)^{1/4}-1=3.40\%$$

## Exercise 14 — Historical returns

Compute for stocks, T-bills, Treasury Bonds, Corporate Bonds and Real Estate:

- arithmetic average: `=AVERAGE(range)`;
- growth rate: ending value/starting value to the power `1/n` minus 1;
- minimum: `=MIN(range)`;
- maximum: `=MAX(range)`;
- sample variance: `=VAR.S(range)`;
- standard deviation: `=STDEV.S(range)`;
- covariance and correlation via Analysis ToolPak.

Results from the solution:

| Statistic | S&P 500 | T.Bills | T. Bonds | Corp. Bonds | Real Estate |
|---|---:|---:|---:|---:|---:|
| Arithmetic Average | 11.82% | 3.33% | 5.11% | 7.19% | 4.36% |
| Growth Rate | 9.98% | 3.28% | 4.84% | 6.93% | 4.18% |
| Minimum | -43.84% | 0.03% | -11.12% | -15.68% | -12.00% |
| Maximum | 52.56% | 14.03% | 32.81% | 29.05% | 24.10% |
| Variance | 0.03787129 | 0.00092273 | 0.00589805 | 0.00564278 | 0.00391376 |
| Standard dev | 19.46% | 3.04% | 7.68% | 7.51% | 6.26% |

## Exercise 15 — 50/50 portfolio

Stocks: expected return 11.82%, volatility 19.46%. Bonds: expected return 5.11%, volatility 7.68%. Correlation = -2%.

Expected return:

$$E(r_p)=0.5(11.82\%)+0.5(5.11\%)=8.465\%$$

Variance:

$$\sigma_p^2=0.5^2(19.46\%)^2+0.5^2(7.68\%)^2+2(0.5)(0.5)(19.46\%)(7.68\%)(-2\%)$$

$$\sigma_p^2=1.079\%$$

Volatility:

$$\sigma_p=\sqrt{1.079\%}=10.389\%$$

## Exercise 16 — Arbitrage-free forward price

Spot = 250, risk-free rate = 2.3%, maturity = 1 year.

$$F=S(1+r)^T=250(1.023)=255.75$$

## Exercise 17 — Call + short put break-even

Stock = 100. Long call strike 100, premium 3. Short put strike 100, premium 2.

Call profit:

$$\max(0,S_T-100)-3$$

Short put profit:

$$-\max(0,100-S_T)+2$$

Net premium = -3 + 2 = -1. Break-even occurs when the total payoff is 1. That happens at:

$$S_T=101$$

Then the call is worth 1, the put is worth 0 and the net premium cost is 1.

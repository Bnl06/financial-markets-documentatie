> **English variant** — Checked against the course slide pack, the exercise solutions and the Dutch summary. Key financial terms follow the terminology used in *Introduction to Financial Markets*.

# Unit 2 — Money and Bond Analytics

!!! abstract "Key idea"

    Unit 2 explains how the value of money changes through time: interest, inflation, present value, future value, bond prices and yields.

## 1. Nominal and real interest

The nominal interest rate is the rate stated in contracts. The real interest rate corrects for expected inflation.

Exact Fisher relation:

$$1+r_{nominal}=(1+r_{real})(1+\pi^e)$$

Approximation:

$$r_{nominal}\approx r_{real}+\pi^e$$

!!! example "Example"

    Nominal interest rate = 2.3%. Expected inflation = 2.7%.  
    Real interest rate ≈ 2.3% - 2.7% = -0.4%.  
    Your purchasing power decreases despite a positive nominal interest rate.

## 2. Simple interest

With simple interest, interest accrues linearly with time.

$$V_T=V_0(1+rT)$$

This convention is often used for money market instruments such as T-bills.

## 3. Compounding

With compounding, you earn interest on interest.

Annual compounding:

$$V_T=V_0(1+r)^T$$

Semi-annual compounding:

$$V_T=V_0\left(1+\frac{r}{2}\right)^{2T}$$

## 4. Present value

Present value is what a future cash flow is worth today.

$$V_0=\frac{V_T}{(1+r)^T}$$

The higher the interest rate, the lower the present value. Money in the future is worth less than money today because money today can be invested.

## 5. Annuity

An annuity is a sequence of equal payments at fixed moments in time. Its present value is the sum of all discounted payments.

$$PV=\sum_{t=1}^{T}\frac{CF_t}{(1+r)^t}$$

## 6. Bond price

A bond price is the present value of coupons plus principal.

For a 2-year coupon bond with face value 100 and coupon 3:

$$P=\frac{3}{(1+s_1)}+\frac{103}{(1+s_2)^2}$$

Use the correct spot rate for each maturity. The cash flow in one year is discounted with the 1-year spot rate; the cash flow in two years with the 2-year spot rate.

## 7. Yield to maturity

The **yield to maturity** is the single discount rate that makes the current price equal to all future cash flows.

$$P=\sum_{t=1}^{T}\frac{CF_t}{(1+y)^t}$$

In practice you often solve this with Excel `IRR`, `RATE` or Goal Seek.

## Exam focus

Always explain whether you are using simple interest, compounding or discounting. For bonds, you must be able to explain the difference between **spot rates** and **yield to maturity**.

> **English variant** — This page is prepared for GitBook Variants. Financial key terms are kept close to the course terminology. Always verify formulas and official definitions with the Dutch/original course version.

# Formulas en Excel

## Interest en inflatie

| Goal | Formula |
|---|---|
| Exact Fisher | $1+r_n=(1+r_r)(1+\pi^e)$ |
| Fisher benadering | $r_n\approx r_r+\pi^e$ |
| Simple interest FV | $V_T=V_0(1+rT)$ |
| Compound FV | $V_T=V_0(1+r)^T$ |
| Present value | $V_0=\frac{V_T}{(1+r)^T}$ |

## Obligaties

| Goal | Formula |
|---|---|
| Bond price | $P=\sum \frac{CF_t}{(1+s_t)^t}$ |
| Yield to maturity | $P=\sum \frac{CF_t}{(1+y)^t}$ |
| T-bill simple discount | $P=\frac{FV}{1+rT}$ |

## Aandelen

| Goal | Formula |
|---|---|
| Growing perpetuity | $V=\frac{CF_1}{r-g}$ |

## Risk & return

| Goal | Formula |
|---|---|
| Portfolio return | $E(r_p)=\sum w_iE(r_i)$ |
| 2-asset variance | $\sigma_p^2=w_A^2\sigma_A^2+w_B^2\sigma_B^2+2w_Aw_B\sigma_A\sigma_B\rho_{AB}$ |

## Excel functies

| Excel | Gebruik |
|---|---|
| `=PV(rate,nper,pmt,fv)` | present value |
| `=IRR(range)` | internal rate/yield uit cashflows |
| `=YEARFRAC(start,end,basis)` | maturity volgens day count |
| `=AVERAGE(range)` | arithmetic average |
| `=VAR.S(range)` | sample variance |
| `=STDEV.S(range)` | sample standard deviation |
| `=MIN(range)` / `=MAX(range)` | minimum/maximum |

---

## Exam addendum — added without removing the existing documentation

!!! note "Non-destructive update"
    The original documentation above has deliberately been preserved. This addendum adds exam focus, extra terms, model answers and common mistakes without replacing the existing explanation.

| Task | Excel function / approach | Watch out |
|---|---|---|
| Year fraction ACT/360 | `=YEARFRAC(start,end,2)` | Separator may be `,` or `;`. |
| Future value | `=FV(rate,nper,pmt,pv)` | Enter `pv` as negative if it is a cash outflow. |
| Present value | `=PV(rate,nper,pmt,fv)` | Check the period of the interest rate. |
| YTM | `=RATE(nper,pmt,pv,fv)` or IRR | Semi-annual: annualise the periodic rate. |
| Portfolio risk | `=SQRT(w1^2*s1^2+w2^2*s2^2+2*w1*w2*rho*s1*s2)` | Use decimals, not 15 for 15%. |
| Option break-even | Build a payoff/profit table | Premium paid = minus, premium received = plus. |

## Extra practice prompts

- Exact and approximate Fisher with different expected inflation rates.
- T-bill price with ACT/360.
- Bond price with spot rates and YTM via RATE.
- Dividend discount model with constant growth.
- Portfolio risk with positive, zero and negative correlation.
- Forward/future payoff for long and short positions.
- Option payoff/profit for long call, short call, long put and short put.

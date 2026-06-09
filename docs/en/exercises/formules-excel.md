# Formulas and Excel

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

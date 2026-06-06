# Formules en Excel

## Interest en inflatie

| Doel | Formule |
|---|---|
| Exact Fisher | $1+r_n=(1+r_r)(1+\pi^e)$ |
| Fisher benadering | $r_n\approx r_r+\pi^e$ |
| Simple interest FV | $V_T=V_0(1+rT)$ |
| Compound FV | $V_T=V_0(1+r)^T$ |
| Present value | $V_0=\frac{V_T}{(1+r)^T}$ |

## Obligaties

| Doel | Formule |
|---|---|
| Bond price | $P=\sum \frac{CF_t}{(1+s_t)^t}$ |
| Yield to maturity | $P=\sum \frac{CF_t}{(1+y)^t}$ |
| T-bill simple discount | $P=\frac{FV}{1+rT}$ |

## Aandelen

| Doel | Formule |
|---|---|
| Growing perpetuity | $V=\frac{CF_1}{r-g}$ |

## Risk & return

| Doel | Formule |
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

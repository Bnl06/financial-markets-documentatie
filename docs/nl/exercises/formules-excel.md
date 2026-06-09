> **Nederlandse variant** — Dit is de hoofdversie voor het studeren. Gebruik de Engelse variant vooral om Engelse vaktermen te herkennen.

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

---

## Examenaanvulling — toegevoegd zonder bestaande documentatie te verwijderen

!!! note "Niet-destructieve update"
    De oorspronkelijke documentatie hierboven is bewust behouden. Deze aanvulling voegt examenfocus, extra begrippen, modelantwoorden en veelgemaakte fouten toe zonder de bestaande uitleg te vervangen.

| Taak | Excel-functie / aanpak | Let op |
|---|---|---|
| Jaarfractie ACT/360 | `=YEARFRAC(start;end;2)` | Separator kan `,` of `;` zijn. |
| Future value | `=FV(rate;nper;pmt;pv)` | Zet `pv` negatief als cash outflow. |
| Present value | `=PV(rate;nper;pmt;fv)` | Controleer periode van de rente. |
| YTM | `=RATE(nper;pmt;pv;fv)` of IRR | Semi-annual: periodieke rate annualiseren. |
| Portfolio risk | `=SQRT(w1^2*s1^2+w2^2*s2^2+2*w1*w2*rho*s1*s2)` | Gebruik decimalen, niet 15 voor 15%. |
| Option break-even | Payoff/profit-tabel maken | Premie betaald = min, premie ontvangen = plus. |

## Extra oefenprompts

- Fisher exact en approximate met andere inflatieverwachtingen.
- T-bill prijs met ACT/360.
- Bond price met spot rates én YTM via RATE.
- Dividend discount model met constante groei.
- Portfolio risk met positieve, nul en negatieve correlatie.
- Forward/future payoff voor long en short.
- Options payoff/profit voor long call, short call, long put en short put.

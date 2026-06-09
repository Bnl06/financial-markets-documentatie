# Formules en Excel

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

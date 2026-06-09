> **Nederlandse variant** — Dit is de hoofdversie voor het studeren. Gebruik de Engelse variant vooral om Engelse vaktermen te herkennen.

# Formuleblad

## Net wealth

$$Net\ wealth=Assets-Liabilities$$

## Fisher

$$1+r_n=(1+r_r)(1+\pi^e)$$

$$r_n\approx r_r+\pi^e$$

## Time value of money

$$FV=PV(1+r)^T$$

$$PV=\frac{FV}{(1+r)^T}$$

$$FV_{simple}=PV(1+rT)$$

$$FV_{semiannual}=PV\left(1+\frac{r}{2}\right)^{2T}$$

## Bond pricing

$$P=\sum_{t=1}^{T}\frac{CF_t}{(1+s_t)^t}$$

$$P=\sum_{t=1}^{T}\frac{CF_t}{(1+y)^t}$$

## Growing perpetuity

$$V=\frac{CF_1}{r-g}$$

## Return

$$V_T=V_0\prod_{t=1}^{T}(1+r_t)$$

$$r_{growth}=\left(\frac{V_T}{V_0}\right)^{1/T}-1$$

## Portfolio

$$E(r_p)=\sum_i w_iE(r_i)$$

$$\sigma_p^2=w_A^2\sigma_A^2+w_B^2\sigma_B^2+2w_Aw_B\sigma_A\sigma_B\rho_{AB}$$

## Forward price

$$F=S(1+r)^T$$

## Options

$$Call\ payoff=\max(0,S_T-K)$$

$$Put\ payoff=\max(0,K-S_T)$$

---

## Examenaanvulling — toegevoegd zonder bestaande documentatie te verwijderen

!!! note "Niet-destructieve update"
    De oorspronkelijke documentatie hierboven is bewust behouden. Deze aanvulling voegt examenfocus, extra begrippen, modelantwoorden en veelgemaakte fouten toe zonder de bestaande uitleg te vervangen.

!!! warning "Geen officieel examenformuleblad"
    De slides zeggen dat er geen cheat sheet met formules wordt voorzien. Dit blad is dus om te studeren, niet om mee te nemen.

| Onderwerp | Formule | Wanneer gebruiken? |
| --- | --- | --- |
| Fisher exact | (1+r_nom)=(1+r_real)(1+π^e) | Gebruik bij exacte inflatie/real rate. |
| Fisher approximation | r_nom ≈ r_real + π^e | Snel bij kleine percentages. |
| Simple interest | V_T=V_0(1+rT) | T-bills en korte leningen. |
| Compound interest | V_T=V_0(1+r/m)^{mT} | Kwartaal/semi-annual compounding. |
| Present value | V_0=V_T/(1+r)^T | Alle waarderingen. |
| Annuity PV | PV=C(1-(1+r)^-T)/r | Gelijke betalingen. |
| Bond price | P=Σ coupon/(1+r_t)^t + FV/(1+r_T)^T | Gebruik spot rates of YTM. |
| Gordon model | P_0=D_1/(r-g) | Aandeel met constante dividendgroei. |
| Portfolio variance | σ_p²=w_1²σ_1²+w_2²σ_2²+2w_1w_2ρσ_1σ_2 | Risico met correlatie. |
| Forward price | F_0≈S_0(1+r)^T | Zonder inkomen/opslag. |
| Call payoff | max(S_T-K,0) | Opties. |
| Put payoff | max(K-S_T,0) | Opties. |

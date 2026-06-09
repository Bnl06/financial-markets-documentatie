> **English variant** — This page is prepared for GitBook Variants. Financial key terms are kept close to the course terminology. Always verify formulas and official definitions with the Dutch/original course version.

# Formula sheet

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

## Exam addendum — added without removing the existing documentation

!!! note "Non-destructive update"
    The original documentation above has deliberately been preserved. This addendum adds exam focus, extra terms, model answers and common mistakes without replacing the existing explanation.

!!! warning "No official exam formula sheet"
    The slides state that no formula cheat sheet is provided. Use this page for studying, not as an exam aid.

| Topic | Formula | When to use it |
| --- | --- | --- |
| Fisher exact | (1+r_nom)=(1+r_real)(1+π^e) | Use bij exacte inflatie/real rate. |
| Fisher approximation | r_nom ≈ r_real + π^e | Fast for kleine percentages. |
| Simple interest | V_T=V_0(1+rT) | T-bills en korte leningen. |
| Compound interest | V_T=V_0(1+r/m)^{mT} | Kwartaal/semi-annual compounding. |
| Present value | V_0=V_T/(1+r)^T | All valuations. |
| Annuity PV | PV=C(1-(1+r)^-T)/r | Equal payments. |
| Bond price | P=Σ coupon/(1+r_t)^t + FV/(1+r_T)^T | Use spot rates of YTM. |
| Gordon model | P_0=D_1/(r-g) | Share with constant dividend growth. |
| Portfolio variance | σ_p²=w_1²σ_1²+w_2²σ_2²+2w_1w_2ρσ_1σ_2 | Risk with correlation. |
| Forward price | F_0≈S_0(1+r)^T | Without income/storage. |
| Call payoff | max(S_T-K,0) | Options. |
| Put payoff | max(K-S_T,0) | Options. |

> **Nederlandse variant** — Dit is de hoofdversie voor het studeren. Gebruik de Engelse variant vooral om Engelse vaktermen te herkennen.

# Unit 2 — Money and Bond Analytics

!!! abstract "Kernzin"

    Unit 2 leert hoe geldwaarde door de tijd verandert: interest, inflatie, present value, future value, obligatieprijs en yield.

## 1. Nominale en reële interest

De nominale rente is de rente die je ziet in contracten. De reële rente corrigeert voor verwachte inflatie.

Exacte Fisher-relatie:

$$1+r_{nominal}=(1+r_{real})(1+\pi^e)$$

Benadering:

$$r_{nominal}\approx r_{real}+\pi^e$$

!!! example "Voorbeeld"

    Nominale rente = 2,3%. Verwachte inflatie = 2,7%.  
    Reële rente ≈ 2,3% - 2,7% = -0,4%.  
    Je koopkracht daalt dus ondanks een positieve nominale rente.

## 2. Simple interest

Bij simple interest groeit interest lineair met de tijd.

$$V_T=V_0(1+rT)$$

Dit wordt vaak gebruikt bij money market instrumenten zoals T-bills.

## 3. Compounding

Bij compounding krijg je interest op interest.

Annual compounding:

$$V_T=V_0(1+r)^T$$

Semi-annual compounding:

$$V_T=V_0\left(1+\frac{r}{2}\right)^{2T}$$

## 4. Present value

Present value is wat een toekomstige cashflow vandaag waard is.

$$V_0=\frac{V_T}{(1+r)^T}$$

Hoe hoger de interest rate, hoe lager de present value. Geld in de toekomst is minder waard dan geld vandaag omdat je vandaag kan investeren.

## 5. Annuity

Een annuity is een reeks gelijke betalingen op vaste momenten. De present value is de som van alle gedisconteerde betalingen.

$$PV=\sum_{t=1}^{T}\frac{CF_t}{(1+r)^t}$$

## 6. Obligatieprijs

Een obligatieprijs is de present value van coupons plus principal.

Voor een 2-jarige coupon bond met face value 100 en coupon 3:

$$P=\frac{3}{(1+s_1)}+\frac{103}{(1+s_2)^2}$$

Gebruik de juiste spot rate per maturity. De cashflow over 1 jaar wordt gedisconteerd met de 1-year spot rate; de cashflow over 2 jaar met de 2-year spot rate.

## 7. Yield to maturity

De **yield to maturity** is de ene discontovoet die de huidige prijs gelijk maakt aan alle toekomstige cashflows.

$$P=\sum_{t=1}^{T}\frac{CF_t}{(1+y)^t}$$

Je lost dit meestal op met Excel `IRR`, `RATE` of Goal Seek.

## Examenfocus

Leg altijd uit of je simple interest, compounding of discounting gebruikt. Bij obligaties moet je het verschil tussen **spot rates** en **yield to maturity** kunnen uitleggen.

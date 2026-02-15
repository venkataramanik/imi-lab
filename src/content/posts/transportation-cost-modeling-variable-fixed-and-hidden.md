---
title: "Transportation Cost Modeling: Variable, Fixed, and Hidden"
description: "The per-mile rate is just the beginning. The full cost equation includes capacity, utilization, and network structure."
pubDate: 2026-02-15
category: "Transportation"
tags: ["transportation", "cost-modeling", "logistics", "freight", "optimization"]
featured: false
---

## The Rate Illusion

Shippers compare carrier rates. $2.10/mile vs $2.25/mile. The lower rate wins.

This is wrong. The per-mile rate is a component, not the total. The full cost picture includes utilization, accessorials, and network inefficiency.

A $2.10 rate with 70% utilization costs more than $2.25 with 85% utilization. The math is simple. The visibility is rare.

## The Cost Components

**Variable Costs** (scale with volume):
- Linehaul: fuel, driver wages, maintenance per mile
- Handling: loading, unloading, transfer
- Accessorials: detention, layover, reefer, hazardous materials

**Fixed Costs** (scale with network):
- Equipment: depreciation, insurance, registration
- Facilities: terminals, yards, maintenance shops
- Technology: TMS, ELD, tracking systems
- Management: dispatch, planning, customer service

**Hidden Costs** (often ignored):
- Empty miles: repositioning, deadhead, imbalance
- Detention: waiting at shipper/receiver facilities
- Claims: damage, loss, delay penalties
- Administrative: procurement, invoicing, reconciliation

## The Total Cost Equation

**Cost per Shipment = (Linehaul Rate × Distance) + Accessorials + (Fixed Costs / Shipment Volume) + Hidden Costs**

A shipment from Chicago to Dallas:
- Distance: 925 miles
- Linehaul rate: $2.00/mile = $1,850
- Fuel surcharge: $0.45/mile = $416
- Accessorials: $150
- Fixed cost allocation: $200
- Hidden costs (detention, claims): $100

**Total: $2,716**
**Effective rate: $2.94/mile**

The quoted rate was $2.00. The actual cost was 47% higher.

## The Utilization Multiplier

Asset utilization dominates cost structure:

| Utilization | Fixed Cost per Mile | Total Cost Impact |
|-------------|---------------------|-------------------|
| 50% | $0.80 | +60% vs 80% util |
| 65% | $0.62 | +24% vs 80% util |
| 80% | $0.50 | Baseline |
| 90% | $0.44 | -12% vs 80% util |

Low utilization kills profitability. Network density determines utilization.

## Network Cost Drivers

**Lane balance** — inbound/outbound ratio. Imbalance creates empty miles. 60/40 balance adds 20% cost.

**Stop density** — deliveries per mile. Rural routes cost more than urban. Last-mile is 50% of cost for 10% of distance.

**Consolidation opportunity** — shipment size vs. vehicle capacity. LTL pricing reflects consolidation complexity.

**Mode trade-offs** — truck vs. rail vs. intermodal. Cost per ton-mile varies 3-5x across modes.

## The Shipper's Total Cost

Beyond carrier payment, shippers bear:

**Inventory carrying cost** — faster transport reduces pipeline inventory. Air freight at 10x truck cost may reduce inventory cost more than it adds transport cost.

**Stockout cost** — expedited shipping when planned mode fails. Premium freight destroys transportation budget.

**Handling cost** — transfers, cross-docks, intermediate facilities. Each touch adds cost and time.

**Administrative cost** — procurement, tendering, tracking, payment. Complex networks require complex management.

## The Optimization Framework

Minimize: Total Logistics Cost = Transport + Inventory + Handling + Stockout + Administrative

Subject to:
- Service level constraints (transit time, reliability)
- Capacity constraints (equipment, drivers, facilities)
- Network structure (origins, destinations, flows)

The optimal solution rarely minimizes transportation alone.

## Mode Selection Mathematics

| Mode | Cost per Ton-Mile | Speed | Reliability | Best For |
|------|-------------------|-------|-------------|----------|
| Truck | $0.20-0.30 | Fast | High | Short-haul, time-sensitive |
| Rail | $0.03-0.05 | Slow | Medium | Long-haul, bulk, non-urgent |
| Intermodal | $0.08-0.12 | Medium | Medium | Long-haul, balanced cost-service |
| Air | $1.50-3.00 | Fastest | High | Emergency, high-value, perishable |
| Ocean | $0.01-0.03 | Slowest | Low | International, non-urgent, bulk |

The quantitative choice depends on inventory value, time sensitivity, and reliability requirements.

## The Bottom Line

Transportation cost modeling requires visibility beyond the rate sheet.

The complete picture includes:
- Variable costs per unit moved
- Fixed costs per unit of capacity
- Hidden costs of inefficiency and exception
- Network effects of density and balance
- Interactions with inventory and service

Organizations that model total cost make better mode, carrier, and network decisions.

Those that minimize rate alone optimize the wrong metric.

&gt; The cheapest carrier is expensive if half-empty. The expensive carrier is cheap if fully utilized. The math is simple. The measurement is not.

---

*Published by IMI Lab. Exploring technology-driven supply chains.*

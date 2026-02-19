---
title: "The Resilience Premium: Calculating the Value of Redundancy"
description: "Why the 'leanest' chain is often the most fragile. The quantitative shift from Just-in-Time to Just-in-Case."
pubDate: 2026-02-19
category: "Strategy"
tags: ["resilience", "risk-management", "TTR", "TTS", "supply-chain-fragility"]
featured: true
---

## The Fragility of Efficiency

For decades, the gold standard of SCM was "Lean"—stripping out every cent of "waste" (inventory). But in a world of port strikes, geopolitical shifts, and climate events, lean has a hidden cost: **Fragility**. 

When you remove all buffers, you lose the ability to absorb shocks. The goal is no longer just "Minimum Cost," but **Maximum Resilience**. 

The math of resilience is governed by two metrics: **Time-to-Survive (TTS)** and **Time-to-Recover (TTR)**.



## Defining the Stress Tests

1. **Time-to-Survive (TTS):** The maximum duration your supply chain can continue to meet demand after a specific node (factory, port, or supplier) is knocked offline. 
   * *Calculation:* Current Inventory + Incoming Transit / Average Daily Demand.
2. **Time-to-Recover (TTR):** The time it takes for that node to return to full functionality, or for you to switch to a fully operational alternative.

**The Resilience Gap:** If $TTR > TTS$, you have a stockout. The larger the gap, the greater the financial exposure.

## The Quantitative Pivot: The "Stress-Test" Matrix

Instead of asking "What is the probability of a strike?", we ask "What is the impact if this node disappears?"

| Node Criticality | TTS (Current) | TTR (Projected) | Financial Exposure |
|------------------|---------------|-----------------|--------------------|
| **Sole-Source Supplier** | 14 Days | 90 Days | High (76-day gap) |
| **Regional Hub** | 30 Days | 15 Days | Low (Buffer holds) |
| **Major Port** | 10 Days | 45 Days | Critical (35-day gap) |

## The Math of Redundancy (Dual Sourcing)

Dual sourcing is often seen as a "cost penalty" because you split volume, losing economies of scale. However, it is actually an **Insurance Premium**.

**Expected Cost of Single Source:**
$Cost = (Unit Price \times Volume) + (Prob(Disruption) \times Cost(Stockout))$

**Expected Cost of Dual Source:**
$Cost = (Higher Unit Price \times Volume) + (Significantly Lower Disruption Risk)$

The "Resilience Premium" is the extra amount you pay per unit to ensure that your $TTR$ remains lower than your $TTS$.



## The Role of Technology: "Digital Stress-Testing"

As a technology leader, your tool for resilience is the **Digital Twin**. By running **Monte Carlo simulations**, you can "stress" the network:
- What happens if the Suez Canal closes for 15 days?
- What happens if our primary electronics supplier has a 3-month lead time surge?

This allows you to move from **Reactive Firefighting** to **Proactive Buffering**. You don't hold extra stock everywhere; you hold it only at the "high-exposure" nodes identified by the $TTR/TTS$ gap.

## The Bottom Line

Resilience is not a "soft" goal; it is a measurable financial state. 

The quantitative discipline:
- Map every "Tier 1" and "Tier 2" supplier.
- Calculate the $TTS$ and $TTR$ for your top 50 revenue-generating SKUs.
- Identify "Single-Points-of-Failure" where the $TTR$ exceeds $TTS$ by more than 30 days.
- Shift the S&OP conversation from "How do we lower cost?" to "How do we protect the revenue stream?"

> In a stable world, Lean wins. In a volatile world, the Resilient survive.

---

*Published by IMI Lab. Exploring technology-driven supply chains.*

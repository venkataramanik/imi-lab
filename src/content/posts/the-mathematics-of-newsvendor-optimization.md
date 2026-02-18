---
title: "The Mathematics of Newsvendor Optimization: When Demand Is Uncertain"
description: "The foundational model for inventory under uncertainty. Critical fractile, service level, and the cost of mismatch."
pubDate: 2026-02-17
category: "Strategy"
tags: ["newsvendor", "optimization", "inventory", "probability", "service-level"]
featured: false
---

## The Core Problem

You stock a product once. Demand is random. Order too much: leftover inventory, salvage value loss. Order too little: stockout, lost margin, customer defection.

This is the newsvendor problem. Named for the newsstand operator who must decide how many papers to stock before knowing demand.

The mathematics applies everywhere: fashion, electronics, perishables, seasonal goods.

## The Model

**Decision variable:** Q (order quantity)

**Random variable:** D (demand), with cumulative distribution function F(D)

**Cost parameters:**
- c = unit cost
- p = selling price
- s = salvage value (leftover)
- g = shortage cost (stockout)

**Underage cost (Cu):** Cost of ordering one unit too few
Cu = p - c + g (lost margin + goodwill loss)

**Overage cost (Co):** Cost of ordering one unit too many
Co = c - s (cost minus salvage)

## The Critical Fractile

Optimal service level:

**Critical fractile = Cu / (Cu + Co)**

This is the probability that demand will be less than or equal to optimal order quantity.

**Interpretation:** The optimal stockout probability is Co / (Cu + Co)

## Numerical Example

Fashion item:
- Cost c = $20
- Price p = $50
- Salvage s = $10
- Shortage cost g = $5 (goodwill)

Cu = 50 - 20 + 5 = $35
Co = 20 - 10 = $10

Critical fractile = 35 / (35 + 10) = 35/45 = 0

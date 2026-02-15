---
title: "Economic Order Quantity vs. Just-in-Time: When Math Meets Reality"
description: "EOQ minimizes total cost. JIT minimizes waste. The choice depends on what you can control—and what you cannot."
pubDate: 2026-02-15
category: "Strategy"
tags: ["eoq", "jit", "lean", "optimization", "inventory"]
featured: false
---

## The Classic Trade-Off

Order too frequently: high ordering costs, administrative burden, transportation inefficiency.

Order too infrequently: high inventory, carrying costs, obsolescence risk, capital trap.

The Economic Order Quantity finds the minimum. The formula is elegant. The assumptions are fragile.

## The EOQ Formula

**EOQ = √(2DS/H)**

Where:
- D = Annual demand (units)
- S = Ordering cost per order ($)
- H = Holding cost per unit per year ($)

A product with 10,000 annual demand, $100 ordering cost, $5 holding cost:
- EOQ = √(2 × 10,000 × 100 / 5) = √400,000 = 632 units
- Order 16 times per year
- Total cost = $3,162

## The Assumptions That Break

EOQ assumes:
- Constant, known demand
- Fixed ordering cost
- Linear holding cost
- Instant replenishment
- No stockouts allowed

Reality violates every assumption. Demand varies. Ordering costs change with automation. Holding costs are non-linear. Lead times exist. Stockouts happen.

## Just-in-Time: The Alternative Philosophy

JIT rejects the optimization. Instead of calculating optimal batch size, drive batch size to one.

The math shifts:
- Ordering cost → drive to near zero (automation, kanban, supplier integration)
- Holding cost → irrelevant if inventory is near zero
- Total cost → minimized by elimination, not optimization

## The Comparative Framework

| Dimension | EOQ | JIT |
|-----------|-----|-----|
| **Core logic** | Optimize trade-off | Eliminate trade-off |
| **Batch size** | Calculated, fixed | Minimal, variable |
| **Inventory** | Buffer against uncertainty | Waste to be eliminated |
| **Supplier relationship** | Transactional | Integrated, partnership |
| **Demand stability** | Required | Required even more |
| **Process control** | Moderate | Extreme (six sigma) |
| **Capital intensity** | Lower | Higher (automation) |
| **Risk profile** | Predictable, moderate | Low inventory, high disruption exposure |

## When EOQ Wins

Quantitative conditions favoring optimization over elimination:

**High variety, low volume** — setup costs dominate, demand unpredictable, JIT infrastructure uneconomical

**Unreliable supply** — supplier lead times variable, quality inconsistent, partnership impossible

**Distance and scale** — global sourcing, container quantities, transportation economies

**Demand volatility** — spikes unpredictable, seasonality extreme, forecast error high

## When JIT Wins

Conditions enabling waste elimination:

**Stable demand** — predictable consumption, smooth production schedule

**Reliable supply** — short lead times, high quality, supplier proximity

**Process control** — defect rates near zero, equipment reliability high

**Integrated systems** — information sharing, synchronized planning, trust-based relationships

## The Hybrid Reality

Most operations blend both:

**A-items** (high value, high volume): JIT, frequent delivery, tight integration
**B-items** (moderate): EOQ with dynamic adjustment
**C-items** (low value, low volume): Large batches, long cycles, accept inventory

Segmentation by value and volatility determines method, not religious adherence to either philosophy.

## The Quantitative Test

Measure both approaches on total cost, not inventory alone:

**Total Cost = Purchase + Ordering + Holding + Stockout + Quality + Administrative**

JIT reduces holding, quality, administrative costs.
EOQ reduces ordering, stockout, implementation costs.

The optimal system minimizes the sum, not any single component.

## The Bottom Line

EOQ and JIT are not competitors. They are solutions to different problems under different constraints.

EOQ optimizes within constraints. JIT removes constraints through investment and integration.

The quantitative choice depends on:
- Demand predictability
- Supply reliability
- Process capability
- System integration depth

Neither is universally superior. Both are mathematically valid under their assumptions.

The error is applying either blindly.

&gt; Optimize when you must. Eliminate when you can. The best operations know the difference.

---

*Published by IMI Lab. Exploring technology-driven supply chains.*

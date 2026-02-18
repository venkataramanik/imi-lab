---
title: "The Center of Gravity: Locating the Heart of Your Network"
description: "The physics of transportation. How to mathematically determine the optimal location for a distribution center."
pubDate: 2026-03-05
category: "Strategy"
tags: ["network-design", "logistics", "transportation", "center-of-gravity", "supply-chain-physics"]
featured: false
---

## The Spatial Optimization Problem

Where should your next warehouse be? Logistics leaders often choose locations based on cheap real estate or tax incentives. However, a "cheap" building in the wrong place can cost millions in incremental freight expenses over its lifetime.

The **Center of Gravity (CoG)** method treats your supply chain like a physical system. It identifies the geographical coordinate that minimizes the weighted distance to all your demand points.

The math is a weighted average. The implications are structural efficiency.

## The CoG Formula

To find the optimal coordinates $(\bar{x}, \bar{y})$, we calculate the weighted average of the $x$ and $y$ coordinates of every customer or node in the network, weighted by the volume (tonnage) they pull.



$$\bar{x} = \frac{\sum (x_i \cdot w_i)}{\sum w_i}$$
$$\bar{y} = \frac{\sum (y_i \cdot w_i)}{\sum w_i}$$

Where:
- $x_i, y_i$ = Coordinate of location $i$
- $w_i$ = Volume/Weight shipped to location $i$

## The Ton-Mile Reality

The CoG method doesn't just look at distance; it looks at **Ton-Miles**. 

- A customer 100 miles away buying 1,000 units has the same "gravitational pull" as a customer 1,000 miles away buying 100 units.
- Moving the facility closer to your high-volume nodes (your "A" customers) disproportionately reduces total network spend.

| Location | X-Coord | Y-Coord | Volume (Tons) | Pull (X·W) | Pull (Y·W) |
|----------|---------|---------|---------------|------------|------------|
| Atlanta  | 33.7    | -84.3   | 500           | 16,850     | -42,150    |
| Chicago  | 41.8    | -87.6   | 200           | 8,360      | -17,520    |
| Dallas   | 32.7    | -96.7   | 300           | 9,810      | -29,010    |
| **Total**|         |         | **1,000** | **35,020** | **-88,680**|

**Optimal Center:** (35.0, -88.7) — *Near Memphis, TN.*

## The Limitations of Euclidean Math

While the CoG method is the perfect starting point, "Supply Chain Physics" must eventually meet reality:

1. **The Grid vs. The Road:** CoG assumes a straight line (Euclidean distance). Reality follows the interstate system and mountain ranges.
2. **Infinite Space:** The "optimal" coordinate might be in the middle of a lake or a protected forest.
3. **Variable Rates:** It assumes shipping 1 mile costs the same everywhere. It ignores the "dead-zone" surcharges or high-cost metro tolls.



## Strategic Multi-Facility Design

When one CoG isn't enough, we move into **K-Means Clustering**. 

If your ton-mile costs are too high with one DC, the math tells you to split the network. You identify two or more centers of gravity and assign each customer to the nearest one. This is the quantitative trigger for moving from a centralized to a decentralized model (revisiting the Square Root Law).

## The Optimization Problem

Minimize: **Total Ton-Miles** = $\sum (d_i \cdot w_i)$
Subject to: **Service Level (Time to Customer)**

The goal is to find the "Geographic Sweet Spot" where inbound costs from suppliers and outbound costs to customers reach a minimum.

## The Bottom Line

A warehouse is a long-term fixed asset. If you place it incorrectly, you are signing up for 10+ years of unnecessary transportation "tax."

The quantitative discipline:
- Map your top 80% of volume by coordinate.
- Run a CoG analysis before touring real estate.
- Use the result as a "North Star"—if you choose a location 50 miles away from the CoG, calculate the exact annual freight penalty of that decision.
- Re-run the analysis annually as your customer base shifts.

> Logistics is the management of movement. The Center of Gravity is the point where that movement is most efficient.

---

*Published by IMI Lab. Exploring technology-driven supply chains.*

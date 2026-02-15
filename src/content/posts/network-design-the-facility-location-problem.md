---
title: "Network Design: The Facility Location Problem"
description: "Where to locate warehouses? The quantitative trade-off between proximity and scale, responsiveness and efficiency."
pubDate: 2026-02-15
category: "Strategy"
tags: ["network-design", "facility-location", "optimization", "warehousing", "logistics"]
featured: false
---

## The Geography of Cost

Every facility in a supply chain network adds cost and reduces distance. More facilities mean higher fixed costs but lower variable costs. Fewer facilities mean economies of scale but longer last-mile delivery.

The facility location problem finds the optimal number, size, and location of facilities to serve demand at minimum total cost.

## The Cost Trade-Offs

**Fixed Costs** (scale with facility count):
- Facility construction or lease
- Equipment and automation
- Management and administrative staff
- Systems and technology

**Variable Costs** (scale with throughput):
- Labor for receiving, storage, picking, shipping
- Utilities, maintenance, consumables
- Inventory carrying cost

**Transportation Costs** (scale with distance):
- Inbound from suppliers
- Outbound to customers
- Inter-facility transfers

## The Mathematical Formulation

Minimize: Total Cost = Σ(Fixed Costs) + Σ(Variable Costs) + Σ(Transportation Costs)

Subject to:
- Service level constraints (delivery time, coverage)
- Capacity constraints (throughput, storage)
- Demand satisfaction (all demand met)

The problem is NP-hard. Exact solutions are impossible for large networks. Heuristics and optimization solvers find near-optimal solutions.

## The Classic Models

**Continuous models** — facilities can locate anywhere. Center-of-gravity method finds weighted average location by demand.

**Discrete models** — facilities must locate at candidate sites. Mixed-integer programming selects optimal subset.

**Capacitated models** — facilities have throughput limits. Multiple facilities serve high-demand regions.

**Multi-echelon models** — distribution centers feed regional warehouses. Hierarchical optimization by tier.

## The Center-of-Gravity Example

Three markets:
- Chicago: 1,000 units, coordinates (41.9, -87.6)
- Dallas: 800 units, coordinates (32.8, -96.8)
- Atlanta: 600 units, coordinates (33.7, -84.4)

Optimal DC location:
- Latitude = (1,000×41.9 + 800×32.8 + 600×33.7) / 2,400 = 36.4
- Longitude = (1,000×-87.6 + 800×-96.8 + 600×-84.4) / 2,400 = -90.3

Near Memphis, Tennessee. The math reveals what intuition misses.

## The Impact of Facility Count

| Facilities | Fixed Cost | Transport Cost | Total Cost | Service Level |
|-----------|-----------|----------------|------------|---------------|
| 1 | Low | High | Moderate | Poor |
| 3 | Moderate | Moderate | Low | Good |
| 5 | High | Low | Moderate | Excellent |
| 10 | Very High | Very Low | High | Excellent |

The optimal number balances fixed cost against transportation savings. Diminishing returns set in as facilities proliferate.

## Service Level Constraints

Customer expectations limit design options:

**Same-day delivery** — requires facilities within 50 miles of demand. High facility count, high fixed cost.

**Next-day delivery** — allows facilities within 300 miles. Moderate count, moderate cost.

**2-3 day delivery** — national distribution from 2-3 facilities. Low count, low cost, low responsiveness.

The network must deliver the service level profitably. Premium service requires premium pricing or premium efficiency.

## Dynamic Network Design

Static optimization assumes stable demand. Reality changes.

**Growth markets** — add facilities ahead of demand, or serve expensively from distance until volume justifies investment.

**Declining markets** — consolidate facilities, absorb fixed cost increases, or exit.

**Seasonality** — temporary capacity through 3PL partnerships, not permanent facilities.

**Disruption** — redundant capacity, alternative sourcing, flexible network structure.

## The Total Cost Equation

Complete network cost includes:

**Operating costs** — labor, utilities, maintenance, inventory
**Transportation costs** — inbound, outbound, inter-facility
**Working capital** — inventory positioned across network
**Risk costs** — single points of failure, concentration exposure
**Administrative costs** — complexity management, coordination overhead

Optimization minimizes the sum, not any single component.

## The Implementation Reality

&gt; The optimal network on paper is not optimal if it cannot be executed.

**Labor availability** — facilities require workers. Rural locations have land, not labor.

**Transportation access** — highways, rail, ports, airports. Infrastructure enables or constrains.

**Regulatory environment** — taxes, incentives, zoning, environmental rules. Location decisions are political.

**Supplier proximity** — inbound costs matter. Being close to customers far from suppliers is expensive.

## The Bottom Line

Network design is strategic. Facilities last decades. Mistakes are expensive to correct.

The quantitative approach:
- Models total cost, not transportation alone
- Optimizes for service level constraints, not despite them
- Tests sensitivity to demand scenarios
- Incorporates execution feasibility

The best networks are not theoretically optimal. They are robust, adaptable, and executable.

The math provides the starting point. Judgment completes the design.

&gt; Proximity costs money. Distance costs money. The optimal network finds the minimum of the sum.

---

*Published by IMI Lab. Exploring technology-driven supply chains.*

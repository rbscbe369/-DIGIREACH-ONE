# ADR-005: Configurable Organization Hierarchy

## Problem

Different industries have vastly different organizational structures (e.g., Hospital -> Ward vs Region -> Store). A rigid entity model cannot adapt.

## Decision

Use a recursive HierarchyNode entity utilizing Materialized Paths or Adjacency Lists.

## Consequences

More complex querying at the database level, but ultimate flexibility for clients.

## Alternatives Considered

- Fixed rigid structures (e.g. Org > Dept > Team): Rejected due to narrow industry fit.

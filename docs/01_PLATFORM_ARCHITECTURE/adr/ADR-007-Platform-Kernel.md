# ADR-007: Platform Kernel

## Problem

Capabilities require shared foundational utilities without circular dependencies. Re-implementing IDs, event publishers, and clock logic causes drift.

## Decision

Establish a Platform Kernel that holds common abstractions (events, IDs, clocks) decoupled from business features.

## Consequences

Strict layering enforced.

## Alternatives Considered

- Shared Utils folder: Rejected as an anti-pattern.

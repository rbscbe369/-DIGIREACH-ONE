# ADR-002: Domain Driven Design

## Problem

Complex business domains (multi-tenant, multi-org, granular access) require a ubiquitous language and bounded contexts to prevent cognitive overload and logic bleeding.

## Decision

Adopt DDD tactical patterns (Entities, Value Objects, Aggregates, Domain Events). Enforce rich models where logic resides on the objects holding the data.

## Consequences

Learning curve for developers, prevents anemic domain models, ensures complex invariants are always validated.

## Alternatives Considered

- Anemic Domain Models with Transaction Scripts: Rejected due to high complexity scaling issues over time.

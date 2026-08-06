# ADR-004: Business Context Engine

## Problem
Context rules (tenant, workspace, role, time zone, locale) must govern every request securely. If left to individual modules, context will be implemented inconsistently leading to data leaks.

## Decision
Implement an immutable Business Context passed via Fastify hooks to down-stream layers.

## Consequences
Guaranteed execution safety. Requires strict middleware injection and AsyncLocalStorage or direct request decoration.

## Alternatives Considered
- Passing Tenant IDs manually to functions: Rejected due to high error margin and developer fatigue.

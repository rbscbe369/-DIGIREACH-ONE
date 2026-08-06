# ADR-001: Clean Architecture

## Problem
The platform needs a strict architectural pattern to decouple business logic from framework and infrastructure concerns. Without it, the code will become tightly coupled to Fastify, Prisma, and HTTP.

## Decision
Adopt the Clean Architecture. Code dependencies must point inward towards the Domain layer.

## Consequences
Requires boilerplate (mappers, DTOs, interfaces) but enables ultimate testability and framework independence. Prevents infrastructure from leaking into business rules.

## Alternatives Considered
- Traditional N-Tier: Rejected due to database-driven design resulting in anemic domains.
- MVC: Rejected due to tight coupling between presentation and logic.

# ADR-003: Metadata Driven Workspace

## Problem

UI requirements change rapidly per industry and role, causing frontend fragmentation and massive maintenance overhead.

## Decision

The Workspace Engine will output only structured metadata (layouts, breakpoints, widget refs). The frontend will be a generic, dumb renderer.

## Consequences

UI logic moves to backend resolvers. Requires strong frontend interpreter capabilities. Enables rapid, deployment-free UI changes per tenant.

## Alternatives Considered

- Server-Side Rendering HTML: Rejected due to inflexibility for native mobile clients.
- Micro-frontends: Rejected due to extreme orchestration complexity.

# @digireach-one/auth

Identity & Access capability for DIGIREACH ONE.

## Architecture

This package follows Clean Architecture principles:

- **domain**: Core business logic, entities, value objects, and domain events.
- **application**: Use cases, commands, queries, and DTOs.
- **infrastructure**: External implementations, Prisma repositories, cache, and security.
- **presentation**: API boundary, controllers, Fastify routes, and Zod validators.
- **shared**: Common constants, errors, and cross-cutting types.

# DIGIREACH ONE Platform Architecture Specification
**Version 1.0.0**

## Table of Contents
1. [Platform Vision](#part-1-platform-vision)
2. [Architecture Overview](#part-2-architecture-overview)
3. [Clean Architecture Rules](#part-3-clean-architecture-rules)
4. [Domain Driven Design Standards](#part-4-domain-driven-design-standards)
5. [Application Layer Standards](#part-5-application-layer-standards)
6. [Infrastructure Standards](#part-6-infrastructure-standards)
7. [API Standards](#part-7-api-standards)
8. [Workspace Standards](#part-8-workspace-standards)
9. [Business Context Standards](#part-9-business-context-standards)
10. [Security Standards](#part-10-security-standards)
11. [Observability Standards](#part-11-observability-standards)
12. [Performance Standards](#part-12-performance-standards)
13. [AI Standards](#part-13-ai-standards)
14. [Extension Framework](#part-14-extension-framework)
15. [Release Governance](#part-15-release-governance)
16. [Architectural Decision Records](#part-16-architectural-decision-records)
17. [Roadmap](#part-17-roadmap)
18. [Enterprise Engineering Principles](#enterprise-engineering-principles)
19. [Coding Standards](#coding-standards)
20. [Module Lifecycle](#module-lifecycle)
21. [Event Standards](#event-standards)
22. [Platform Error Catalogue](#platform-error-catalogue)
23. [Repository Governance](#repository-governance)
24. [Documentation Standards](#documentation-standards)

---

## PART 1: Platform Vision
- **Vision**: To be the definitive, metadata-driven, multi-tenant enterprise operating system.
- **Mission**: Empower organizations across all industries with adaptable, secure, and intelligent capabilities.
- **Platform Philosophy**: AI-Ready, Metadata-Driven, Zero Trust.
- **Design Goals**: Scalability, strict bounded contexts, absolute decoupling.
- **Core Principles**: DDD, Clean Architecture, SOLID, Dependency Injection.

---

## PART 2: Architecture Overview

### Diagram: C4 System Context
\`\`\`mermaid
C4Context
  title System Context diagram for DIGIREACH ONE
  Person(user, "Enterprise User", "An employee utilizing the platform via the Adaptive Workspace.")
  System(platform, "DIGIREACH ONE Platform", "Handles auth, context, business logic, and UI metadata.")
  System_Ext(idp, "External Identity Provider", "OIDC/SAML Providers")
  Rel(user, platform, "Uses", "HTTPS")
  Rel(platform, idp, "Authenticates via", "OIDC/SAML")
\`\`\`

### Diagram: C4 Container
\`\`\`mermaid
C4Container
  title Container diagram for DIGIREACH ONE
  System_Boundary(platform, "DIGIREACH ONE") {
    Container(api, "API Gateway", "Fastify/Node.js", "Handles incoming requests and context hydration")
    Container(auth_module, "Auth & Context Capability", "Node.js", "Manages identity, sessions, and multi-tenant execution contexts")
    Container(workspace_module, "Workspace Capability", "Node.js", "Resolves metadata layout engines")
    ContainerDb(db, "Primary Database", "PostgreSQL", "Stores tenant, user, and module state")
  }
  Rel(api, auth_module, "Routes auth/context to")
  Rel(api, workspace_module, "Routes layout requests to")
  Rel(auth_module, db, "Reads/Writes")
  Rel(workspace_module, db, "Reads/Writes")
\`\`\`

### Diagram: C4 Component (Auth Module)
\`\`\`mermaid
C4Component
  title Component diagram for DIGIREACH ONE (Auth Module)
  Container_Boundary(auth_module, "Auth & Context Capability") {
    Component(auth_ctrl, "Auth Controller", "Fastify", "Handles HTTP login")
    Component(context_mw, "Context Middleware", "Fastify", "Resolves Business Context")
    Component(token_svc, "Token Service", "Application", "Generates/Verifies JWTs")
    Component(auth_prov, "Auth Provider", "Infrastructure", "Argon2/OIDC implementations")
  }
  Rel(auth_ctrl, token_svc, "Uses")
  Rel(token_svc, auth_prov, "Uses")
\`\`\`

### Diagram: Platform Layers
\`\`\`mermaid
graph TD
    UI[Frontend Clients] --> API[Fastify API / Presentation]
    API --> App[Application Layer / Use Cases]
    App --> Domain[Domain Layer / Entities & VOs]
    Infra[Infrastructure / Prisma & Cache] --> App
    Infra --> Domain
\`\`\`

### Diagram: Package Dependency Graph
\`\`\`mermaid
graph TD
    Workspace[@digireach-one/workspace] --> Auth[@digireach-one/auth]
    Auth --> Kernel[@digireach-one/kernel]
    Core[@digireach-one/core] --> Auth
\`\`\`

---

## PART 3: Clean Architecture Rules

### Diagram: Clean Architecture
\`\`\`mermaid
graph BT
    Infra[Infrastructure Layer] --> App[Application Layer]
    Pres[Presentation Layer] --> App
    App --> Domain[Domain Layer]
    Domain --> Domain
\`\`\`
- **Domain Layer**: No external dependencies. Pure TypeScript.
- **Application Layer**: Depends only on Domain. Contains Use Cases, Interfaces.
- **Infrastructure Layer**: Implements Application interfaces. Handles Prisma, Redis, etc.
- **Presentation Layer**: Handles Fastify requests/responses, validates DTOs via Zod.

---

## PART 4: Domain Driven Design Standards
- **Entities**: Mutable, track identity (e.g., \`User\`).
- **Value Objects**: Immutable, track value (e.g., \`EmailAddress\`).
- **Domain Events**: Fired when critical state changes (e.g., \`ContextResolvedEvent\`).
- **Repositories**: Defined as interfaces in Domain/Application layer.
- **Factories**: Used for complex aggregate creation.

---

## PART 5: Application Layer Standards
- **Use Cases**: One class per use case (e.g., \`ResolveContextUseCase\`).
- **CQRS**: Commands modify state; Queries read state. Segregated logically.
- **Dependency Injection**: Constructor-based injection exclusively.
- **DTOs**: Validated via Zod on the boundary, mapped to Entities internally.

### Diagram: API Request Lifecycle
\`\`\`mermaid
sequenceDiagram
    participant C as Client
    participant P as Presentation (Controller)
    participant A as Application (UseCase)
    participant D as Domain (Entity)
    participant I as Infrastructure (Repository)
    
    C->>P: POST /api/resource
    P->>A: execute(Command)
    A->>D: validate() & create()
    A->>I: save(Entity)
    I-->>A: Result
    A-->>P: DTO
    P-->>C: 201 Created
\`\`\`

---

## PART 6: Infrastructure Standards
- **ORM Isolation**: Prisma is confined to Infrastructure. Domain knows nothing of Prisma.
- **Caching**: Abstracted via interfaces (e.g., \`IContextCache\`).
- **External Providers**: Always wrapped in Adapters (e.g., \`JwtTokenProvider\`).
- **Secrets**: Managed via environment variables mapped to Infrastructure config.

---

## PART 7: API Standards
- **REST**: Noun-based routing.
- **OpenAPI**: Swagger configured on all routes.
- **Responses**: Standard Envelope (\`data\`, \`error\`, \`meta\`).
- **Idempotency**: Required for mutations. Correlation IDs mandatory.

---

## PART 8: Workspace Standards

### Diagram: Workspace Resolution Flow
\`\`\`mermaid
sequenceDiagram
    participant U as User
    participant A as API
    participant B as Business Context
    participant W as Workspace Engine
    
    U->>A: GET /workspace/profile
    A->>B: Resolve Context (Tenant/Role)
    B-->>A: ExecutionContext
    A->>W: Resolve Workspace(ExecutionContext)
    W-->>U: Workspace Profile Metadata (JSON)
\`\`\`
- Metadata driven, Zero UI logic in the backend.

---

## PART 9: Business Context Standards

### Diagram: Business Context Flow
\`\`\`mermaid
sequenceDiagram
    participant U as User
    participant M as ContextMiddleware
    participant E as ExecutionContext
    
    U->>M: HTTP Request
    M->>E: Get Active Context
    U->>E: SwitchWorkspaceCommand
    E->>E: Update activeContext, push to History
    E-->>U: New Context Resolved
\`\`\`
- Context dictates Execution Scope. Immutability enforced via \`contextVersion\`.

---

## PART 10: Security Standards
### Diagram: Authentication Flow (Login Flow)
\`\`\`mermaid
sequenceDiagram
    participant U as User
    participant C as AuthController
    participant P as AuthenticationProvider
    participant T as TokenService
    
    U->>C: POST /auth/login (credentials)
    C->>P: verify(credentials)
    P-->>C: User Valid
    C->>T: generateTokens(User)
    T-->>C: JWT Pair
    C-->>U: Access & Refresh Tokens
\`\`\`
- **Zero Trust**: Every request validated by ContextMiddleware and AuthorizationMiddleware.

---

## PART 11: Observability Standards
- Trace IDs and Request IDs propagated via \`ExecutionContext\`. Logs must contain Tenant and Workspace IDs.

---

## PART 12: Performance Standards
- Caching utilized on heavy read pipelines. Background jobs for event publishing.

---

## PART 13: AI Standards
- \`AIContext\` reserved on BusinessContext and WorkspaceProfile.
- Identifies \`predictiveScore\` and \`recommendedWidgets\`.

---

## PART 14: Extension Framework
- Modules and Widgets registered dynamically via \`WorkspaceManifest\`.

### Diagram: Module Registration Flow
\`\`\`mermaid
graph LR
    Manifest[Workspace Manifest] --> ModuleReg[Module Registry]
    Manifest --> WidgetReg[Widget Registry]
    ModuleReg --> UILoader[Frontend Loader]
\`\`\`

---

## PART 15: Release Governance
- Strict Semantic Versioning. Builds mapped to tags (e.g., \`BUILD-002C.00\` -> \`v1.0.0\`). Github Releases triggered by Tags.

---

## PART 16: Architectural Decision Records
Located in \`docs/01_PLATFORM_ARCHITECTURE/adr/\`.
- ADR-001 Clean Architecture
- ADR-002 Domain Driven Design
- ADR-003 Metadata Driven Workspace
- ADR-004 Business Context Engine
- ADR-005 Configurable Organization Hierarchy
- ADR-006 Authentication Provider Model
- ADR-007 Platform Kernel

---

## PART 17: Roadmap
1. Platform Kernel (Complete)
2. Identity & Access (Complete)
3. Architecture Governance (Complete)
4. Platform Core (Next)
5. Shared Business Services
6. Business Modules
7. AI Platform

---

## Enterprise Engineering Principles
- **DRY (Don't Repeat Yourself)**, **SOLID**.
- Code must be easily read and understood by onboarding engineers.
- Explicit is better than implicit.

## Coding Standards
- Zero \`any\`, ESLint strict, Prettier format. No exceptions.

## Module Lifecycle
- Initialization -> Resolution -> Execution -> Teardown.

### Diagram: Domain Event Publishing
\`\`\`mermaid
sequenceDiagram
    participant E as Entity
    participant U as UseCase
    participant P as EventPublisher
    
    U->>E: mutateState()
    E->>E: addDomainEvent(Event)
    U->>P: publish(E.getEvents())
    P-->>U: Async Dispatch
\`\`\`

### Diagram: Workflow Execution
\`\`\`mermaid
sequenceDiagram
    participant W as WorkflowEngine
    participant S as Step
    participant E as EventBus
    
    W->>S: executeStep()
    S-->>W: result
    W->>E: emit(WorkflowProgressed)
\`\`\`

## Platform Error Catalogue
- All errors extend \`DomainException\`. E.g., \`InvalidContextException\`. Return standard error envelopes.

## Repository Governance
- Single mono-repo strategy (pnpm workspace), bounded contexts mapped to packages.

## Documentation Standards
- Markdown mandatory. Diagramming via Mermaid. ADRs for all major decisions.

---
*END OF SPECIFICATION*

# BUILD-004.00: Business Capability Architecture Specification
**Version:** 2.0
**Status:** Approved (v1.0.0-platform-core Baseline)

---

## 1. Business Vision
DIGIREACH ONE is a unified, provider-agnostic, and AI-first Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) ecosystem. The platform abstracts away physical infrastructure and unifies distinct business capabilities into a single, cohesive, event-driven mesh powered by Platform Core v1.0.

## 2. Business Capability Model
The Business Capability Model establishes strict boundaries between functional domains. Each capability acts as an autonomous module that relies exclusively on Platform Core Engines (Auth, Context, Workspace, Org, Document, Search, Workflow, Rules, Scheduler, AI) for cross-cutting concerns. Business logic is strictly segregated; capabilities communicate exclusively via Domain Events and Shared Master Data (via abstraction, not direct database access).

## 3. Capability Map
- **Customer:** CRM, Marketing, Sales, Customer Service
- **Operations:** Finance, HRMS, Inventory, Procurement, Manufacturing, Projects
- **Industry Specific:** Healthcare, Education, Legal
- **Intelligence:** AI Business Capabilities

## 4. Business Domains
All domains follow Clean Architecture and DDD principles. No domain directly queries the tables of another domain. Integration is achieved through the Business Event Catalog and the Enterprise Workflow/Rules engines.

## 5. CRM Domain
**Boundaries & Entities:**
- **Lead Management:** Capture, qualification, routing, and tracking.
- **Contact Management:** Universal individual records.
- **Account Management:** Universal organizational records.
- **Opportunity Management:** Deal tracking, stages, and probability.
- **Sales Pipeline:** Forecasting, visualization, and stage velocity.
- **Activities & Tasks:** Universal actionable items across the CRM.
- **Meetings & Calendar:** Unified scheduling leveraging Platform Scheduler Engine.
- **Notes & Attachments:** Anchored to the Platform Document Engine.
- **Products & Price Books:** Sales catalog and dynamic pricing.
- **Quotes & Sales Orders:** Financial initiation points.
- **Customer Timeline & Customer 360:** Unified chronological view of all cross-domain interactions.
- **AI CRM Assistant:** Context-aware deal guidance, email drafting, and sentiment analysis.

## 6. Marketing Domain
**Boundaries & Entities:**
- **Campaigns:** Multi-channel coordination.
- **Audience & Segmentation:** Dynamic Rules-Engine powered lists.
- **Landing Pages:** Form capture and attribution.
- **Channels:** Email, SMS, WhatsApp, Meta, Google Ads, SEO.
- **Content:** Digital asset management via Document Engine.
- **Automation & Lead Scoring:** Orchestrated by Platform Workflow & Rules Engines.

## 7. Sales Domain
Focuses on the execution of the transaction. (Often overlaps with CRM Opportunity, but isolated for POS, Retail, and B2B ordering logic).

## 8. Customer Service Domain
Case management, ticketing, SLAs, knowledge base, and omnichannel routing.

## 9. Finance Domain
**Boundaries & Entities:**
- **Invoices & Payments:** Billing and collections.
- **Expenses:** Employee and organizational cost tracking.
- **Accounting:** General Ledger, Chart of Accounts, Journal Entries.
- **Tax:** Regional rules mapping (leveraging Rules Engine).
- **Budgets & Assets:** Capital expenditure and depreciation.

## 10. HRMS Domain
**Boundaries & Entities:**
- **Employees:** Unified personnel records.
- **Attendance & Leave:** Tracking, accruals, and approvals (via Workflow Engine).
- **Payroll:** Compensation execution.
- **Recruitment, Performance, Training:** Lifecycle management.

## 11. Inventory Domain
**Boundaries & Entities:**
- **Warehouses:** Physical/logical locations.
- **Products & Stock:** Real-time quantity, serialization, and batch tracking.
- **Purchase & Sales:** Inbound/Outbound fulfillment.
- **Transfers & Adjustments:** Inter-warehouse logistics and audits.

## 12. Procurement Domain
Vendor management, Purchase Orders, RFQs, and supply chain tracking.

## 13. Manufacturing Domain
Bill of Materials (BOM), work orders, routing, and machine center tracking.

## 14. Projects Domain
WBS, tasks, timesheets, resource allocation, and project billing.

## 15. Healthcare Domain
Patient records, appointments, EMR/EHR compliance, and clinical notes.

## 16. Education Domain
Students, courses, grading, admissions, and alumni management.

## 17. Legal Domain
Matter management, contracts, intellectual property, and compliance.

## 18. AI Business Capabilities
Universal orchestration for predictive analytics, generative content, OCR, forecasting, and conversational UI across all modules via the AI Orchestration Engine.

## 19. Cross Module Integration Standards
Modules integrate purely through **Domain Events** (e.g., `InvoicePaidEvent` triggers `OrderFulfillmentWorkflow`). No hardcoded dependencies.

## 20. Shared Business Objects
- `OrganizationNode` (Platform Org Engine)
- `User` (Platform Auth Engine)
- `Document` (Platform Document Engine)
- `ExecutionContext` (Platform Context Engine)

## 21. Master Data Strategy
Data representing foundational business truth (e.g., Currency, Countries, Global Products) resides in a Master Data domain, accessible to all modules via read-only synchronized replicas or centralized gRPC/API fetching.

## 22. Business Event Catalog
*Examples:*
- **CRM:** `LeadCreated`, `OpportunityWon`, `QuoteAccepted`
- **Finance:** `InvoiceGenerated`, `PaymentReceived`, `BudgetExceeded`
- **Inventory:** `StockDepleted`, `TransferCompleted`
- **HRMS:** `EmployeeOnboarded`, `LeaveApproved`

## 23. Business Workflow Standards
Business workflows MUST NOT be hardcoded. All sequential or approval-based logic must utilize the Platform Workflow Engine.

## 24. Business Rule Standards
Pricing discounts, lead scoring, and tax calculations MUST utilize the Platform Rules Engine via metadata Definitions.

## 25. Business API Standards
RESTful and GraphQL standards. Enforce multi-tenancy inherently using the `ExecutionContext`.

## 26. Business UI Standards
React/Next.js frontend. Driven by unified component library. Micro-frontend architecture allowing seamless capability toggling.

## 27. Reporting Standards
Unified Data Warehouse extraction. Reports defined as metadata.

## 28. Analytics Standards
Telemetry via OpenTelemetry. Business KPIs calculated asynchronously.

## 29. Business AI Standards
All AI requests (summarization, generation) MUST flow through the Platform AI Orchestration Engine to enforce Quotas, Cost tracking, and Policy management.

## 30. Capability Roadmap
- **Phase 1:** CRM, Marketing, Sales, Inventory, Finance (Core ERP).
- **Phase 2:** HRMS, Procurement, Projects.
- **Phase 3:** Manufacturing, Healthcare, Education, Legal.

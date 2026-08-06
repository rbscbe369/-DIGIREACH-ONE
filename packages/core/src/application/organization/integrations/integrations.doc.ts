/**
 * Integrations Documentation
 *
 * - Identity: Resolves Tenant mappings to Organizations.
 * - Business Context: Injects the active OrganizationNode into the execution context.
 * - Workspace: Resolves metadata templates based on the Organization's Industry Profile.
 * - Workflow: Consumes OrganizationNodeAddedEvent to trigger provisioning.
 * - Audit: Listens to all Organization events for compliance logging.
 * - Search: Indexes Organization Nodes for global discovery.
 */
export const IntegrationsDoc = true;

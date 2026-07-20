// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="introduction.html"><strong aria-hidden="true">1.</strong> Introduction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="architecture.html"><strong aria-hidden="true">2.</strong> Architecture</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design.html"><strong aria-hidden="true">3.</strong> Design</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/portal-view.html"><strong aria-hidden="true">3.1.</strong> Portal View</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/portal-view/multiple-environment.html"><strong aria-hidden="true">3.1.1.</strong> Mutliple Environment</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/portal-view/mcp-registry.html"><strong aria-hidden="true">3.1.2.</strong> MCP Registry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/portal-view/too-many-pages-forms.html"><strong aria-hidden="true">3.1.3.</strong> Too Many Pages/Forms</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/portal-view/config-update-page.html"><strong aria-hidden="true">3.1.4.</strong> Config Update Page</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/portal-view/config-snapshot-output-comparison.html"><strong aria-hidden="true">3.1.5.</strong> Config Snapshot Output and Comparison</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/portal-view/rust-controller-logging.html"><strong aria-hidden="true">3.1.6.</strong> Rust Controller Logging</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/portal-view/human-task-ui.html"><strong aria-hidden="true">3.1.7.</strong> Human Task UI</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/portal-view/user-filter.html"><strong aria-hidden="true">3.1.8.</strong> User Filter</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/portal-view/contextual-help-links.html"><strong aria-hidden="true">3.1.9.</strong> Contextual Help Links</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/portal-view/event-processing-notifications.html"><strong aria-hidden="true">3.1.10.</strong> Event Processing Notifications</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/portal-view/api-marketplace-catalog.html"><strong aria-hidden="true">3.1.11.</strong> API Marketplace Catalog</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/portal-view/agent-registration.html"><strong aria-hidden="true">3.1.12.</strong> AI Agent Registration</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/oauth-kafka.html"><strong aria-hidden="true">3.2.</strong> OAuth Kafka</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/oauth-kafka/token-exchange.html"><strong aria-hidden="true">3.2.1.</strong> Token Exchange</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/light-oauth.html"><strong aria-hidden="true">3.3.</strong> Light OAuth</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/light-oauth/ipv6-support.html"><strong aria-hidden="true">3.3.1.</strong> IPv6 Support</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/light-controller.html"><strong aria-hidden="true">3.4.</strong> Light Controller</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/light-controller/ipv6-support.html"><strong aria-hidden="true">3.4.1.</strong> IPv6 Support</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/light-controller/webtransport-rkyv.html"><strong aria-hidden="true">3.4.2.</strong> Controller Transport and Codec Profiles</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/agent-skill-tool-discovery.html"><strong aria-hidden="true">3.5.</strong> Agent Skill And API Endpoint Discovery</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/agent-api-compose.html"><strong aria-hidden="true">3.6.</strong> Agent API Compose And Multi-Agent Workflow</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/agent-memory-event-refactor.html"><strong aria-hidden="true">3.7.</strong> Agent Memory Event Refactor</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/tool-description-embedding.html"><strong aria-hidden="true">3.8.</strong> Tool Description Embedding Population</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/workflow-editor.html"><strong aria-hidden="true">3.9.</strong> Workflow Editor</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/catalog-scope.html"><strong aria-hidden="true">3.10.</strong> Portal Catalog Scope</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/oauth-audit.html"><strong aria-hidden="true">3.11.</strong> OAuth Audit</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/multi-tenant.html"><strong aria-hidden="true">3.12.</strong> Multi-Tenant</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/system-integration.html"><strong aria-hidden="true">3.13.</strong> System Integration</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/portal-event.html"><strong aria-hidden="true">3.14.</strong> Portal Event</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/reference_table.html"><strong aria-hidden="true">3.15.</strong> Reference Table</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/authentication-authorization.html"><strong aria-hidden="true">3.16.</strong> Authentication Authorization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/fine-grained-authorization.html"><strong aria-hidden="true">3.17.</strong> Fine-Grained Authorization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/light-portal-fga.html"><strong aria-hidden="true">3.18.</strong> Light Portal Fine-Grained Authorization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/claim-org-role-bootstrap.html"><strong aria-hidden="true">3.19.</strong> Claim Org Role Bootstrap</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/master-oauth-host-tenant-login.html"><strong aria-hidden="true">3.20.</strong> Master OAuth Host Tenant Login</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/schema-registry.html"><strong aria-hidden="true">3.21.</strong> Schema Registry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/yaml-rule-registry.html"><strong aria-hidden="true">3.22.</strong> YAML Rule Registry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/react-schema-form.html"><strong aria-hidden="true">3.23.</strong> React Schema Form</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/user-management.html"><strong aria-hidden="true">3.24.</strong> User Management</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/private-messages.html"><strong aria-hidden="true">3.25.</strong> Private Messages</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/config-server.html"><strong aria-hidden="true">3.26.</strong> Config Server</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/sid-host-verification.html"><strong aria-hidden="true">3.27.</strong> SID and Host Verification</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/instance-clone.html"><strong aria-hidden="true">3.28.</strong> Instance Clone</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/instance-file.html"><strong aria-hidden="true">3.29.</strong> Instance File Config Phase</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/deployment.html"><strong aria-hidden="true">3.30.</strong> Deployment</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/light-portal-install.html"><strong aria-hidden="true">3.31.</strong> Light Portal Install</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/timestamp.html"><strong aria-hidden="true">3.32.</strong> Timestamp</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/tag.html"><strong aria-hidden="true">3.33.</strong> Tag</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/uuid.html"><strong aria-hidden="true">3.34.</strong> UUID</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/composite-surrogate.html"><strong aria-hidden="true">3.35.</strong> Composit key vs Surrogate UUID key</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/atomic-composite.html"><strong aria-hidden="true">3.36.</strong> Atomic Events vs Composite Events</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/database-concurrency.html"><strong aria-hidden="true">3.37.</strong> Database Concurrency</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/msal-light-oauth.html"><strong aria-hidden="true">3.38.</strong> MSAL Light OAuth Integration</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/registration-onboarding.html"><strong aria-hidden="true">3.39.</strong> User Registration and Onboarding</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/optimistic-pessimistic-ui.html"><strong aria-hidden="true">3.40.</strong> Optimistic vs Pessimistic UI</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/soft-hard-delete.html"><strong aria-hidden="true">3.41.</strong> Soft Delete vs Hard Delete</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/tenant-migration.html"><strong aria-hidden="true">3.42.</strong> Tenant Migration</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/product-version-config.html"><strong aria-hidden="true">3.43.</strong> Product Version Config</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/pv-config-mapping.html"><strong aria-hidden="true">3.44.</strong> Product Version Config Mapping Automation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/release-workflow.html"><strong aria-hidden="true">3.45.</strong> Release Workflow</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/optimistic-concurrency-control.html"><strong aria-hidden="true">3.46.</strong> Optimistic Concurrency Control</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/cascade-soft-delete.html"><strong aria-hidden="true">3.47.</strong> Cascade Soft Delete</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/query-active-rows.html"><strong aria-hidden="true">3.48.</strong> Query Active Rows</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/distributed-scheduler.html"><strong aria-hidden="true">3.49.</strong> Distributed Scheduler</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/postgres-pubsub.html"><strong aria-hidden="true">3.50.</strong> Postgres Pub/Sub</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/coordination-comparison.html"><strong aria-hidden="true">3.51.</strong> Coordination Comparison</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/kafka-event-processor.html"><strong aria-hidden="true">3.52.</strong> Kafka Event Processor</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/event-replay.html"><strong aria-hidden="true">3.53.</strong> Event Replay</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/event-replay-operations-runbook.html"><strong aria-hidden="true">3.53.1.</strong> Operations Runbook</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/event-replay-rollout-runbook.html"><strong aria-hidden="true">3.53.2.</strong> Backfill and Rollout Runbook</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/config-snapshot.html"><strong aria-hidden="true">3.54.</strong> Config Snapshot</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/config-clone.html"><strong aria-hidden="true">3.55.</strong> Config Clone</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/oauth-state.html"><strong aria-hidden="true">3.56.</strong> OAuth State</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/auth-client-secret-regeneration.html"><strong aria-hidden="true">3.57.</strong> Auth Client Secret Regeneration</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/event-promotion.html"><strong aria-hidden="true">3.58.</strong> Event Promotion</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/deployment-workflow.html"><strong aria-hidden="true">3.59.</strong> Deployment Workflow</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/light-oauth-agentcore-oidc-discovery.html"><strong aria-hidden="true">3.60.</strong> OAuth OIDC Discovery</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="design/openapi-endpoint.html"><strong aria-hidden="true">3.61.</strong> OpenAPI Endpoint Parameter Mapping</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/index.html"><strong aria-hidden="true">4.</strong> Help</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/index.html"><strong aria-hidden="true">4.1.</strong> Pages</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/task-center.html"><strong aria-hidden="true">4.1.1.</strong> Task Center</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/ref-table-admin.html"><strong aria-hidden="true">4.1.2.</strong> Reference Table Admin</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/list-rule.html"><strong aria-hidden="true">4.1.3.</strong> List Rule</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/rule-admin.html"><strong aria-hidden="true">4.1.4.</strong> Rule Admin</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/user-session.html"><strong aria-hidden="true">4.1.5.</strong> User Session</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/api-catalog.html"><strong aria-hidden="true">4.1.6.</strong> API Catalog</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/service-endpoint.html"><strong aria-hidden="true">4.1.7.</strong> Service Endpoint</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/workflow-catalog.html"><strong aria-hidden="true">4.1.8.</strong> Workflow Catalog</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/schema-catalog.html"><strong aria-hidden="true">4.1.9.</strong> Schema Catalog</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/llm-model-control-plane.html"><strong aria-hidden="true">4.1.10.</strong> LLM Model Control Plane</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/skill-workspace.html"><strong aria-hidden="true">4.1.11.</strong> Skill Workspace</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/api-admin.html"><strong aria-hidden="true">4.1.12.</strong> API Admin</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/api-detail.html"><strong aria-hidden="true">4.1.13.</strong> API Detail</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/app-admin.html"><strong aria-hidden="true">4.1.14.</strong> App Admin</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/oauth-client.html"><strong aria-hidden="true">4.1.15.</strong> OAuth Client</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/oauth-client-token.html"><strong aria-hidden="true">4.1.16.</strong> OAuth Client Token</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/instance-admin.html"><strong aria-hidden="true">4.1.17.</strong> Instance Admin</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/instance-clone.html"><strong aria-hidden="true">4.1.18.</strong> Clone an Instance</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/runtime-instance.html"><strong aria-hidden="true">4.1.19.</strong> Runtime Instance</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/instance-api.html"><strong aria-hidden="true">4.1.20.</strong> Instance API</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/instance-api-path-prefix.html"><strong aria-hidden="true">4.1.21.</strong> Instance API Path Prefix</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/instance-app.html"><strong aria-hidden="true">4.1.22.</strong> Instance App</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/instance-app-api.html"><strong aria-hidden="true">4.1.23.</strong> Instance App API</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/schedule-admin.html"><strong aria-hidden="true">4.1.24.</strong> Schedule Admin</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/pages/workflow-definition.html"><strong aria-hidden="true">4.1.25.</strong> Workflow Definition</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/index.html"><strong aria-hidden="true">4.2.</strong> Forms</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/create-api.html"><strong aria-hidden="true">4.2.1.</strong> Create API</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/update-api.html"><strong aria-hidden="true">4.2.2.</strong> Update API</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/create-api-version.html"><strong aria-hidden="true">4.2.3.</strong> Create API Version</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/update-api-version.html"><strong aria-hidden="true">4.2.4.</strong> Update API Version</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/create-app.html"><strong aria-hidden="true">4.2.5.</strong> Create App</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/update-app.html"><strong aria-hidden="true">4.2.6.</strong> Update App</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/create-client.html"><strong aria-hidden="true">4.2.7.</strong> Create Client</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/update-client.html"><strong aria-hidden="true">4.2.8.</strong> Update Client</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/create-client-token.html"><strong aria-hidden="true">4.2.9.</strong> Create Client Token</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/create-instance.html"><strong aria-hidden="true">4.2.10.</strong> Create Instance</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/update-instance.html"><strong aria-hidden="true">4.2.11.</strong> Update Instance</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/create-instance-api.html"><strong aria-hidden="true">4.2.12.</strong> Create Instance API</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/create-instance-api-path-prefix.html"><strong aria-hidden="true">4.2.13.</strong> Create Instance API Path Prefix</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/update-instance-api-path-prefix.html"><strong aria-hidden="true">4.2.14.</strong> Update Instance API Path Prefix</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/create-instance-app.html"><strong aria-hidden="true">4.2.15.</strong> Create Instance App</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/create-instance-app-api.html"><strong aria-hidden="true">4.2.16.</strong> Create Instance App API</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/create-runtime-instance.html"><strong aria-hidden="true">4.2.17.</strong> Create Runtime Instance</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/update-runtime-instance.html"><strong aria-hidden="true">4.2.18.</strong> Update Runtime Instance</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/create-schedule.html"><strong aria-hidden="true">4.2.19.</strong> Create Schedule</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/update-schedule.html"><strong aria-hidden="true">4.2.20.</strong> Update Schedule</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/create-wf-definition.html"><strong aria-hidden="true">4.2.21.</strong> Create Workflow Definition</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/forms/update-wf-definition.html"><strong aria-hidden="true">4.2.22.</strong> Update Workflow Definition</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/tasks/index.html"><strong aria-hidden="true">4.3.</strong> Tasks</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/tasks/mcp-onboard-api.html"><strong aria-hidden="true">4.3.1.</strong> Onboard API to MCP Gateway</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/tasks/register-standalone-mcp-server.html"><strong aria-hidden="true">4.3.2.</strong> Register Standalone MCP Server</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/tasks/publish-api.html"><strong aria-hidden="true">4.3.3.</strong> Publish API</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/tasks/register-ai-agent.html"><strong aria-hidden="true">4.3.4.</strong> Register AI Agent</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/tasks/manage-instance.html"><strong aria-hidden="true">4.3.5.</strong> Manage Instance</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/tasks/manage-client-app.html"><strong aria-hidden="true">4.3.6.</strong> Manage Client App</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/tasks/manage-workflow.html"><strong aria-hidden="true">4.3.7.</strong> Manage Workflow</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/index.html"><strong aria-hidden="true">4.4.</strong> Configs</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/access-control/index.html"><strong aria-hidden="true">4.4.1.</strong> Access Control</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/access-control/enabled.html"><strong aria-hidden="true">4.4.1.1.</strong> Access Control Enabled</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/access-control/access-rule-logic.html"><strong aria-hidden="true">4.4.1.2.</strong> Access Control Access Rule Logic</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/access-control/default-deny.html"><strong aria-hidden="true">4.4.1.3.</strong> Access Control Default Deny</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/access-control/default-include.html"><strong aria-hidden="true">4.4.1.4.</strong> Access Control Default Include</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/access-control/skip-path-prefixes.html"><strong aria-hidden="true">4.4.1.5.</strong> Access Control Skip Path Prefixes</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/logging/filter.html"><strong aria-hidden="true">4.4.2.</strong> Logging Filter</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/msal-auth/cookie-same-site.html"><strong aria-hidden="true">4.4.3.</strong> MSAL Auth Cookie SameSite</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/msal-auth/enabled.html"><strong aria-hidden="true">4.4.4.</strong> MSAL Auth Enabled</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/msal-auth/login-path.html"><strong aria-hidden="true">4.4.5.</strong> MSAL Auth Login Path</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/msal-auth/logout-path.html"><strong aria-hidden="true">4.4.6.</strong> MSAL Auth Logout Path</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/msal-auth/cookie-domain.html"><strong aria-hidden="true">4.4.7.</strong> MSAL Auth Cookie Domain</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/msal-auth/cookie-path.html"><strong aria-hidden="true">4.4.8.</strong> MSAL Auth Cookie Path</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/msal-auth/cookie-secure.html"><strong aria-hidden="true">4.4.9.</strong> MSAL Auth Cookie Secure</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/msal-auth/session-timeout.html"><strong aria-hidden="true">4.4.10.</strong> MSAL Auth Session Timeout</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/handler/index.html"><strong aria-hidden="true">4.4.11.</strong> Handler Config</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/handler/paths.html"><strong aria-hidden="true">4.4.11.1.</strong> Handler Path</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/websocket-router/index.html"><strong aria-hidden="true">4.4.12.</strong> WebSocket Router</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/websocket-router/defaultProtocol.html"><strong aria-hidden="true">4.4.12.1.</strong> WebSocket Default Protocol</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/websocket-router/defaultEnvTag.html"><strong aria-hidden="true">4.4.12.2.</strong> WebSocket Default Env Tag</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/websocket-router/pathPrefixService.html"><strong aria-hidden="true">4.4.12.3.</strong> WebSocket Path Prefix Service</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/websocket-router/originAllowlist.html"><strong aria-hidden="true">4.4.12.4.</strong> WebSocket Origin Allowlist</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/websocket-router/applicationProtocols.html"><strong aria-hidden="true">4.4.12.5.</strong> WebSocket Application Protocols</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/websocket-router/preserveRoutingHeaders.html"><strong aria-hidden="true">4.4.12.6.</strong> WebSocket Preserve Routing Headers</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/websocket-router/idleTimeoutMs.html"><strong aria-hidden="true">4.4.12.7.</strong> WebSocket Idle Timeout</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/websocket-router/maxConnectionDurationMs.html"><strong aria-hidden="true">4.4.12.8.</strong> WebSocket Maximum Connection Duration</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/websocket-router/maxActiveConnections.html"><strong aria-hidden="true">4.4.12.9.</strong> WebSocket Maximum Active Connections</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/websocket-router/maxUpgradeRequestsPerSecond.html"><strong aria-hidden="true">4.4.12.10.</strong> WebSocket Maximum Upgrade Rate</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/index.html"><strong aria-hidden="true">4.4.13.</strong> MCP Router</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/enabled.html"><strong aria-hidden="true">4.4.13.1.</strong> MCP Enabled Flags</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/path.html"><strong aria-hidden="true">4.4.13.2.</strong> MCP Path</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/max-sessions.html"><strong aria-hidden="true">4.4.13.3.</strong> MCP Maximum Sessions</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/max-sessions-per-client.html"><strong aria-hidden="true">4.4.13.4.</strong> MCP Maximum Sessions Per Client</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/max-request-body-bytes.html"><strong aria-hidden="true">4.4.13.5.</strong> MCP Maximum Request Body</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/max-response-body-bytes.html"><strong aria-hidden="true">4.4.13.6.</strong> MCP Maximum Response Body</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/max-json-depth.html"><strong aria-hidden="true">4.4.13.7.</strong> MCP Maximum JSON Depth</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/origin-allowlist.html"><strong aria-hidden="true">4.4.13.8.</strong> MCP Origin Allowlist</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/default-dialect.html"><strong aria-hidden="true">4.4.13.9.</strong> MCP Schema Default Dialect</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/allow-external-refs.html"><strong aria-hidden="true">4.4.13.10.</strong> MCP Schema External References</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/max-schema-bytes.html"><strong aria-hidden="true">4.4.13.11.</strong> MCP Maximum Schema Bytes</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/max-depth.html"><strong aria-hidden="true">4.4.13.12.</strong> MCP Maximum Schema Depth</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/max-subschemas.html"><strong aria-hidden="true">4.4.13.13.</strong> MCP Maximum Subschemas</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/max-concurrent-validations.html"><strong aria-hidden="true">4.4.13.14.</strong> MCP Concurrent Schema Validations</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/validation-watchdog-ms.html"><strong aria-hidden="true">4.4.13.15.</strong> MCP Schema Validation Watchdog</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/versions.html"><strong aria-hidden="true">4.4.13.16.</strong> MCP Protocol Versions</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/discover-ttl-ms.html"><strong aria-hidden="true">4.4.13.17.</strong> MCP Discover TTL</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/discover-cache-scope.html"><strong aria-hidden="true">4.4.13.18.</strong> MCP Discover Cache Scope</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/tools-list-ttl-ms.html"><strong aria-hidden="true">4.4.13.19.</strong> MCP Tools List TTL</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/tools-list-cache-scope.html"><strong aria-hidden="true">4.4.13.20.</strong> MCP Tools List Cache Scope</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/max-discover-cache-entries.html"><strong aria-hidden="true">4.4.13.21.</strong> MCP Maximum Discover Cache Entries</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/max-tools-list-cache-entries.html"><strong aria-hidden="true">4.4.13.22.</strong> MCP Maximum Tools List Cache Entries</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/max-tools-list-items.html"><strong aria-hidden="true">4.4.13.23.</strong> MCP Maximum Tools List Items</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/max-concurrent-requests.html"><strong aria-hidden="true">4.4.13.24.</strong> MCP Maximum Concurrent Requests</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/max-concurrent-requests-per-principal.html"><strong aria-hidden="true">4.4.13.25.</strong> MCP Concurrent Requests Per Principal</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/max-concurrent-backend-calls-per-target.html"><strong aria-hidden="true">4.4.13.26.</strong> MCP Concurrent Backend Calls Per Target</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/max-subscriptions.html"><strong aria-hidden="true">4.4.13.27.</strong> MCP Maximum Subscriptions</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/max-subscriptions-per-principal.html"><strong aria-hidden="true">4.4.13.28.</strong> MCP Subscriptions Per Principal</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/max-subscription-duration-ms.html"><strong aria-hidden="true">4.4.13.29.</strong> MCP Maximum Subscription Duration</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/stateless-to-legacy-bridge.html"><strong aria-hidden="true">4.4.13.30.</strong> MCP Stateless To Legacy Bridge</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/configs/mcp-router/tools.html"><strong aria-hidden="true">4.4.13.31.</strong> MCP Tools</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/concepts/index.html"><strong aria-hidden="true">4.5.</strong> Concepts</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/concepts/ownership-and-positions.html"><strong aria-hidden="true">4.5.1.</strong> Ownership And Positions</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/concepts/hosts-and-user-hosts.html"><strong aria-hidden="true">4.5.2.</strong> Hosts And User Hosts</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/concepts/api-versioning.html"><strong aria-hidden="true">4.5.3.</strong> API Versioning</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="help/portal-view/concepts/oauth-client-ownership.html"><strong aria-hidden="true">4.5.4.</strong> OAuth Client Ownership</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="implementation.html"><strong aria-hidden="true">5.</strong> Implementation</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="implementation/local-portal-setup.html"><strong aria-hidden="true">5.1.</strong> Local Portal Setup</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="implementation/signin.html"><strong aria-hidden="true">5.2.</strong> Sign In</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="implementation/login-view.html"><strong aria-hidden="true">5.3.</strong> Login View</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="implementation/services.html"><strong aria-hidden="true">5.4.</strong> Services</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="implementation/portal-view.html"><strong aria-hidden="true">5.5.</strong> Portal View</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="implementation/portal-view/oauth-state-verification.html"><strong aria-hidden="true">5.5.1.</strong> OAuth State Verification</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="configuration.html"><strong aria-hidden="true">6.</strong> Configuration</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="config/light-gateway.html"><strong aria-hidden="true">6.1.</strong> light-gateway</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="config/light-reference.html"><strong aria-hidden="true">6.2.</strong> light-reference</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="test.html"><strong aria-hidden="true">7.</strong> Test</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="test/integration-test.html"><strong aria-hidden="true">7.1.</strong> Integration Test</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="license.html"><strong aria-hidden="true">8.</strong> License</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="license/bronze.html"><strong aria-hidden="true">8.1.</strong> Bronze</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="license/silver.html"><strong aria-hidden="true">8.2.</strong> Silver</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="license/gold.html"><strong aria-hidden="true">8.3.</strong> Gold</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();


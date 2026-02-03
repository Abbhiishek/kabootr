Phase 2 Details — Contacts, Templates, Transactional API
Date Range: Weeks 3-4

Overview

- Phase 2 expands core capabilities: Contacts management, Markdown-based templates, and a basic transactional API for sending single emails using those templates.
- Build on Phase 1 foundation (auth, DB schema, tRPC API, and UI scaffolding).

Goals

- Implement Contacts CRUD (create, read, update, delete) and bulk import.
- Implement Templates (markdown-based, variables extraction, HTML preview).
- Implement a minimal Transactional API: endpoint to send a single email using a template; queue integration planned for Phase 3.
- Wire templates into campaigns; expose endpoints to preview templates with variable substitution.
- Establish basic analytics hooks for transactional sends (pending events in Phase 2).
- Minor UI improvements to reflect templates and contacts work.

Scope

- Data model: minor enhancements to support templates and contacts (variables, metadata).
- API: new endpoints for Contacts and Templates; template preview; update existing segments/campaign flows where relevant.
- Services: integrate template rendering (Markdown to HTML); hook templates into transactional sending path.
- Queue: start planning for BullMQ-based queue in Phase 3.

Architecture Considerations

- Frontend: add UI pages for Contacts and Templates; Template editor displays Markdown with live HTML preview.
- Backend:
  - Templates: store markdown_content and html_preview; extract variables with pattern {{var}}.
  - Contacts: support customFields JSON; status.
  - Transactional API: endpoint to send a single email or test render; uses template_id or inline html.
  - Telemetry: capture basic events (sent/delivered/opened/clicked) for analytics.

API Endpoints (Proposed)

- POST /api/v1/contacts
  body: { email, firstName?, lastName?, customFields? }
- GET /api/v1/contacts
- PUT /api/v1/contacts/:id
- DELETE /api/v1/contacts/:id
- POST /api/v1/templates
  body: { name, subject, markdownContent, variables? }
- GET /api/v1/templates
- GET /api/v1/templates/:id/preview
- POST /api/v1/templates/:id/preview
- POST /api/v1/emails/send (Transactional)
  body: { to, subject, templateId, variables, fromEmail, fromName }
- GET /api/v1/analytics/overview (baseline for Phase 2)

Templates: Rendering

- Markdown -> HTML: convert with Markdown renderer; inline CSS friendly for emails.
- Variables: extract using mustache-like syntax ({{name}}) and render with provided values.
- Preview: endpoint returns HTML preview.

Data Model Highlights (Phase 2)

- templates
  - fields: id, organization_id, name, subject, markdown_content, html_preview, variables, created_at, updated_at
- contacts
  - fields: id, organization_id, email, first_name, last_name, status, custom_fields, segments, created_at, updated_at

Migration Plan

- Phase 2.1: Add new tables/columns if needed for templates and contacts; adjust constraints.
- Phase 2.2: Run drizzle-kit migrations; ensure backward compatibility.

Testing & QA

- Unit tests for template rendering and variable substitution.
- Integration tests for /api/v1/templates and /api/v1/contacts endpoints.
- Manual QA: end-to-end flow from template creation to sending test email.

Milestones

- Week 3: Implement Contacts API, Templates API, and Template Preview.
- Week 4: Implement transactional send endpoint; add basic analytics hooks; update UI.

Rollout Plan

- Feature flag to enable Phase 2 features in prod; gradually roll out to subset of tenants.
- Monitor error rates and metrics for transactional sends.

Dependencies & Risks

- Dependency: Markdown rendering library; ensure compatibility with emails.
- Risk: Template rendering differences across email clients; mitigate with inline CSS.

Appendix: Example Payloads

- Create Contact

```
POST /api/v1/contacts
{
  "email": "alice@example.com",
  "firstName": "Alice",
  "lastName": "Doe",
  "customFields": { "country": "US", "age": 30 }
}
```

- Create Template

```
POST /api/v1/templates
{
  "name": "Welcome",
  "subject": "Welcome {{name}}",
  "markdownContent": "# Hello {{name}}\n\nWelcome to our service, {{name}}!"
}
```

- Preview Template

```
POST /api/v1/templates/:id/preview
{
  "variables": { "name": "John" }
}
```

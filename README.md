# kabootr

Open-source Email Automation Platform

kabootr is an open-source platform for designing, deploying, and operating automated email workflows at scale. It provides a modular architecture, an extensible provider system, a templating engine, scheduling, event triggers, and rich observability. The project is designed to be production-ready, easy to deploy, and welcoming to contributors.

## Why open source

- Transparent security and data handling
- Community-driven feature roadmap
- Faster bug fixes and improvements through collaboration
- Learn from real-world usage and contributions

## Features

- Workflow engine: Build complex email workflows with triggers, conditions, and branching
- Template engine: Design responsive email templates with variables
- Connectors: SMTP, SES, SendGrid, Mailgun, and other providers via pluggable adapters
- Scheduling: Time-based and event-based scheduling
- Recipient management: Lists, deduplication, suppression, and analytics
- Delivery analytics: Open, click, bounce, unsubscribe tracking
- API and UI: Manage workflows, templates, recipients, and runs
- Extensibility: Plugins and custom connectors
- Observability: Centralized logs, metrics, and traces
- Security and compliance: Secrets management and audit logs

## Architecture

kabootr is designed as a set of loosely coupled components. A typical deployment includes:

- API server: RESTful endpoints to manage workflows, templates, recipients, and runs
- Worker: Executes email sending tasks, retries, and error handling
- Template engine: Renders dynamic email templates
- Connectors: Adapters to email providers (SMTP, SES, SendGrid, etc.)
- Storage: Durable data store for workflows, runs, and analytics
- UI: Web-based interface to view and manage everything
- Config & Secrets: Centralized configuration management
- Observability: Logs, metrics, and traces collection

> Note: The repository ships with a containerized setup to simplify local development and testing.

## Quick start

We recommend starting with Docker to get up and running quickly.

Prerequisites

- Docker and Docker Compose
- Optional: Node.js or Python runtimes if you want to run services outside Docker

1. Clone the repository

- `git clone https://github.com/abbhiishek/kabootr.git`

2. Copy environment example

- `cp .env.example .env`

3. Start services

- `docker compose up -d --build`

4. Access the UI

- UI: `http://localhost:3000`
- API: `http://localhost:8080`

5. Verify

- Use the UI to create a sample workflow or send a test email

Notes

- Ports and environment variables are configurable via `.env`. Service mappings are defined in `docker-compose.yml`.
- Data persists in the included storage/database containers between restarts.

## Running locally (non-Docker)

If you prefer to run services directly, each service can be started independently according to its language and runtime. The repository is organized to support multiple runtimes; check the relevant directories for setup instructions and dependencies.

## Environment and configuration

- `APP_PORT`: Port for the UI
- `DB_CONNECTION_STRING`: Connection string for the database
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`: SMTP credentials when using SMTP
- `MAIL_PROVIDER`: One of `SMTP`, `SES`, `SENDGRID`, etc.
- `LOG_LEVEL`: Logging level (info, debug, warn, error)
- `ENABLE_UI`, `ENABLE_API`, `ENABLE_WORKER`: Feature flags to enable/disable components
- Secrets should be managed securely and not committed to version control.

## API and docs

- The project exposes a RESTful API to manage workflows, templates, recipients, and runs. See the repository's documentation for API endpoints, data models, and examples.
- The UI communicates with the API to provide a convenient interface for workflow management.

## Testing

- Tests are organized per service. Run tests from each service's directory using its chosen test framework (for example, `npm test`, `pytest`, or `go test`).
- Ensure dependencies are installed and databases are available for integration tests.

## CI / PR guidance

- The repository uses GitHub Actions for CI. PRs should pass linting and tests before merging.

## Contributing

- We welcome open-source contributions: feature enhancements, bug fixes, documentation improvements, and tests.
- Create issues to discuss large changes, or submit PRs with clear explanations of the problem and the solution.
- Follow a standard GitHub workflow: fork, branch, commit with meaningful messages, and open a PR.

## Code of conduct

- We value inclusive and respectful collaboration. Please adhere to standard open-source community guidelines.

## License

- Kabootr is released under the MIT License. See LICENSE.md for details.

## Acknowledgments

- Thanks to the community for feedback and contributions.


We appreciate your interest in kabootr. Happy coding!

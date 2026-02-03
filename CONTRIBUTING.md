Contributing to kabootr

We welcome contributions from the community. Here are some guidelines to help you get started:

Getting started

- Fork the repository and create a feature branch for your work.
- Keep changes focused and small where possible.
- Ensure tests pass locally before opening a PR.

Setting up your development environment

- Install prerequisites according to the service you want to run (UI, API, or worker).
- For Docker-based development, use the quick start guide in the README to bring up the stack.
- For local development, refer to the per-service directories for setup instructions and dependencies.

Running tests

- Run unit tests for the service you changed (e.g., `npm test`, `pytest`, or `go test`).
- For integration tests, ensure any required services (DB, mail provider mocks, etc.) are available.

Submitting changes

- Submit a pull request with a clear and concise description of what you changed and why.
- Include any necessary tests and update documentation if needed.
- If your change is large or affects the public API, please discuss it in an issue before implementing.

Quality and standards

- Follow the existing coding style and conventions.
- Write tests that exercise new functionality and edge cases.
- Ensure no secrets are committed and sensitive data is properly managed.

Security

- If you discover a security vulnerability, please follow responsible disclosure. Do not publish details; contact the maintainers privately.

# Contributing to DIGIREACH ONE

First off, thank you for considering contributing to DIGIREACH ONE. It's people like you that make this platform such a great tool.

## Where do I go from here?

If you've noticed a bug or have a feature request, make sure to check our Issues to see if someone else has already created a ticket. If not, go ahead and make one!

## Branching Strategy

- `main` is our production-ready branch.
- `develop` is our main integration branch.
- Feature branches should be created from `develop` and follow the naming convention: `feature/your-feature-name`.
- Bugfix branches should follow: `bugfix/issue-description`.

## Commit Messages

We follow conventional commits. Please ensure your commit messages follow this format:
`type(scope): subject`

Examples:

- `feat(api): add user authentication endpoint`
- `fix(web): resolve UI alignment issue on mobile`
- `docs(readme): update installation instructions`

## Pull Requests

1. Fork the repo and create your branch from `develop`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes (`pnpm test`).
5. Make sure your code lints (`pnpm lint`).
6. Issue that pull request!

Thank you for your contributions!

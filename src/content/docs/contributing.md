---
title: Contributing
---

## Guidelines

To ensure the long-term maintainability of the project, we do not accept AI-generated or “vibe-coded” contributions.

All submissions must:
- Follow [Go best practices](https://golang.org/doc/effective_go)
- Write clear commit messages following [conventional commits](https://www.conventionalcommits.org/)
- Be fully understood by the contributor
- Keep changes focused and manageable in size
- Update docs if you change how things work
- Add tests for new features

Your changes will need to pass our automated checks before being merged.

Need help? We're here for you!
- Open an issue on GitHub
- Chat with us in the [Discord channel](https://discord.gg/4uYz8pQmDH)


## Prerequisites
Want to help improve Immich Kiosk? Great! Here's what you'll need to get started:

First, make sure you have these tools installed on your computer:

- [Go](https://golang.org/doc/install) - The main programming language we use
- [Taskfile](https://taskfile.dev/installation/) - Helps automate common tasks
- [Node.js](https://nodejs.org/) - For running the frontend
- [pnpm](https://pnpm.io/installation) - Package manager for the frontend

Ready to contribute? Here's how:

1. Fork the repository and create a new branch for your changes
   ```sh
   git checkout -b feature/my-feature
   ```

2. Run `task install` to set up your development environment

3. Make your changes! Just remember to:
   - Follow the existing code style
   - Add tests if you're adding new features
   - Test your changes with `task test`
   - Check code quality with `task lint`

4. Commit your changes with a helpful message
   ```sh
   git commit -m "feature/description-of-your-change"
   ```

5. Push your changes to GitHub
   ```sh
   git push origin feature/my-feature
   ```

6. Create a Pull Request to the `main` branch
   - Tell us what your changes do and why you made them
   - Link to any related issues
   - Add screenshots if you changed anything visual

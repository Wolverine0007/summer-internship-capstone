# CLAUDE.md

Repository conventions and stack for AI assistant usage.

Stack
- Node.js (LTS)
- Git
- Editor: VS Code with Claude Code extension or Cursor

Conventions
- Commit messages: Conventional Commits v1.0.0 (e.g., `feat:`, `fix:`, `docs:`, `chore:`)
- Branching: `main` as default branch
- Formatting: Prettier / recommended defaults (configure per project)

Project rules learned from this workflow
1. Give the AI a concrete target: include the relevant files, constraints, expected behavior, and a verification step.
2. Ask for tests and run them before considering the work done; this catches edge cases quickly.
3. Review accessibility and empty-state behavior explicitly, because AI often produces functional code that still misses usability details.
4. Keep prompts narrow and incremental; one feature at a time is easier to verify and review.

How to ask the AI assistant
- Provide the repository path and what you want done
- Show relevant files or error messages
- Prefer small, incremental changes and ask for a single improvement per request

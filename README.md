# typescript-template

[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)

Template repository to start off a TypeScript project

## Getting started

1. Create a repository from this template, then update `name`,
   `description`, `repository`, `bugs` and `homepage` in `package.json`.
2. Install dependencies. This also installs the pre-commit hook, which runs
   Biome on staged files:

   ```sh
   bun install
   ```

| Script          | Does                                     |
| --------------- | ---------------------------------------- |
| `bun run dev`   | Run `src/main.ts` and restart on changes |
| `bun run start` | Run `src/main.ts` once                   |
| `bun run build` | Bundle into `build/`                     |
| `bun test`      | Run tests                                |
| `bun run lint`  | Biome check and `tsc --noEmit`           |
| `bun run fix`   | Apply Biome fixes and formatting         |

## Repository variables

CI behaviour is toggled with repository variables, set via
`gh variable set <NAME> --body <value>` or Settings → Secrets and variables → Actions.

| Variable             | Default | Effect                                                                                                                                                                                                                                                   |
| -------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CODEQL_ENABLED`     | on      | Set to `false` to skip CodeQL. Code scanning is free for public repos but needs [GitHub Code Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security) on private ones, where the workflow otherwise fails. |
| `CI_MACOS_ENABLED`   | off     | Set to `true` to also run CI on macOS (minutes bill at 10x in private repos).                                                                                                                                                                            |
| `CI_WINDOWS_ENABLED` | off     | Set to `true` to also run CI on Windows (minutes bill at 2x in private repos).                                                                                                                                                                           |

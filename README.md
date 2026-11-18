# typescript-template

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Template repository to start off a TypeScript project

## Repository variables

CI behaviour is toggled with repository variables, set via
`gh variable set <NAME> --body <value>` or Settings → Secrets and variables → Actions.

| Variable | Default | Effect |
|---|---|---|
| `CODEQL_ENABLED` | on | Set to `false` to skip CodeQL. Code scanning is free for public repos but needs [GitHub Code Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security) on private ones, where the workflow otherwise fails. |
| `CI_MACOS_ENABLED` | off | Set to `true` to also run CI on macOS (minutes bill at 10x in private repos). |
| `CI_WINDOWS_ENABLED` | off | Set to `true` to also run CI on Windows (minutes bill at 2x in private repos). |

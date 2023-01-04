<h1 align="center">Mina Governance</h1>

<p align="center">
  <b>Mina Governance provides users a web outlet to govern the Mina Blockchain.</b>
</p>

## Getting started

- If not installed, install [`pnpm`](https://pnpm.io/).

  ```bash
  brew install pnpm

  # or ...

  curl -fsSL https://get.pnpm.io/install.sh | sh -
  ```

- Checkout this repository via `git` or the [Github CLI.](https://cli.github.com/).

  ```bash
  git clone git@github.com:Granola-Team/mina-governance.git

  # or ...

  gh repo clone Granola-Team/mina-governance
  ```

- In the new directory, install dependencies.

  ```bash
  pnpm clean && pnpm install
  ```

- Copy sample environment configuration.

  ```bash
  cp .env.example .env
  ```

  ⚠️ Make sure the settings in `.env` are correct for your local environment.

### Running in the console

Run the app in development mode:

```sh
pnpm run dev
```

ℹ️ To debug with VS Code, open the command palette (`Ctrl + Cmd + P` or `Cmd + Shift + P`) and run
`Debug: Attach to Node Process`. Select the corresponding process (should be named `mina-governance`).

## Environment configuration

The application is configured via [`dotenv`](https://github.com/motdotla/dotenv).
See [`.env.example`](./.env.example) for all possible configuration values.

## Resources

- [Next.js Documentation](https://nextjs.org/docs/getting-started)
- [Rust Programming Language](https://doc.rust-lang.org/book/)
- [Typescript](https://www.typescriptlang.org/docs/)
- [Mina Protocol](https://docs.minaprotocol.com/)
- [Turborepo](https://turbo.build/)

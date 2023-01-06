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

- If not installed, install [`Rust`](https://www.rust-lang.org/).

  ```bash
  brew install rust

  # or ...

  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
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

## Directory layout

    .
    ├── apps                     # NextJS applications (Web & Docs)
    ├── server                   # Rust API/Backend
    ├── packages                 # Shared packages
    ├── scripts                  # Scripts
    ├── LICENSE
    └── README.md

## Resources

- [Next.js Documentation](https://nextjs.org/docs/getting-started)
- [Rust Programming Language](https://doc.rust-lang.org/book/)
- [Typescript](https://www.typescriptlang.org/docs/)
- [Mina Protocol](https://docs.minaprotocol.com/)
- [Turborepo](https://turbo.build/)

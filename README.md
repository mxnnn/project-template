<h1 align="center">Example Project v1</h1>

<p align="center">
  <b>Example Project Description</b>
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
  git clone git@github.com:Example-Team/example-project.git

  # or ...

  gh repo clone Example-Team/example-project
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
- [Turborepo](https://turbo.build/)

# @redduck/eslint-plugin

ESLint plugin which RedDuck Software uses in its projects.

## How to install

- npm

  ```shell
  npm install @redduck/eslint-plugin eslint -D
  ```

- yarn

  ```shell
  yarn add @redduck/eslint-plugin eslint -D
  ```

- pnpm

  ```shell
  pnpm add @redduck/eslint-plugin eslint -D
  ```

## How to use

Upgrade your `.eslintrc.json` file to extend this plugin:

- In TypeScript projects:

  ```json5
  {
    "extends": ["plugin:@redduck/recommended"],
    "plugins": ["@redduck"],
    // Your other options
  }
  ```

- In React projects:

  ```json5
  {
    "extends": ["plugin:@redduck/recommended-react"],
    "plugins": ["@redduck"],
    // Your other options
  }
  ```

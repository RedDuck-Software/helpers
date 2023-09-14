# @redduck/helpers-tsconfig

Contains our typescript configurations.

## How to install

- npm

  ```shell
  npm install @redduck/helpers-tsconfig
  ```

- yarn

  ```shell
  yarn add @redduck/helpers-tsconfig
  ```

- pnpm

  ```shell
  pnpm add @redduck/helpers-tsconfig
  ```

## How to use

Upgrade your `tsconfig.json` file to extend this config:

```json5
{
  "extends": "@redduck/helpers-tsconfig/tsconfig.base.json",
  "compilerOptions": {
    // Your compiler options
  }
  // Your other options
}
```

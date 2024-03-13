# NxVueSpark

![portal-logo](https://s1.imagehub.cc/images/2024/03/13/9a73d8333d97ee2a760e2680dce92c0d.png)

<div>
  <p align="center">
    English | <a href="./README_CN.md">简体中文</a>
  </p>
</div>

Hello, fellows. Welcome to the NxVueSpark.

The NxVueSpark is a vue3 project with nx as a build tool. It can assist you in starting a vue3 project swiftly.

If you want to build a **monorepo** with vue3 and nx. You can use [nx-vue-cosmopolis](https://github.com/fzhange/nx-vue-cosmopolis)

## 🚀 Features

- 💪 the nx support
- 💪 Out of the box
- 💪 Cache the tasks you run
- 💪 multiple theme support
- 💪 i18n support
- 💪 a Cypress based set of e2e tests (e2e/)
- 💪 Prettier ESLint Vitest preconfigured

## 🦄 Usage

1. clone repo first.

```bash
 git clone git@github.com:fzhange/NxVueSpark.git
 npm install
 npm start
```

2. Visit <http://localhost:4200/> in your local browser

## serve script

start, build and test your application.

```json
{
  "start": "nx serve", // start dev server
  "build": "nx build", // build application
  "test": "nx test", // runs tests using Jest
  "lint": "nx lint", // runs linting with ESLint
  "e2e": "nx e2e" // runs e2e tests with Cypress
}
```

More conveniently, we can also run them in parallel using the following syntax:

```bash
npx nx run-many -t test lint e2e
```

Also, I wanted to mention that Nx offers a command-line interface that can assist you in creating components efficiently.

```bash
npx nx g @nx/vue:component  index  --directory=src/components/hello-world
```

## project structure

```ts
.
├── README.md
├── README_CN.md
├── dist
│   └── nx-vue-spark
├── docs
│   ├── en
│   └── zh
├── e2e
│   ├── cypress.config.ts
│   ├── project.json
│   ├── src
│   └── tsconfig.json
├── index.html
├── nx.json
├── package-lock.json
├── package.json
├── project.json
├── scripts
│   └── create-component.ts
├── src
│   ├── app         // your business logic
│   ├── components  // components logic
│   ├── composables // your common composables api
│   ├── const       // constant
│   ├── main.ts     // project entry
│   ├── routes      // routes directory
│   ├── styles
│   ├── styles.less
│   └── tools       // tools directory
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── vite.config.ts
```

Let me explain a couple of things that might be new to you.
| **File** | **Description** |
| --- | --- |
| **nx.json** | This is where we fine-tune how Nx works. We define what cacheable operations there are, and configure our task pipeline. |
| **project.json** | This file is where you can modify the inferred tasks for the NxVueSpark project. |
| **vite.config.ts** | This file is where you can modify vite for the NxVueSpark project. |

> [!TIP]
> The concept of nx.json and project.json comes from nx team. If you want to know more about how to configure it? You can visit the official doc.

## 🌸 Thanks

Hope this repository can help you guys.
If you like it. Please give me a star, thanks.

# NxVueSpark

Hello, fellows. Welcome to the NxVueSpark.

The NxVueSpark is a vue3 project with nx as a build tool. It can assist you in starting a vue3 project swiftly.

## Project structure

```
└─ nx-vue-spark
   ├─ .vscode
   │  └─ extensions.json
   ├─ e2e
   │  ├─ ...
   │  ├─ project.json
   │  ├─ src
   │  │  ├─ e2e
   │  │  │  └─ app.cy.ts
   │  │  ├─ ...
   │  └─ tsconfig.json
   ├─ src
   │  ├─ app
   │  │  ├─ App.spec.ts
   │  │  ├─ App.vue
   │  │  └─ NxWelcome.vue
   │  ├─ main.ts
   │  └─ styles.css
   ├─ index.html
   ├─ nx.json
   ├─ package.json
   ├─ project.json
   ├─ README.md
   ├─ tsconfig.app.json
   ├─ tsconfig.base.json
   ├─ tsconfig.json
   ├─ tsconfig.spec.json
   └─ vite.config.ts
```

The setup includes.

- a new Vue application at the root of the Nx workspace (src)
- a Cypress based set of e2e tests (e2e/)
- Prettier preconfigured
- ESLint preconfigured
- Vitest preconfigured

Let me explain a couple of things that might be new to you.
| **File** | **Description** |
| --- | --- |
| **nx.json** | This is where we fine-tune how Nx works. We define what cacheable operations there are, and configure our task pipeline. More on that soon. |
| **project.json** | This file is where you can modify the inferred tasks for the NxVueSpark project. More about this later. |

::: tip
The concept of nx.json and project.json comes from nx team. If you want to know more about how to configure it? You can visit the official doc.
:::

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

::: tip
quickly create a component in your repo.

```bash
npx nx g @nx/vue:component  index  --directory=src/components/hello-world
```

more functionality. Please look official doc

:::

## Caching

One thing to highlight is that Nx can cache the tasks you run.
![cache file](https://pic.imgdb.cn/item/65f04da09f345e8d03037bac.png)

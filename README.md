<img width="153" height="42" alt="Screenshot 2026-06-25 at 3 23 49 PM" src="https://github.com/user-attachments/assets/6d602899-3ef6-4fad-987c-4cc3472c6e55" />


# Behaviorally Tier List App

An app to be able to have tier of snack images. 


# Setting up and installation

```js
npm install
```

The app uses Node.js v24, the package.json already has the corresponding dependencies. 


# Running the app locally

```js
npm run dev
```

The app will run on `http://localhost:5174/`


# Frontend Architecture

This app uses a mock api and is in a monolithic architecture. 

# Design 

The app uses Figma for the overall design it uses Behaviorally's accent colors of purple and blue.

<img width="1800" height="1042" alt="Screenshot 2026-06-25 at 3 30 48 PM" src="https://github.com/user-attachments/assets/ed896232-364a-4ef0-89c1-04a216d5aa6e" />

# Technical Decisions

- App is created using React + TS + Vite for easy maintainance and less bloated code
- Design is created from existing client's accent colors and UI/UX
- AI is primarily used to organize code and cleanup unnecessary dependencies and help in organizing the services for the mockApi
- Monolithic architecture was used for a simpler and cleaner frontend code

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

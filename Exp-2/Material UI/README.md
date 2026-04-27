# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Features

1) Built with React
2) Uses React DOM to render UI into the browser
3) Uses Emotion for styling components
4) Component-based architecture
5) Fast development using Vite
6) Hot reload during development

## Working of Project

1) The application starts from the main.jsx / index.js file.
2) React DOM mounts the main App component into the root DOM element.
3) Components are styled using Emotion, which allows writing CSS inside JavaScript.
4) When the code is updated, the browser automatically reloads the changes.
5) The UI is rendered dynamically without refreshing the page.

## Local Host

http://localhost:5173/
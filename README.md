Here’s the entire README in Markdown format:

````markdown
# CanoChat - React + TypeScript + Vite

This template sets up a minimal environment to get **React** working with **Vite**, **TypeScript**, and **HMR** (Hot Module Replacement). It also includes some initial **ESLint** rules for a consistent code style and improved development experience.

## Getting Started

To run CanoChat locally, follow these steps:

### 1. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed. Then, install the necessary dependencies by running:

```bash
npm install
```
````

### 2. Start the Development Server

To start the app in development mode with HMR enabled, use the following command:

```bash
npm run dev
```

This will launch a local server and automatically open the CanoChat app in your default browser. You can view the app by navigating to `http://localhost:3000` if it doesn’t open automatically.

### 3. Build for Production

To prepare the app for deployment, build the project by running:

```bash
npm run build
```

This command compiles the app into a production-ready format in the `dist` directory.

### 4. Preview the Production Build

You can preview the production build with:

```bash
npm run preview
```

This serves the production build locally so you can ensure everything works as expected before deploying.

## ESLint Configuration

To maintain code quality, this project uses **ESLint** with specific configurations tailored for TypeScript and React. For production applications, we recommend updating the configuration to enable type-aware lint rules:

1. **Top-Level `parserOptions`**:

   Configure the top-level `parserOptions` as follows:

   ```js
   export default tseslint.config({
     languageOptions: {
       parserOptions: {
         project: ["./tsconfig.node.json", "./tsconfig.app.json"],
         tsconfigRootDir: import.meta.dirname,
       },
     },
   });
   ```

2. **Enhanced ESLint Presets**:

   Replace `tseslint.configs.recommended` with either `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`, and optionally add `...tseslint.configs.stylisticTypeChecked` for stylistic linting.

3. **React Plugin Setup**:

   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update your ESLint configuration as follows:

   ```js
   // eslint.config.js
   import react from "eslint-plugin-react";

   export default tseslint.config({
     settings: { react: { version: "18.3" } },
     plugins: {
       react,
     },
     rules: {
       ...react.configs.recommended.rules,
       ...react.configs["jsx-runtime"].rules,
     },
   });
   ```

## Screenshots

Here’s a preview of the CanoChat interface:
![CanoChat Login Screen](https://github.com/carellihoula/chat-frontend-reactjs/blob/master/public/images/canochat/home_page_canochat.png)  
_Figure 1: CanoChat Home Screen_

![CanoChat Chat Screen](https://github.com/carellihoula/chat-frontend-reactjs/blob/master/public/images/canochat/settings_page_canochat.png)  
_Figure 2: CanoChat Settings Screen_

![CanoChat Login Screen](https://github.com/carellihoula/chat-frontend-reactjs/blob/master/public/images/canochat/register_page_canochat.png)  
_Figure 1: CanoChat Register Screen_

![CanoChat Login Screen](https://github.com/carellihoula/chat-frontend-reactjs/blob/master/public/images/canochat/login_page_canochat.png)  
_Figure 1: CanoChat Login Screen_

## Additional Information

- **Framework**: React + Vite
- **TypeScript**: Type-safe, modern development
- **HMR**: Instant updates during development

Let me know if you need any more details or further refinement!

```

This Markdown file is fully formatted and includes all instructions and screenshots as you specified.
```

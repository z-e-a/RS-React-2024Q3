module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "plugin:import/recommended",
    "airbnb-typescript/base",
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "eslint-config-prettier",
  ],
  ignorePatterns: [
    "dist",
    "coverage",
    "vite-env.d.ts",
    ".eslintrc.cjs",
    "vite.config.ts",
    "SWApi.d.ts",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.app.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react-refresh", "react-compiler"],
  rules: {
    "import/extensions": [
      1,
      "ignorePackages",
      {
        "": "never",
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-console": 0,
    "linebreak-style": 0,
    "react/react-in-jsx-scope": "off",
    "max-len": ["warn", { code: 120 }],
    indent: [
      "warn",
      2,
      {
        SwitchCase: 1,
      },
    ],
    "@typescript-eslint/indent": [
      "warn",
      2,
      {
        SwitchCase: 1,
      },
    ],
    "import/prefer-default-export": "off",
    "no-param-reassign": [
      "error",
      {
        props: false,
      },
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "react-compiler/react-compiler": "error",
  },
  noInlineConfig: true,
};

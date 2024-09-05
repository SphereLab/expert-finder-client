module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-hooks', 'jsx-a11y', 'prettier', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['error', { allowConstantExport: true }],
    'react/react-in-jsx-scope': 'off',
    'no-console': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

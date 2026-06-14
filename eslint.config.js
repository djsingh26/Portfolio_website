import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // include jsx-a11y recommended rules directly to avoid using string-based extends
      ...(jsxA11y && jsxA11y.configs && jsxA11y.configs.recommended
        ? jsxA11y.configs.recommended.rules
        : {}),
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // a11y: allow some project-specific relaxations here if needed
      'jsx-a11y/no-autofocus': 'off',
    },
  },
);

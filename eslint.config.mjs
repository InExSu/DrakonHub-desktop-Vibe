import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,mjs,cjs}'],
    ignores: [
      '**/node_modules/**',
      'src/static/libs/*.min.js'
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'off'
    }
  }
];
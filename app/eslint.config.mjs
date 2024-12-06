// eslint.config.mjs
import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser
      },
      parser: '@babel/eslint-parser',
    },
    rules: {
      indent: ['error', 2],                // Indentación de 2 espacios
      quotes: ['error', 'single'],         // Usar comillas simples
      semi: ['error', 'never'],            // No requiere punto y coma
      'no-unused-vars': ['warn'],          // Avisa sobre variables no usadas
      'no-anonymous-default-export': 'off',
    },
    extends: [
      'eslint:recommended',
      'plugin:prettier/recommended', // Integrar Prettier
    ],
  },
  pluginJs.configs.recommended // Añadir configuraciones recomendadas de ESLint para JS
]
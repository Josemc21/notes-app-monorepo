// eslint.config.mjs
import globals from 'globals'
import pluginJs from '@eslint/js'
import prettier from 'eslint-plugin-prettier'

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      parser: '@babel/eslint-parser',
    },
    rules: {
      indent: ['error', 2],                // Indentación de 2 espacios
      quotes: ['error', 'single'],         // Usar comillas simples
      semi: ['error', 'never'],            // No requiere punto y coma
      'no-unused-vars': ['warn'],          // Avisa sobre variables no usadas
      'no-anonymous-default-export': 'off',
      // Reglas recomendadas de ESLint
      ...pluginJs.configs.recommended.rules,
      // Reglas de Prettier
      ...prettier.configs.recommended.rules,
    },
  },
]

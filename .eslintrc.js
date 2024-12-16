module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'metro.config.js',
    'babel.config.js',
    'jest.config.js',
    '.eslintrc.js',
    'tailwind.config.js',
    'tsconfig.json',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/pages/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/components/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/hooks/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'src/**',
            group: 'internal',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
};

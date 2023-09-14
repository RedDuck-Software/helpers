export default {
  extends: [
    './configs/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  plugins: ['react', 'react-hooks', '@tanstack/query'],
  settings: {
    react: {
      version: 'detect',
    },
  },
} as const;

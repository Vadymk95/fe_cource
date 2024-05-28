import pluginJs from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            globals: { ...globals.browser, __IS_DEV__: 'readonly' },
        },
        plugins: {
            '@typescript-eslint': tseslint,
            react: pluginReact,
            'react-hooks': pluginReactHooks,
        },
        rules: {
            ...pluginJs.configs.recommended.rules,
            ...tseslint.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off', // React 17 и выше не требуют импорта React
            'react/jsx-uses-react': 'off',
            'react/jsx-uses-vars': 'error',
            'no-unused-vars': 'warn',
        },
        settings: {
            react: {
                version: 'detect', // автоматически определяет версию React
            },
        },
    },
];

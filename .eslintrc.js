module.exports = {
	env: {
		node: true,
		browser: true,
		es2020: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'simple-import-sort', 'import'],
	rules: {
		'prettier/prettier': 'warn',
		'simple-import-sort/sort': 'warn',
		'react/no-unescaped-entities': 'warn',
		'no-constant-condition': 'warn',
		'no-console': ['warn', { allow: ['warn', 'error', 'info', 'table'] }],
		'@typescript-eslint/no-empty-function': 'warn',
		'@typescript-eslint/ban-types': 'warn',
		'import/newline-after-import': 'error',
		'react/prop-types': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-extra-semi': 'off',
		'@typescript-eslint/no-var-requires': 'off',

		// React 17 react-jsx
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
	},
}

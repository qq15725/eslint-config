module.exports = {
  extends: [
    '@qq15725/eslint-config-ts',
  ],
  plugins: [
    'react',
  ],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'jsx-quotes': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-curly-brace-presence': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/issues/2415
    // 'react/jsx-curly-spacing': ['error', { when: 'always', spacing: { objectLiterals: 'never' } }],

    'react/react-in-jsx-scope': 'off',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-max-props-per-line': ['error', { when: 'multiline' }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
    }],
  },
}

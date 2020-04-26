'use strict';

/* eslint-disable no-magic-numbers */

module.exports = {

  /**
   * All rules as listed in the ESLint rules page:
   * https://eslint.org/docs/rules/.
   */
  rules: {

    /**
     * Possible Errors
     * https://eslint.org/docs/rules/#possible-errors
     */
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'off',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'off',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'off',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'off',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'require-atomic-updates': 'warn',
    'use-isnan': 'error',
    'valid-typeof': ['error', {requireStringLiterals: true}],

    /**
     * Best Practices
     * https://eslint.org/docs/rules/#best-practices
     */
    'accessor-pairs': 'warn',
    'array-callback-return': 'warn',
    'block-scoped-var': 'off',
    'class-methods-use-this': 'off',
    'complexity': ['warn', {max: 20}],
    'consistent-return': 'warn',
    'curly': ['error', 'multi-line', 'consistent'],
    'default-case': 'warn',
    'default-param-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'off',
    'eqeqeq': 'off',
    'grouped-accessor-pairs': 'off',
    'guard-for-in': 'error',
    'max-classes-per-file': 'off',
    'no-alert': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'off',
    'no-else-return': ['error', {'allowElseIf': true}],
    'no-empty-function': 'off',
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-eval': 'off',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'off',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'off',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'off',
    'no-lone-blocks': 'off',
    'no-loop-func': 'off',
    'no-magic-numbers': 'warn',
    'no-multi-spaces': ['error', {'ignoreEOLComments': false}],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-proto': 'error',
    'no-redeclare': ['error', {'builtinGlobals': true}],
    'no-restricted-properties': 'off',
    'no-return-assign': 'off',
    'no-return-await': 'off',
    'no-script-url': 'off',
    'no-self-assign': ['error', {'props': true}],
    'no-self-compare': 'error',
    'no-sequences': 'off',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'off',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'error',
    'no-useless-call': 'off',
    'no-useless-catch': 'error',
    'no-useless-concat': 'off',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'off',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'prefer-named-capture-group': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'off',
    'radix': 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'off',
    'vars-on-top': 'error',
    'wrap-iife': 'off',
    'yoda': 'off',

    /**
     * Strict Mode
     * https://eslint.org/docs/rules/#strict-mode
     */
    'strict': 'off',

    /**
     * Variables
     * https://eslint.org/docs/rules/#variables
     */
    'init-declarations': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'off',
    'no-shadow': 'warn',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'off',
    'no-undefined': 'off',
    'no-unused-vars': 'error',
    'no-use-before-define': 'warn',

    /**
     * Stylistic Issues
     * https://eslint.org/docs/rules/#stylistic-issues
     */
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': 'error',
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': ['error', 'never'],
    'brace-style': 'error',
    'camelcase': 'error',
    'capitalized-comments': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'consistent-this': 'off',
    'eol-last': 'warn',
    'func-call-spacing': 'error',
    'func-name-matching': 'off',
    'func-names': 'off',
    'func-style': 'off',
    'function-call-argument-newline': 'off',
    'function-paren-newline': ['error', 'consistent'],
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': 'off',
    'indent': ['error', 2],
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': 'off',
    'linebreak-style': 'error',
    'lines-around-comment': 'error',
    'lines-between-class-members': 'error',
    'max-depth': 'off',
    'max-len': ['error', {
      code: 80,
      tabWidth: 2,
      ignoreUrls: true,
    }],
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'multiline-comment-style': 'error',
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-per-chained-call': 'off',
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'off',
    'no-multiple-empty-lines': ['error', {max: 2}],
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'off',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': ['error', {consistent: true}],
    'object-curly-spacing': ['error', 'never'],
    'object-property-newline': 'off',
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'off',
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': 'off',
    'prefer-exponentiation-operator': 'off',
    'prefer-object-spread': 'off',
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single', {allowTemplateLiterals: true}],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {'before': false, 'after': true}],
    'semi-style': ['error', 'last'],
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'asyncArrow': 'always',
      'named': 'never',
    }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'off',
    'space-unary-ops': 'off',
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': ['error', {'after': true, 'before': false}],
    'template-tag-spacing': 'off',
    'unicode-bom': 'off',
    'wrap-regex': 'off',

    /**
     * ECMAScript 6
     * https://eslint.org/docs/rules/#ecmascript-6
     */
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', {'before': true, 'after': true}],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', {'before': false, 'after': true}],
    'no-class-assign': 'error',
    'no-confusing-arrow': 'off',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
  },
};

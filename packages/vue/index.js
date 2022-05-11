module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@qq15725/eslint-config-ts',
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        // 缩进
        'indent': 'off',
        // 禁止未使用的变量
        'no-unused-vars': 'off',
        // 禁止使用未定义的值
        'no-undef': 'off',
        // ts 禁止未使用的变量
        '@typescript-eslint/no-unused-vars': 'off',
        // ts 缩进
        '@typescript-eslint/indent': 'off',
      },
    },
  ],
  rules: {
    // <script>
    // 缩进
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
      switchCase: 1,
      ignores: [],
    }],

    // component
    // 必须定义属性类型
    'vue/require-prop-types': 'off',
    // 必须定义默认属性值
    'vue/require-default-prop': 'off',
    // 禁止解构 setup 中的 props
    'vue/no-setup-props-destructure': 'off',
    // 组件标签排序
    'vue/component-tags-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
    // 组件名命名风格
    'vue/component-name-in-template-casing': 'off',
    // 组件选项命名风格
    'vue/component-options-name-casing': 'off',
    // 自定义事件命名风格
    'vue/custom-event-name-casing': ['error', 'kebab-case', { ignores: ['/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u'] }],

    // <template>
    // 关闭标签时换行
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always',
    }],
    // 关闭标签时空格
    'vue/html-closing-bracket-spacing': 'error',
    // 每行最大属性数
    'vue/max-attributes-per-line': ['error', {
      singleline: 5,
      multiline: 1,
    }],
    // 有效的 v-on 指令
    'vue/valid-v-on': 'off',
    // 禁用 v-html
    'vue/no-v-html': 'off',
    // 禁止在 v-bind 中出现名称
    'vue/no-restricted-v-bind': ['error', '/^v-/'],
    // 禁止未使用的 v-bind
    'vue/no-useless-v-bind': 'error',
    // 有效的 v-slot
    'vue/valid-v-slot': ['error', { allowModifiers: true }],
    // 禁止在组件上使用 v-text v-html
    'vue/no-v-text-v-html-on-component': 'error',
    // 单行元素内容换行
    'vue/singleline-html-element-content-newline': 'off',
    // 多行元素内容换行
    'vue/multiline-html-element-content-newline': 'off',
    // 多个单词的组件名
    'vue/multi-word-component-names': 'off',
    // macros 定义排序
    'vue/define-macros-order': ['error', {
      order: ['defineProps', 'defineEmits'],
    }],
    // 块状标签换行
    'vue/block-tag-newline': ['error', {
      singleline: 'always',
      multiline: 'always',
    }],
    // 注释内容间距
    'vue/html-comment-content-spacing': ['error', 'always', {
      exceptions: ['-'],
    }],
    // 标签块空行
    'vue/padding-line-between-blocks': ['error', 'always'],
    // 静态类使用单独的 class
    'vue/prefer-separate-static-class': 'error',

    // extensions
    // 数组内元素间距
    'vue/array-bracket-spacing': ['error', 'never'],
    // 箭头函数箭头间距
    'vue/arrow-spacing': ['error', { before: true, after: true }],
    // 块间距
    'vue/block-spacing': ['error', 'always'],
    'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/comma-spacing': ['error', { before: false, after: true }],
    'vue/comma-style': ['error', 'last'],
    'vue/dot-location': ['error', 'property'],
    'vue/dot-notation': ['error', { allowKeywords: true }],
    'vue/eqeqeq': ['error', 'smart'],
    // 'vue/func-call-spacing': ['off', 'never'],
    'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'vue/keyword-spacing': ['error', { before: true, after: true }],
    'vue/no-constant-condition': 'warn',
    'vue/no-empty-pattern': 'error',
    'vue/no-extra-parens': ['error', 'functions'],
    'vue/no-irregular-whitespace': 'error',
    'vue/no-loss-of-precision': 'error',
    'vue/no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'vue/no-sparse-arrays': 'error',
    'vue/object-curly-newline': ['error', { multiline: true, consistent: true }],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
    'vue/object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'vue/operator-linebreak': ['error', 'before'],
    'vue/prefer-template': 'error',
    'vue/quote-props': ['error', 'consistent-as-needed'],
    'vue/space-in-parens': ['error', 'never'],
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': ['error', { words: true, nonwords: false }],
    'vue/template-curly-spacing': 'error',
  },
}

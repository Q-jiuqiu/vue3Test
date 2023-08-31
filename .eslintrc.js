module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: ["import"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "error",
      {
        // 维护现有的行尾
        endOfLine: "auto"
      }
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-unused-vars": "error",
    // 使用三等号而不是双等号
    eqeqeq: "warn",
    // async函数中必须具有await表达式
    "require-await": "error",
    // import语句在模块顶部
    "import/first": "error",
    // 避免在多个地方重复引入同意模块
    "import/no-duplicates": "error",
    // 在import语句和非import语句直接插入一空行
    "import/newline-after-import": "error"
  },
  settings: {
    "import/resolver": {
      typescript: {}
    }
  }
};

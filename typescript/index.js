module.exports = {

   "parser": "@typescript-eslint/parser",

   "parserOptions": {
      "ecmaVersion": 2022,
      "lib": ["ES2022"],
   },

   "extends": [
     './rules/base'
   ].map(require.resolve),

 };

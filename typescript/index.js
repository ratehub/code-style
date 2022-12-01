module.exports = {

   "parser": "@typescript-eslint/parser",

   "parserOptions": {
      "ecmaVersion": 2017,
      "lib": ["ES2017"]
   },

   "extends": [
     './rules/base'
   ].map(require.resolve),

 };

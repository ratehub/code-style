module.exports = {

   // Using the default parser will cause issues with arrow-declared functions.
   "parser": "@babel/eslint-parser",

   "parserOptions": {
      "sourceType": "module",
      "ecmaVersion": 2017,
      "ecmaFeatures": {
         "modules": true,
         "experimentalObjectRestSpread": true
      }
   },

   "extends": [
     './rules/import',
     './rules/base'
   ].map(require.resolve),

 };

module.exports = {

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

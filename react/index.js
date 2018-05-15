module.exports = {

   "parserOptions": {
      "sourceType": "module",
      "ecmaVersion": 6,
      "ecmaFeatures": {
         "jsx": true,
         "modules": true
      }
   },
   
   "extends": [
     './rules/react',
     './rules/react-a11y'
   ].map(require.resolve),

 };
 
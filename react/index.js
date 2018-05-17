module.exports = {

   "parserOptions": {
      "sourceType": "module",
      "ecmaVersion": 2017,
      "ecmaFeatures": {
         "jsx": true,
         "modules": true,
         "experimentalObjectRestSpread": true,
      }
   },
   
   "extends": [
     './rules/react',
     './rules/jsx-a11y',
     './rules/jsx-control-statements'
   ].map(require.resolve),

 };

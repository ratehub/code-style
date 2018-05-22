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
     '@ratehub/eslint-config-js',
     './rules/react',
     './rules/jsx-a11y',
     './rules/jsx-control-statements'
   ].map(require.resolve),

   "rules": {

     // Use this to fix "base/no-unused-vars when using React"
     // https://github.com/eslint/eslint/issues/8226
     "react/jsx-uses-vars": "error"
   }

 };

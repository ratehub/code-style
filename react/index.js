module.exports = {

   // Using the default parser will cause issues with arrow-declared functions.
   "parser": "babel-eslint",

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

     // These two rules are required to use "base/no-unused-vars"
     // when using React.  See rule pages for details:
     // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-uses-react.md
     // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-uses-vars.md
     "react/jsx-uses-react": "error",
     "react/jsx-uses-vars": "error"
   }

 };

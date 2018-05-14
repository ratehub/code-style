module.exports = {

   extends: [
     './rules/react',
     './rules/react-a11y',
     './rules/jsx-control-statements'
   ].map(require.resolve),

 };
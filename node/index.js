module.exports = {

   "extends": [
     './rules/javascript',
     './rules/typescript'
   ].map(require.resolve),

 };

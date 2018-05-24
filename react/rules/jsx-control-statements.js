module.exports = {

   "plugins": [
      "jsx-control-statements"
    ],
 
    // If these are not added, react/jsx-no-undef will find these are undefined.
    // Ideally this block can be removed if a cleaner solution is found.
    "globals": {

      "If": false,
      "Else": false,

      "For": false,

      "Choose": false,
      "When": false,
      "Otherwise": false,

      "With": false
    }, 
 
    "rules" : {
      "jsx-control-statements/jsx-choose-not-empty" : "error",
      "jsx-control-statements/jsx-for-require-each": "error",
      "jsx-control-statements/jsx-for-require-of": "error",
      "jsx-control-statements/jsx-if-require-condition": "error",
      "jsx-control-statements/jsx-otherwise-once-last": "error",
      "jsx-control-statements/jsx-use-if-tag": "error",
      "jsx-control-statements/jsx-when-require-condition": "error",

      // This is a REPLACEMENT of the eslint no-undef rule which is compatable with <For> and <With>
      // See https://github.com/vkbansal/eslint-plugin-jsx-control-statements/blob/master/docs/rules/jsx-jcs-no-undef.md
      "jsx-control-statements/jsx-jcs-no-undef": "error",
      "no-undef": "off"
    }

}
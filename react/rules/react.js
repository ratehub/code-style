// An internal poll was used, and 4 spaces won (5 votes)
// 2nd place was 3 spaces (4 votes)
// 2 spaces => 2 votes
// tab => 2 votes
const INDENTATION = 4;


module.exports = {
   
   "plugins": [
     'react'
   ],
  
   "rules" : {

     // Code Smells - Errors
     "react/button-has-type": "error",
     "react/no-children-prop": "error",
     "react/default-props-match-prop-types": "error",
     "react/no-access-state-in-setstate": "error",
     "react/no-did-update-set-state": "error",
     "react/no-direct-mutation-state": "error",
     "react/no-redundant-should-component-update": "error",
     "react/no-render-return-value": "error",
     "react/no-typos": "error",
     "react/no-this-in-sfc": "error",
     "react/no-unescaped-entities": "error",
     "react/no-unknown-property": "error",
     "react/no-will-update-set-state": "error",
     "react/react-in-jsx-scope": "error",
     "react/require-render-return": "error",
     "react/void-dom-elements-no-children": "error",
     "react/jsx-key": "error",
     "react/jsx-no-comment-textnodes": "error",
     "react/jsx-no-duplicate-props": "error",
     "react/jsx-no-literals": "error",
     "react/jsx-no-undef": ["error", { "allowGlobals": true }],

     // Code Smells - Warnings
     "react/no-deprecated": "warn",
     "react/no-find-dom-node": "warn",

     // Readability - Errors
     "react/no-danger": "error",
     "react/no-multi-comp": "error",
     "react/no-unused-prop-types": "error",
     "react/no-unused-state": "error",
     "react/prefer-es6-class": "error",
     "react/prop-types": "error",
     "react/require-default-props": "error",
     "react/self-closing-comp": "error",
     "react/sort-comp": "error",
     "react/jsx-closing-bracket-location": "error",
     "react/jsx-closing-tag-location": "error",
     "react/jsx-curly-spacing": "error",
     "react/jsx-equals-spacing": "error",
     "react/jsx-filename-extension": "error",
     "react/jsx-indent": ["error", INDENTATION],
     "react/jsx-indent-props": ["error", INDENTATION],
     "react/jsx-one-expression-per-line": "error",
     "react/jsx-pascal-case": ["error", { "allowNamespace": true }],
     "react/jsx-tag-spacing": "error",
     "react/jsx-wrap-multilines": "error",

     // Readability - Warnings
     "react/boolean-prop-naming": "warn",
     "react/jsx-handler-names": "off"
  }

};
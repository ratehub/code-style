// Since our styles will be in jsx files, 
//  we're using the same indentation as React config
const INDENTATION = 4;

module.exports = {
  "processors": ["stylelint-processor-styled-components"],
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-styled-components",
    "stylelint-config-rational-order"
  ],
  "rules": {
    /* Potential errors */
    "color-no-invalid-hex": "true",
    "font-family-no-duplicate-names": "true",
    "font-family-no-missing-generic-family-keyword": "true",
    "function-calc-no-invalid": "true",
    "function-linear-gradient-no-nonstandard-direction": "true",
    "string-no-newline": "true",
    "unit-no-unknown": "true",
    "property-no-unknown": "true",
    "ignore-consecutive-duplicates": ["true", {
      "ignore": ["consecutive-duplicates-with-different-values"]
    }],
    "declaration-block-no-shorthand-property-overrides": "true",
    "block-no-empty": "true",
    "selector-pseudo-class-no-unknown": "true",
    "selector-pseudo-element-no-unknown": "true",
    "selector-type-no-unknown": "true",
    "media-feature-name-no-unknown": "true",
    "no-duplicate-at-import-rules": "true",
    "no-duplicate-selectors": "true",
    "no-extra-semicolons": "true",

    /* Code style */
    "color-named": "never",
    "color-hex-case": "lower",
    "color-hex-length": "long",
    "font-weight-notation": "numeric",
    "indentation": INDENTATION,
    "max-empty-lines": 2,
    "selector-pseudo-element-colon-notation": "double"
  }
};

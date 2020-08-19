
module.exports = {

    "extends": [
        "eslint:recommended"
    ],

    "rules": {
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "no-console": ["warn"],
        "keyword-spacing": ["error", { "before": true, "after": true }],
        "array-bracket-spacing": ["error", "always"],
        "object-curly-spacing": ["error", "always"],
        "comma-dangle": ["warn", "always-multiline"],
        "max-len": ["warn", {
            "code": 110,
            "ignoreUrls": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
        }],

        // [Nov 27, 2019] @chris.skoblenick: commented out the quotes enforecement for now;
        // REASON: will cause massive monorepo changes; need to incorporate once most PRs merged.
        // "quotes": ["error", "single"],
        // "jsx-quotes": ["error", "prefer-double"],

        // "for-direction" : "off",
        // "getter-return" : "error",
        // "no-await-in-loop" : "warn",
        // "no-compare-neg-zero" : "error",

        // "accessor-pairs" : ["error", {"setWithoutGet" : true, "getWithoutSet" : false}],
    }

}

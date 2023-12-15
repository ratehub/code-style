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
        "comma-dangle": ["warn", ["warn", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "only-multiline",
         }]],
        "no-unused-vars": ["error", { "ignoreRestSiblings": true }],
        "max-params": ["error"],
        "brace-style": ["error", "1tbs"],
    
        "quotes": ["error", "single"],
        "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
        "no-shadow": ["error"],

        "multiline-ternary": ["error", "always-multiline"],
        "operator-linebreak": ["warn", "before"],       // This will be later made an error. Done this way to make migration easier.
    }
}

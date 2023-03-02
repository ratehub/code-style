module.exports = {
    "extends": [
        "@ratehub/eslint-config-ts",
    ],

    "parser": "@typescript-eslint/parser",

    "parserOptions": {
        "ecmaVersion": 2022,
        "lib": ["ES2022"]
    },

    "rules": {
        "max-len": ["error", {
            "code": 120,
            "ignorePattern": true,
            "ignoreUrls": true,
            "ignoreStrings": true,
            "ignoreRegExpLiterals": true
        }],
        "semi": "off",
        "@typescript-eslint/semi": "error"
    }
};

module.exports = {
    "extends": [
        "@ratehub/eslint-config-js",
    ],

    // Using the default parser will cause issues with arrow-declared functions.
    "parser": "@babel/eslint-parser",

    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2022,
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true,
        }
    },

    "rules": {
        "max-len": ["error", {
            "code": 120,
            "ignorePattern": true,
            "ignoreUrls": true,
            "ignoreStrings": true,
            "ignoreRegExpLiterals": true
        }],
        "semi": ["error", "always"],
    }
};

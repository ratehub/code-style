
module.exports = {

    "extends": [
        "eslint:recommended"
    ],

    "rules": {
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "no-console": ["warn"]

        //   "for-direction" : "off",
        //   "getter-return" : "error",
        //   "no-await-in-loop" : "warn",
        //   "no-compare-neg-zero" : "error",

        //   "accessor-pairs" : ["error", {"setWithoutGet" : true, "getWithoutSet" : false}], 
    }

}
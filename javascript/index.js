module.exports = {

    // Using the default parser will cause issues with arrow-declared functions.
    'parser': '@babel/eslint-parser',

    'parserOptions': {
        'sourceType': 'module',
        'ecmaVersion': 2022,
        'ecmaFeatures': {
            'modules': true,
            'experimentalObjectRestSpread': true,
        },
    },

    'extends': [
        './rules/import',
        './rules/base',
        './rules/stylistic',
    ].map(require.resolve),

};

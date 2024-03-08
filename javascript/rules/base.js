module.exports = {
    'plugins': [
        '@stylistic/js',
    ],

    'extends': [
        'eslint:recommended',
    ],

    'rules': {
        'no-console': [ 'warn' ],
        'no-unused-vars': [ 'error', { 'ignoreRestSiblings': true } ],
        'max-params': [ 'error' ],
    
        'no-shadow': [ 'error' ],
    },
}

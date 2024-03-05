module.exports = {
    'plugins': [
        '@stylistic/js',
    ],

    'rules': {
        '@stylistic/js/indent': [ 'error', 4, { 'SwitchCase': 1 } ],
        '@stylistic/js/keyword-spacing': [ 'error', { 'before': true, 'after': true } ],
        '@stylistic/js/array-bracket-spacing': [ 'error', 'always' ],
        '@stylistic/js/object-curly-spacing': [ 'error', 'always' ],
        '@stylistic/js/comma-dangle': [ 'warn', {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'only-multiline',
        } ],
        '@stylistic/js/brace-style': [ 'error', '1tbs' ],
    
        '@stylistic/js/quotes': [ 'error', 'single' ],
        '@stylistic/js/no-multi-spaces': [ 'error', { 'ignoreEOLComments': true } ],

        '@stylistic/js/multiline-ternary': [ 'error', 'always-multiline' ],
        '@stylistic/js/operator-linebreak': [ 'warn', 'before' ],       // This will be later made an error. Done this way to make migration easier.
    },
}

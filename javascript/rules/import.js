module.exports = {

    'plugins': [
        'import',
    ],

    'settings': {
        // Failure to add this makes this check take an eternity
        'import/ignore': [
            'node_modules',
        ],
    },
 
    'rules': {
        // Code Smells - Errors
        'import/no-unresolved': 'error',
        'import/named': 'error',
        'import/default': 'error',
        'import/namespace': 'error',
        'import/no-absolute-path': 'error',
        'import/no-dynamic-require': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/no-self-import': 'error',
        'import/no-cycle': 'error',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-namespace': 'error',

        // Code Smells - Warnings

        // Code Smells - Parking Lot
        'import/no-restricted-paths': 'off',
        'import/no-deprecated': 'off',
        'import/unambiguous': 'off',


        // Readability - Errors
        'import/export': 'error',      
        'import/no-commonjs': 'error',
        'import/no-amd': 'error',
        'import/no-nodejs-modules': 'error',
        'import/first': 'error',
        'import/exports-last': 'error',
        'import/order': 'error',
        'import/newline-after-import': [ 'error', { 'count': 2 } ],
        'import/no-unassigned-import': 'error',
        'import/no-named-default': 'error',
      
        // Readability - Warnings
        'import/prefer-default-export': 'warn',
      
        // Readability - Parking Lot
        'import/no-duplicates': 'off',
        'import/no-anonymous-default-export': 'off',
        'import/extensions': 'off',


        // Disabled
        'import/no-internal-modules': 'off',
        'import/group-exports': 'off',
    },
}
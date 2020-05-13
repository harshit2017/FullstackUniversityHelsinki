module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'jest':true,
        'node':true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 11
    },
    'rules': {
        'eqeqeq': 'error',
        'no-trailing-spaces': 'error',
        'indent': 0,
        'linebreak-style': 0,
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'object-curly-spacing': [
            'error', 'always'
        ],
        'arrow-spacing': [
            'error', { 'before': true, 'after': true }
        ],
        'no-console': 0
    }
}

module.exports = [
    {
        input: 'src/index.js',
        output: {
            file: 'lib/index.js',
            format: 'esm'
        }
    },
    {
        input: 'src/index.js',
        output: {
            file: 'lib/cjs/index.js',
            format: 'cjs'
        }
    },
    {
        input: 'src/locale/index.js',
        output: {
            file: 'lib/cjs/locale.js',
            format: 'cjs'
        }
    },
    {
        input: 'src/locale/index.js',
        output: {
            file: 'lib/locale.js',
            format: 'esm'
        }
    }
]

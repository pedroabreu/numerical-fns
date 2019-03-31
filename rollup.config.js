module.exports = [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/index.esm.js',
            format: 'esm'
        }
    },
    {
        input: 'src/index.js',
        output: {
            file: 'dist/index.cjs.js',
            format: 'cjs'
        }
    },
    {
        input: 'src/locale/index.js',
        output: {
            file: 'dist/locale/index.cjs.js',
            format: 'cjs'
        }
    },
    {
        input: 'src/locale/index.js',
        output: {
            file: 'dist/locale/index.esm.js',
            format: 'esm'
        }
    }
]

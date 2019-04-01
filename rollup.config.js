import resolve from 'rollup-plugin-node-resolve'

module.exports = [
    {
        input: 'src/index.js',
        output: {
            file: 'lib/index.js',
            format: 'esm'
        },
        plugins: [
            resolve({
                module: true
            })
        ]
    },
    {
        input: 'src/index.js',
        output: {
            file: 'lib/cjs/index.js',
            format: 'cjs'
        },
        plugins: [
            resolve()
        ]
    },
    {
        input: 'src/locale/index.js',
        output: {
            file: 'lib/cjs/locale.js',
            format: 'cjs'
        },
        plugins: [
            resolve()
        ]
    },
    {
        input: 'src/locale/index.js',
        output: {
            file: 'lib/locale.js',
            format: 'esm'
        },
        plugins: [
            resolve({
                module: true
            })
        ]
    }
]

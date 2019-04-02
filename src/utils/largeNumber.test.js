import largeNumber from './largeNumber'

const LARGE_NUMBER = {
    '3': 'thousand',
    '6': 'million',
    '9': 'billion',
    '12': 'trillion'
}

test('original value with empty suffix when number smaller than 1000', () => {
    const number = 999
    expect(largeNumber(number, LARGE_NUMBER)).toEqual({
        value: number,
        suffix: ''
    })
})

test('thousand scale with decimal', () => {
    expect(largeNumber(112321, LARGE_NUMBER)).toEqual({
        value: 112.321,
        suffix: 'thousand'
    })
})

test('million scale with decimal', () => {
    expect(largeNumber(1123219, LARGE_NUMBER)).toEqual({
        value: 1.123219,
        suffix: 'million'
    })
})

test('negative value', () => {
    expect(largeNumber(-1123219, LARGE_NUMBER)).toEqual({
        value: -1.123219,
        suffix: 'million'
    })
})

test('zero value', () => {
    expect(largeNumber(0, LARGE_NUMBER)).toEqual({
        value: 0,
        suffix: ''
    })
})

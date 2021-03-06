import formatCurrency from './index'

import enUS from '../locale/en-us'
import enGB from '../locale/en-gb'

test('formats currency to USD by default as number', () => {
    expect(formatCurrency(1)).toBe('$1.00')
})

test('formats currency to USD by default as a string', () => {
    expect(formatCurrency('1', { locale: enUS })).toBe('$1.00')
})

test('formats currency defined locale and currency', () => {
    expect(formatCurrency(1, { locale: enGB })).toBe('£1.00')
})

test('formats currency with scale option', () => {
    expect(formatCurrency(1000, { locale: enGB, asLargeNumber: true })).toBe(
        '£1.00 thousand'
    )
})

test('formats negative currency', () => {
    expect(formatCurrency(-1000, { locale: enGB })).toBe('-£1,000.00')
})

test('formats negative currency with scale option', () => {
    expect(formatCurrency(-1000, { locale: enGB, asLargeNumber: true })).toBe(
        '-£1.00 thousand'
    )
})

test('formats negative currency with scale option and parentesis', () => {
    expect(
        formatCurrency(-1000, {
            locale: enGB,
            asLargeNumber: true,
            useParentesis: true
        })
    ).toBe('(£1.00 thousand)')
})

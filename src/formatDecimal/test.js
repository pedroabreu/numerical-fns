import formatDecimal from './index'

import enUS from '../locale/en-us'
import enGB from '../locale/en-gb'

test('formats decimal', () => {
    expect(formatDecimal(1)).toBe('1')
})

test('formats decimal as a string', () => {
    expect(formatDecimal('1', { locale: enUS })).toBe('1')
})

test('formats decimal as large number', () => {
    expect(formatDecimal(1500.20, { locale: enGB, asLargeNumber: true })).toBe('1.5 thousand')
})

test('formats negative currency', () => {
    expect(formatDecimal(-1000, { locale: enGB })).toBe('-1,000')
})

test('formats negative decimal as a large number', () => {
    expect(formatDecimal(-1000, { locale: enGB, asLargeNumber: true })).toBe('-1 thousand')
})

test('formats negative decimal as large number and parentesis', () => {
    expect(formatDecimal(-1000, { locale: enGB, asLargeNumber: true, useParentesis: true })).toBe('(1 thousand)')
})

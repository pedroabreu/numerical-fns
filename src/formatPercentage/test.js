import formatPercentage from './index'

import enUS from '../locale/en-us'
import enGB from '../locale/en-gb'

test('formats percentage', () => {
    expect(formatPercentage(1)).toBe('100%')
})

test('formats percentage as a string', () => {
    expect(formatPercentage('1', { locale: enUS })).toBe('100%')
})

test('formats negative percentage', () => {
    expect(formatPercentage(-1000, { locale: enGB })).toBe('-100,000%')
})

test('formats negative percentage with parentesis', () => {
    expect(formatPercentage(-1000, { locale: enGB, useParentesis: true })).toBe('(100,000%)')
})

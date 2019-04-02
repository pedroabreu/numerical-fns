import getOptions from '../utils/getOptions'

import format from '../format'

const DEFAULT_OPTIONS = {
    currencyDisplay: 'symbol',
    style: 'currency'
}

function getCurrencyOptions(options) {
    const genericOptions = getOptions(options)

    if (!genericOptions.currency) {
        throw new Error('`currency` is required')
    }

    return Object.assign(genericOptions, {
        currencyDisplay:
            genericOptions.currencyDisplay || DEFAULT_OPTIONS.currencyDisplay,
        style: DEFAULT_OPTIONS.style
    })
}

export default function formatCurrency(value, options) {
    const currencyOptions = getCurrencyOptions(options)

    return format(value, currencyOptions)
}

import getOptions from '../utils/getOptions'

import format from '../format'

const DEFAULT_OPTIONS = {
    style: 'decimal'
}

function getDecimalOptions(options) {
    const genericOptions = getOptions(options)

    return Object.assign(genericOptions, {
        style: DEFAULT_OPTIONS.style
    })
}

export default function formatDecimal(value, options) {
    const decimalOptions = getDecimalOptions(options)

    return format(value, decimalOptions)
}

import getOptions from '../utils/getOptions'

import format from '../format'

const DEFAULT_OPTIONS = {
    style: 'decimal'
}

function formatDecimal(value, options) {
    const decimalOptions = getDecimalOptions(options)

    return format(value, decimalOptions)
}

function getDecimalOptions(options) {
    const genericOptions = getOptions(options)

    return Object.assign(
        genericOptions,
        {
            style: DEFAULT_OPTIONS.style
        }
    )
}

export default formatDecimal

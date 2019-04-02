import getOptions from '../utils/getOptions'

import format from '../format'

const DEFAULT_OPTIONS = {
    style: 'percent'
}

function getPercentOptions(options) {
    const genericOptions = getOptions(options)

    return Object.assign(genericOptions, {
        style: DEFAULT_OPTIONS.style
    })
}

export default function formatPercentage(value, options) {
    const percentOptions = getPercentOptions(options)

    return format(value, percentOptions)
}

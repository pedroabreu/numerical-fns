import largeNumber from '../utils/largeNumber'
import getOptions from '../utils/getOptions'

const DEFAULT_OPTIONS = {
    currencyDisplay: 'symbol',
    style: 'currency'
}

function formatCurrency(value, options = {}) {
    const currencyOptions = getCurrencyOptions(options)

    let scaleSuffix
    let formattedValue = value

    if (currencyOptions.largeNumber) {
        const { value: scaledValue, suffix } = largeNumber(formattedValue)
        formattedValue = scaledValue
        scaleSuffix = suffix
    }

    formattedValue = new Intl.NumberFormat(currencyOptions.locale, currencyOptions).format(formattedValue)

    if (currencyOptions.largeNumber) {
        formattedValue = `${formattedValue} ${currencyOptions.largeNumbers[scaleSuffix]}`
    }

    if (currencyOptions.useParentesis) {
        formattedValue = `(${formattedValue.replace('-', '')})`
    }

    return formattedValue
}

function getCurrencyOptions(options) {
    const genericOptions = getOptions(options)

    if (!genericOptions.currency) {
        throw new Error("`currency` is required")
    }

    return Object.assign(
        genericOptions,
        {
            currencyDisplay: options.currencyDisplay || DEFAULT_OPTIONS.currencyDisplay,
            style: DEFAULT_OPTIONS.style
        }
    )
}

export default formatCurrency

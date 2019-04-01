import largeNumber from "../utils/largeNumber"

import defaultLocale from '../locale/en-us'

const DEFAULT_OPTIONS = {
    currencyDisplay: 'symbol',
    largeNumber: false,
    style: 'currency',
    useParentesis: false
}

function formatCurrency(value, options = {}) {
    const currencyOptions = getOptions(options)

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

function getOptions(options) {
    const currencyLocale = options.locale || defaultLocale

    if (!currencyLocale.currency || !currencyLocale.locale) {
        throw new Error("`currency` and `locale` are required in locale option")
    }

    return Object.assign(
        {},
        currencyLocale,
        {
            currencyDisplay: options.currencyDisplay || DEFAULT_OPTIONS.currencyDisplay,
            largeNumber: options.largeNumber || DEFAULT_OPTIONS.largeNumber,
            style: DEFAULT_OPTIONS.style,
            useParentesis: options.useParentesis || DEFAULT_OPTIONS.useParentesis
        }
    )
}

export default formatCurrency

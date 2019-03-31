import largeNumber from "../utils/largeNumber"

import defaultLocale from '../locale/en-us'

const DEFAULT_OPTIONS = {
    currencyDisplay: 'symbol',
    largeNumber: false,
    style: 'currency',
    useParentesis: false
}

export function formatCurrency(value, options = {}) {
    const currencyLocale = options.locale || defaultLocale

    if (!currencyLocale.currency || !currencyLocale.locale) {
        throw new Error("`currency` and `locale` are required in locale option")
    }

    const currencyOptions = Object.assign(
        {},
        currencyLocale,
        {
            currencyDisplay: options.currencyDisplay || DEFAULT_OPTIONS.currencyDisplay,
            largeNumber: options.largeNumber || DEFAULT_OPTIONS.largeNumber,
            style: DEFAULT_OPTIONS.style,
            useParentesis: options.useParentesis || DEFAULT_OPTIONS.useParentesis
        }
    )

    if (!currencyOptions.locale) {
        throw new Error('Missing locale')
    }

    let scaleSuffix
    let formattedValue = value

    if (currencyOptions.largeNumber) {
        const { value: scaledValue, suffix } = largeNumber(formattedValue)
        formattedValue = scaledValue
        scaleSuffix = suffix
    }

    formattedValue = new Intl.NumberFormat(currencyOptions.locale, currencyOptions).format(formattedValue)

    /* TODO Read abbreviations from locale */
    if (currencyOptions.largeNumber) {
        formattedValue = `${formattedValue} ${scaleSuffix}`
    }

    if (currencyOptions.useParentesis) {
        formattedValue = `(${formattedValue.replace('-', '')})`
    }

    return formattedValue
}

import defaultLocale from '../locale/en-us'

const DEFAULT_OPTIONS = {
    asLargeNumber: false,
    useParentesis: false
}

function getOptions(options = {}) {
    const currencyLocale = options.locale || defaultLocale

    if (!currencyLocale.locale) {
        throw new Error('`locale` is required')
    }

    return Object.assign(
        currencyLocale,
        {
            asLargeNumber: options.asLargeNumber,
            useParentesis: options.useParentesis || DEFAULT_OPTIONS.useParentesis
        }
    )
}

export default getOptions

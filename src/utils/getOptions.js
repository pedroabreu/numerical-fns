import defaultLocale from '../locale/en-us'

const DEFAULT_OPTIONS = {
    largeNumber: false,
    useParentesis: false
}

function getOptions(options) {
    const currencyLocale = options.locale || defaultLocale

    if (!currencyLocale.locale) {
        throw new Error("Missing `locale`")
    }

    return Object.assign(
        currencyLocale,
        {
            largeNumber: options.largeNumber || DEFAULT_OPTIONS.largeNumber,
            useParentesis: options.useParentesis || DEFAULT_OPTIONS.useParentesis
        }
    )
}

export default getOptions

import defaultLocale from '../locale/en-us'

const DEFAULT_OPTIONS = {
    asLargeNumber: false,
    useParentesis: false
}

// native options - Ideally would use spread but want to avoid babel plugins
function getNativeOptions(options) {
    const nativeOptions = {}

    if (options.localeMatcher) {
        nativeOptions.localeMatcher = options.localeMatcher
    }

    if (options.useGrouping) {
        nativeOptions.useGrouping = options.useGrouping
    }

    if (options.minimumIntegerDigits) {
        nativeOptions.minimumIntegerDigits = options.minimumIntegerDigits
    }

    if (options.minimumFractionDigits) {
        nativeOptions.minimumFractionDigits = options.minimumFractionDigits
    }

    if (options.maximumFractionDigits) {
        nativeOptions.maximumFractionDigits = options.maximumFractionDigits
    }

    if (options.minimumSignificantDigits) {
        nativeOptions.minimumSignificantDigits =
            options.minimumSignificantDigits
    }

    if (options.maximumSignificantDigits) {
        nativeOptions.maximumSignificantDigits =
            options.maximumSignificantDigits
    }

    return nativeOptions
}

export default function getOptions(options = {}) {
    const optionsLocale = options.locale || defaultLocale

    if (!optionsLocale.locale) {
        throw new Error('`locale` is required')
    }

    const nativeOptions = getNativeOptions(options)

    return Object.assign(
        optionsLocale,
        {
            asLargeNumber:
                options.asLargeNumber || DEFAULT_OPTIONS.asLargeNumber,
            useParentesis:
                options.useParentesis || DEFAULT_OPTIONS.useParentesis
        },
        nativeOptions
    )
}

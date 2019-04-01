import largeNumber from '../utils/largeNumber'

function format(value, options) {
    let scaleSuffix
    let formattedValue = value

    if (options.largeNumber) {
        const { value: scaledValue, suffix } = largeNumber(formattedValue)
        formattedValue = scaledValue
        scaleSuffix = suffix
    }

    formattedValue = new Intl.NumberFormat(options.locale, options).format(formattedValue)

    if (options.largeNumber) {
        formattedValue = `${formattedValue} ${options.largeNumbers[scaleSuffix]}`
    }

    if (options.useParentesis) {
        formattedValue = `(${formattedValue.replace('-', '')})`
    }

    return formattedValue
}

export default format

import largeNumber from '../utils/largeNumber'

function format(value, options) {
    let scaleSuffix
    let formattedValue = value

    if (options.asLargeNumber) {
        const { value: scaledValue, suffix } = largeNumber(formattedValue)
        formattedValue = scaledValue
        scaleSuffix = suffix
    }

    formattedValue = new Intl.NumberFormat(options.locale, options).format(formattedValue)

    if (options.asLargeNumber && options.largeNumbers[scaleSuffix]) {
        formattedValue = `${formattedValue} ${options.largeNumbers[scaleSuffix]}`
    }

    if (options.useParentesis) {
        formattedValue = `(${formattedValue.replace('-', '')})`
    }

    return formattedValue
}

export default format

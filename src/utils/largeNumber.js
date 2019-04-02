// Inspired by https://gist.github.com/tobyjsullivan/96d37ca0216adee20fa95fe1c3eb56ac
export default function largeNumber(value, largeNumbers) {
    let newValue = value
    let nrSuffixes = 0
    const suffixes = Object.keys(largeNumbers)

    if (Math.abs(value) >= 1000) {
        for (let i = 0; i < suffixes.length; i++) {
            const pow = suffixes[i]
            newValue = value / 10 ** pow

            if (Math.abs(newValue) <= 1000) {
                nrSuffixes = pow
                break
            }
        }
    }

    return { value: newValue, suffix: largeNumbers[nrSuffixes] || '' }
}

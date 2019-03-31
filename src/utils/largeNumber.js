const SUFFIXES = ["", "thousand", "million", "billion", "trillion"]

// Inspired by https://gist.github.com/tobyjsullivan/96d37ca0216adee20fa95fe1c3eb56ac
export default function largeNumber(value) {
    const valueSign = value >= 0 ? 1 : -1
    let newValue = valueSign * value
    let nrSuffixes = 0

    while(newValue >= 1000) {
        newValue = newValue / 1000
        nrSuffixes++
    }

    return { value: valueSign * newValue, suffix: SUFFIXES[nrSuffixes] }
}

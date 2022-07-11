// Challenge 2:
// Write a solution to find the character that has the 
// highest number of occurrences within a certain string, ignoring case. 
// If there is more than one character with equal highest occurrences, 
// return the character that appeared first within the string.
// For example:
// Input: "Character"
// Output: c


const highestOccurrencesCharacter = str => {
    if (!str.length) return "nothing"
    if (str.length <= 1) return str
    let arrChar = str.toLowerCase().split('')

    let obj = {}
    for (let i = 0; i < arrChar.length; i++) {
        if (!obj[arrChar[i]]) {
            obj[arrChar[i]] = 1
        } else {
            obj[arrChar[i]]++
        }
    }
    let arr = []
    for (let item in obj) {
        arr.push([item, obj[item]])
    }
    arr.sort((a, b) => {
        if (a[1] != b[1]) {
            return b[1] - a[1]
        }
    })
    return arr[0].splice(0, 1).join('')
}

console.log(highestOccurrencesCharacter('Character'))
console.log(highestOccurrencesCharacter('bacbAdbaeaB'))
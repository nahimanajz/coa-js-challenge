

const transformString = (str) => {
    const size = str.length;
    if (size % 3 === 0 && size % 5 !== 0 && size % 15 !== 0) {
        return reverseStr(str)
    } else if (size % 5 === 0 && size % 3 !== 0 && size % 15 !== 0) {
        return convertToAscii(str)
    } else if (size % 15 === 0) {

        const reversedStr = reverseStr(str)
        return convertToAscii(reversedStr)
    }


}
const convertToAscii = (str) => {
    let result = "";
    for (let index = 0; index < str.length; index++) {
        const element = str[index].charCodeAt(0)
        result += " " + element

    }
    return result
}
const reverseStr = (str) => {
    return str.split('').reverse().join('')
}

const test1 = "hamburger"
const result1 = transformString(test1)
console.log("result 1", result1)

const test2 = "janvierere"
const result2 = transformString(test2)
console.log("result 2", result2)

const test3 = "jenvaerarezeden"
const result3 = transformString(test3)
console.log("result 3", result3)
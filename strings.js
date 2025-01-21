const firstLetterToUpperCase = (str) => {
    return str[0].toUpperCase() + str.substring(1)
}


const trimmingString = (str, len) => {
    let trimStr = ""
    let strArr = str.split(' ')

    for (let i = 0; trimStr.length < len; i++) {
        trimStr = trimStr + strArr[i]
        if (trimStr.length < len) {
            trimStr += ' '
        } else {
            trimStr += '...'
        }
    }

    return trimStr
}

const isSubStr = (str1, str2) => {
    return str1.indexOf(str2) !== -1 || str2.indexOf(str1) !== -1
}

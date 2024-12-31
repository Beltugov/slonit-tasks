let array = [9,10,1,101,65,7,9,8,15,21,16]

function mySlice(arr, start = 0, end = arr.length) {
    return arr.filter((elem, index) => index >= start && index < end)
}

console.log(array.slice(1, 4))
console.log(mySlice(array,1,4))

function myIndexOf(arr, item, from = 0) {
    for (let i = from; i < arr.length ;i++) {
        if (item === arr[i]) return i
    }
    return -1
}

console.log(array.indexOf(9, 1))
console.log(myIndexOf(array,9, 1))

function myIncludes(arr, item, from = 0) {
    for (let i = from; i < arr.length; i++) {
        if (item === arr[i]) return true
    }
    return false
}

console.log(array.includes(1, 2))
console.log(myIncludes(array,1,2))
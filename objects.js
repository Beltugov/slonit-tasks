const getKeys = (obj) => {
    return Object.keys(obj).filter((value) => typeof obj[value] === "number").sort((a, b) => obj[b] - obj[a])
}

const example = {
    name: "Vas",
    friends: 5,
    likes: 19,
    projects: 7
}

console.log(getKeys(example))
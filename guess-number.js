(function guessNumber () {
    let min = 0;
    let max = 100;
    let count = 0;
    const hiddenNumber = Math.ceil(Math.random() * (max - min) + min)
    let currentNumber =  Math.ceil(max + min) / 2

    console.log("Компьютер 1 загадал число: " + hiddenNumber)

    while (currentNumber !== hiddenNumber) {
        console.log(" ")
        currentNumber = Math.ceil((max + min) / 2)
        count++
        console.log("Попытка  номер: " + count)
        console.log("Компьютер 2: " + currentNumber)
        if (currentNumber < hiddenNumber) {
            console.log("Компьютер 1: Больше")
            min = currentNumber
        } else if (currentNumber > hiddenNumber) {
            console.log("Компьютер 1: Меньше")
            max = currentNumber
        } else {
            console.log("Компьютер 1: Угадал!")
        }
    }
    console.log(" ")
    console.log("Всего " + count + " попыток")
})()

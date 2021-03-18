function printDouble(number1, number2) {
    return new Promise(resolve => {
        setTimeout(
            () => {
                total = number1 * 2 + number2
                console.log(total)
                resolve(total)
            },
            Math.floor(Math.random() * 100) + 1
        )
    })
}

printDouble(5, 0)
    .then((result) => { return printDouble(10, result) })
    .then((result) => { return printDouble(15, result) })
    .then((result) => { return printDouble(20, result) })
    .then((result) => { return printDouble(25, result) })

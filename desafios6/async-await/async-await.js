function printDoubles(number1, number2) {
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

async function printPromise() {
    let result = await printDoubles(5, 0)
    result = await printDoubles(10, result)
    result = await printDoubles(15, result)
    result = await printDoubles(20, result)
    result = await printDoubles(25, result)
}
printPromise()
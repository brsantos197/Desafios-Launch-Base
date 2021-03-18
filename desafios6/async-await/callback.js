function printDouble(number1, number2, callback, string) {
  setTimeout(
    () => {
      total = number1 * 2 + number2
      console.log(`${string}: ${total}`)
      callback(total)
    },
    Math.floor(Math.random() * 100) + 1
  )
}

function printAllCallback(string) {
  printDouble(5, 0, (result) => {
    printDouble(10, result, (result) => {
      printDouble(22, result, (result) => {
        printDouble(1, result, (result) => {
          printDouble(89, result, () => { }, string)
        }, string)
      }, string)
    }, string)
  }, string)
}

printAllCallback('Callback')

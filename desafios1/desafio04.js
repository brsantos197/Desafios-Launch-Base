const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  };

function createTransaction({type, value}) {
    user.transactions.push({type: type, value: value})
    if (type == 'credit') {
        user.balance += value
    }
    if (type == 'debit') {
        user.balance -= value
    }
}

function getHigherTransactionByType(type) {
    let lastTransactionValue = 0
    let higerTransactionValue = 0
    let lastTransaction
    for (transaction of user.transactions) {
        if(transaction.type == type) {    
           lastTransactionValue = transaction.value
        }
        if(lastTransactionValue > higerTransactionValue) {
            higerTransactionValue = lastTransactionValue
            lastTransaction = transaction
        }
        
    }
    return lastTransaction
}

function getAverageTransactionValue() {
    let sum = 0
    for(transaction of user.transactions) {
        sum += transaction.value
    }
    return sum / user.transactions.length
}

function getTransactionsCount() {
    count =  { credit: 0, debit: 0 }
    for(transaction of user.transactions) {
        if(transaction.type == 'credit') {
            count.credit++
        }
        if(transaction.type == 'debit') {
            count.debit++
        }
    }
    return count
}

createTransaction({ type: "credit", value: 50 })
createTransaction({ type: "credit", value: 120 })
createTransaction({ type: "debit", value: 80 })
createTransaction({ type: "debit", value: 30 })

console.log(user.balance); 

console.log(getHigherTransactionByType("credit"))
console.log(getHigherTransactionByType("debit"))

console.log(getAverageTransactionValue())

console.log(getTransactionsCount())
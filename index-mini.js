const prompt = require("prompt-sync")()

const mathOperator = {
    "1": "Addition",
    "2": "Subtraction",
    "3": "Multiplication",
    "4": "Division",      
}

const forceQuitKeyword = `quit`

// Force quit any time
function forceQuit(propVar) {
    if (propVar === forceQuitKeyword) {
        console.clear()
        console.log(`Parting is such sweet sorrow. 💔`)
        process.exit()
    } else null
}

function mathQuit() {
    console.clear()
    console.log(`Thank you ${userName}. Good bye.`)
}


// Initiate
console.clear()
const userName = prompt("What is your name? ")
console.clear()


console.log(`\nHello ${userName} welcome to LCI calculator.`)
console.log(`\nWould you like to try?`)

console.log(`\n---------------------------------`)
let mathContinue = prompt(`Type 1 (Yes), 0 (No): `)

mathContinue === "1" ? mathContinue = true : mathQuit()

while (mathContinue > 0) { 
    console.clear()
    console.log(`What math operation would you like to do?
    1. ${mathOperator[1]}
    2. ${mathOperator[2]}
    3. ${mathOperator[3]}
    4. ${mathOperator[4]}`)

    console.log(`\n---------------------------------`)
    const mathOperation = prompt("Type 1, 2, 3, 4: ")

    forceQuit(mathOperation)

    console.clear()
    console.log(`You have selected ${mathOperation} ${mathOperator[mathOperation]}`)
    const mathNumberX = prompt(`Please enter first number. `)
    forceQuit(mathNumberX)
    console.log(`First number: ${mathNumberX}\n`)

    const mathNumberY = prompt(`Please enter second number. `)
    forceQuit(mathNumberY)
    console.log(`Second number: ${mathNumberY}`)

    let mathResult
    switch (Number(mathOperation)) {
        case 1:
            mathResult = mathNumberX + mathNumberY
            break;

        case 2:
            mathResult = mathNumberX - mathNumberY
            break;

        case 3:
            mathResult = mathNumberX * mathNumberY
            break;
        
        case 4:
            mathResult = mathNumberX / mathNumberY
            break;
    }

    console.log(`Your result: ${mathResult}`)

    console.log(`Would you like to continue?`)
    console.log(`\n---------------------------------`)
    mathContinue = prompt(`Type 1 (Yes), 0 (No): `)
    forceQuit(mathContinue)


    if (mathContinue === "0")
    {
        mathQuit()
        break;
    } else {
        mathContinue = true
    }
}
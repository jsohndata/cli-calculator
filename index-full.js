const prompt = require("prompt-sync")()

class Question {
    constructor(prop1,prop2,prop3,prop4,prop5) {
        this['1'] = prop1
        this['2'] = prop2
        this['3'] = prop3
        this['4'] = prop4
        this['5'] = prop5
    }
}

const questionName = new Question (
    `Please enter your name:`,
    `🤷 Did you forget your name? Please enter your name.`,
    `🤷 Come on now. You can do better. Your name?`,
    `🤷 Go ahead, make my day.`,
    `👋 Name is required to Enter The Dragon. Good bye.`,
)

const questionGame = new Question (
    `🤷 Type any letter to continue. `,
    `🤷 Like any... `,
    `🤷 I would do anything for love, but I won't type that. `,
    `🤷 You're a real tough cookie with a long history. `,
    `👋 Let's play next time. Good bye.`,
)

const config = {
    quitKeyword: `quit`,
    randomLimit: 10000,
}

const mathOperatorFunction = {
    '0': function (x,y) { return [x + y, `+`]},
    '1': function (x,y) { return [x - y, `-`]},
    '2': function (x,y) { return [x * y, `*`]},
    '3': function (x,y) { return [x / y, `/`]},
    '4': function (x,y) { return [x % y, `%`]},
}

const mathOperator = [
    "Addition",
    "Subtraction",
    "Multiplication",    
    "Division",
    "Modular",
]


// Console Log
function renderConsoleLog(paramText) {
    console.log(paramText,)
}

// Console Clear
function renderConsoleClear() {
    console.clear()
}

// Construct Operator 
function renderOperator(propUseName = '') {
    return `Operator ${propUseName} 🧖`
}

// Force quit any time
function forceQuit(propVar) {
    if (propVar === config.quitKeyword) {
        renderConsoleClear()
        renderConsoleLog(`Parting is such sweet sorrow. 💔`)
        process.exit()
    } else null
}

// Check prompt
/* If Null repeat until valid response */
function checkPrompt(propVar,propQuestion) {
    let indexCounter = 0

    if (propVar == config.quitKeyword) forceQuit(propVar)
    else {
        do {
            indexCounter++ 
            switch (indexCounter) {
                case 0:
                case 1:
                case 2:        
                    propVar = prompt(`${propQuestion[1]} `)
                    break
        
                case 3:
                case 4:
                    propVar = prompt(`${propQuestion[2]} `)
                    break
        
                case 5:
                    propVar = prompt(`${propQuestion[3]} `)
                    break
        
                case 6:
                    propVar = prompt(`${propQuestion[4]} `)
                    break
        
                case 7:
                    propVar = prompt(`${propQuestion[5]} `)
                    process.exit()
                    break                
            }
        } while (propVar === "")
    }
    return propVar
}


// CLI Calculator
// ***********************************************************
function cliCalculator() {
    renderConsoleClear()
    
    renderResult =  `Today's game is LCI Calculator 🧮.\n`
    renderResult += `(Type ${config.quitKeyword} to exit at any time).\n\n`
    renderResult += `Please choose one of the following.\n`

    const mathOperatorTotal = mathOperator.length

    for (let i=0; i< mathOperatorTotal; i++) {
        const mathOperatorEach = mathOperator[i]

        /* Adding plus 1 to i for human ease of use */
        renderResult += `${i+1}: ${mathOperatorEach}`

        /* Add next time after each interation. Last item add HR (horizontal line) */
        i!==mathOperatorTotal ? renderResult += `\n` : renderResult += `\n---------------------------------`
    }

    renderConsoleLog(renderResult)

    let mathOperatorPrompt
    
    do {
        mathOperatorPrompt = prompt(`Choose 👉  1 - ${mathOperatorTotal}: `)

        forceQuit(mathOperatorPrompt)

    } while(isNaN(mathOperatorPrompt) || mathOperatorPrompt > mathOperatorTotal || mathOperatorPrompt < 1);


    renderConsoleClear()


    // 1) Choose Math Operator and Number
    // ***********************************************************
    /* -1 => because array starts with 0. For human we have added 1 to each index so start is 1 not 0 */
    renderResult = `You have choosen ${mathOperatorPrompt} for ${mathOperator[mathOperatorPrompt - 1]}.\n`
    renderResult += `---------------------------------`
    
    renderConsoleLog(renderResult)


    // 1.1) Choose first numnber
    // ***********************************************************
    let mathNum1st

    do {
        mathNum1st  = prompt(`Enter your first number or type random: `)

        if (mathNum1st == "random") break
        forceQuit(mathNum1st)

    } while (isNaN(mathNum1st))

    const mathNumX = mathNum1st == 'random' ? Math.floor(Math.random() * config.randomLimit) : Number(mathNum1st)
    renderResult = `1st Number: ${mathNumX}\n`
    renderConsoleLog(renderResult)


    // 1.2) Choose second numnber
    // ***********************************************************
    let mathNum2nd

    do {
        mathNum2nd  = prompt(`Enter your second number or type random: `)

        if (mathNum2nd == "random") break
        forceQuit(mathNum2nd)

    } while (isNaN(mathNum2nd))

    const mathNumY = mathNum2nd == 'random' ? Math.floor(Math.random() * config.randomLimit) : Number(mathNum2nd)
    renderResult = `2nd Number: ${mathNumY}\n`
    renderConsoleLog(renderResult)


    // 1.3) Computate and render result
    // ***********************************************************
    /* Using object to reference instead of switch or if, else if for leaner code and scalability */ 
    const mathOperationResult       = mathOperatorFunction[Number(mathOperatorPrompt - 1)](mathNumX,mathNumY)
    const mathOperationResultInt    = mathOperationResult[0]
    const mathOperationResultString = mathOperationResult[1]

    renderResult = `Equation: ${mathNumX} ${mathOperationResultString} ${mathNumY}\n`
    renderResult += `Result: ${Number(mathOperationResultInt)}\n`

    renderConsoleLog(renderResult)
}







// 0.0) Inititiate
// ***********************************************************
let renderResult
renderConsoleClear()



// 1.0) Ask Name
// ***********************************************************
renderResult = `Hello ${renderOperator()} What is thy name?\n`
renderResult += `(Type ${config.quitKeyword} to exit at any time).\n\n`
renderResult += `---------------------------------`
renderConsoleLog(renderResult)

let userName = prompt('Your name: ')
if (userName === null || userName === "" ) userName = checkPrompt(userName,questionName)



// 2.0) Greet Operator
// ***********************************************************
renderConsoleClear()

renderResult = `Hello, ${renderOperator(userName)}, Nice to meet you. I am LAH 9000 🔴.\n`
renderConsoleLog(renderResult)



// 3.0) Greet Operator and Ask to Play
// ***********************************************************
renderResult = `Would you like to play a game today?\n`
renderResult += `---------------------------------`
renderConsoleLog(renderResult)

let continueGame = prompt(`Type any letter to continue or ${config.quitKeyword} to exit. `)

if (continueGame === null || continueGame === "" ) continueGame = checkPrompt(continueGame,questionGame)
else if (continueGame == "No") {
    renderResult = `I'm sorry Dave, I'm afraid I can't do that. 🔴`
    renderConsoleClear()
    renderConsoleLog(renderResult)
}



// 4.0) Lets Play
// ***********************************************************
while (continueGame !== null) {
    cliCalculator()

    renderResult =  `Would you like to play a again ${renderOperator(userName)}?\n`
    renderResult += `---------------------------------`
    renderConsoleLog(renderResult)

    continueGame = prompt(`Type any letter to continue or ${config.quitKeyword} to exit. `)

    if (continueGame === null || continueGame === "" ) continueGame = checkPrompt(continueGame,questionGame)
    else if (continueGame == config.quitKeyword ) {
        renderConsoleClear()
        renderResult =  `---------------------------------\n`
        renderResult += `So long, and thanks for\n`
        renderResult += `all the fish ${renderOperator(userName)}.\n\n`
        renderResult += `Farewell 🌏\n---------------------------------`
        renderConsoleLog(renderResult)
        break        
    }
}
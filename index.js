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

const nameQuestion = new Question (
    'Please enter your name:',
    '🤷 Did you forget your name? Please enter your name.',
    '🤷 Come on now. You can do better. Your name?',
    '🤷 Go ahead, make my day.',
    '👋 Your name is require to Enter The Dragon. Good bye.',
)

const gameQuestion = new Question (
    'Choose 👉 Yes, No:',
    '🤷 Choose 👉 Yes, No:',
    '🤷 Choose 👉 Yes, No:',
    '🤷 Choose 👉 Yes, No:',
    '🤷 Choose 👉 Yes, No:',
)



/* Originally it was ...
'0': function (x,y) { return x + y }

But I wanted to display the equation of the math without creating another array. Thus returning this as an array instead
*/
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

const quitKeyword = `quit`

function renderConsoleLog(paramText) {
    console.log(paramText)
}

function renderConsoleClear() {
    console.clear()
}

function renderOperator(propUseName = '') {
    return `Operator ${propUseName} 🧖`
}

function forceQuit() {
    renderConsoleClear()
    renderConsoleLog(`Parting is such sweet sorrow. 💔`)
    process.exit()
}

function promptQuestions(propVar, propObject) {
    switch (propVar) {
        case 0:
        case 1:
        case 2:        
            userName = prompt(`${propObject[1]} `)
            break

        case 3:
        case 4:
            userName = prompt(`${propObject[2]} `)
            break

        case 5:
            userName = prompt(`${propObject[3]} `)
            break

        case 6:
            userName = prompt(`${propObject[4]} `)
            break

        case 7:
            userName = prompt(`${propObject[5]} `)
            process.exit()
            break
    }
}

// LCI Calculator
// ***********************************************************
function lciCalculator() {
    renderConsoleClear()
    
    renderResult = `Today's game is LCI Calculator 🧮.\nType ${quitKeyword} to exit at any time.\n\nPlease choose one of the following.\n`

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
    indexCounter = 0
    
    do {
        mathOperatorPrompt = prompt(`Choose 👉  1 - ${mathOperatorTotal}: `)

        mathOperatorPrompt === quitKeyword ? forceQuit() : null

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
        mathNum1st === quitKeyword ? forceQuit() : null

    } while (isNaN(mathNum1st))

    const mathNumX = mathNum1st == 'random' ? Math.floor(Math.random() * 10000) : Number(mathNum1st)
    renderResult = `1st Number: ${mathNumX}\n`
    renderConsoleLog(renderResult)


    // 1.2) Choose second numnber
    // ***********************************************************
    let mathNum2nd

    do {
        mathNum2nd  = prompt(`Enter your second number or type random: `)

        if (mathNum2nd == "random") break
        mathNum2nd === quitKeyword ? forceQuit() : null

    } while (isNaN(mathNum2nd))

    const mathNumY = mathNum2nd == 'random' ? Math.floor(Math.random() * 10000) : Number(mathNum2nd)
    renderResult = `2nd Number: ${mathNumY}\n`
    renderConsoleLog(renderResult)


    // 1.3) Computate and render result
    // ***********************************************************
    /* Using object to reference instead of switch or if, else if for leaner code and scalability */ 
    const mathOperationResult       = mathOperatorFunction[Number(mathOperatorPrompt - 1)](mathNumX,mathNumY)
    const mathOperationResultInt    = mathOperationResult[0]
    const mathOperationResultString = mathOperationResult[1]

    renderResult = `Equation: ${mathNumX} ${mathOperationResultString} ${mathNumY}`
    renderResult += `Result: ${Number(mathOperationResultInt)}\n`

    renderConsoleLog(renderResult)
}



// 0.0) Initiate
// ***********************************************************
let renderResult
renderConsoleClear()


// 1.0) Ask Name
// ***********************************************************
let indexCounter = 0
renderResult = `Hello ${renderOperator()} What is thy name?\n`
renderResult += `---------------------------------`

renderConsoleLog(renderResult)

let userName = prompt('Your name: ')

if (userName == "") {
    do {
        indexCounter++
        promptQuestions(indexCounter,nameQuestion)
    } while (userName == "")
}


// 2.0) Greet Operator
// ***********************************************************
renderConsoleClear()

renderResult = `Hello, ${renderOperator(userName)}, Nice to meet you. I am LAH 9000 🔴.`
renderConsoleLog(renderResult)


// 3.0) Greet Operator and Ask to Play
// ***********************************************************
indexCounter = 0
renderResult = `Would you like to play a game today?\n`
renderResult += `---------------------------------`

renderConsoleLog(renderResult)

let continueGame = prompt('Type any letter to continue or No to quit.')

if (continueGame == "") {
    do {
        indexCounter++
        promptQuestions(indexCounter,gameQuestion)

        continueGame === quitKeyword ? forceQuit() : null

    } while (continueGame == "")
} 

if (continueGame == "No") {
    renderResult = `I'm sorry Dave, I'm afraid I can't do that. 🔴`
    renderConsoleClear()
    renderConsoleLog(renderResult)
}


// 4.0) Lets Play
// ***********************************************************
while (continueGame !== null) {
    lciCalculator()

    renderResult =  `Would you like to play a again ${renderOperator(userName)}?\n`
    renderResult += `---------------------------------`
    renderConsoleLog(renderResult)

    continueGame = prompt('Type any letter to continue or No to quit. ')
    if (continueGame == "") {
        do {
            indexCounter++
            promptQuestions(indexCounter,gameQuestion)

            continueGame === quitKeyword ? forceQuit() : null

        } while (continueGame == "")
    }

    
    if (continueGame == "No") {
        renderConsoleClear()
        renderResult =  `---------------------------------\n`
        renderResult += `So long, and thanks for\n`
        renderResult += `all the fish ${renderOperator(userName)}.\n\n`
        renderResult += `Farewell 🌏\n---------------------------------`
        renderConsoleLog(renderResult)
        break        
    }
}  /// BUG: when entering any word besdies NO or Yes it exits
/// BUG: fix issue when entering blank.

const prompt = require("prompt-sync")()

console.log(`what is your name?`)
const prompt1 = prompt(`Your name? `)

console.log(`your name is ${prompt1}`)

console.log(`Choose add, subtact, multiply, and divide`)

const mathOperator = prompt(`Choose one? `)
const numberX = prompt(`Choose first number? `)
const numberY = prompt(`Choose second number? `)

if (mathOperator === "add") {
    console.log(`${numberX} + ${numberY}`)
} else if (mathOperator === "subtact") {
    console.log(`${numberX} - ${numberY}`)
}


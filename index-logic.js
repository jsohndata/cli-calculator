// Linenar
/* 
0.0) Start Clean
0.1) State sentence

1.0) Prompt question
1.1) Render prompt
1.2) Do again?

*/
const prompt = require("prompt-sync")()

function sample1() {
    // 0.0) Start Clean 
    console.clear()

    // 0.1) State sentence
    console.log("Welcome Message.")

    // 1.0) Prompt question
    console.log("Question1: Choose one")
    const question1 = prompt ("Type 1 or 0: ")

    // 1.1) Render prompt
    console.log(`Your answer was ${question1}`)

    // 1.2) Do again?
    console.log("Question2: Would you like to try again")
    const question2 = prompt ("Type Yes or No: ")
}






// Loop 
/*
0.0) Start Clean
0.1) State sentence

1.0) Prompt question <------------------|
1.1) Render prompt                      |
1.2) Do again?                          |
                                        |
2.0) Check Response                     |
2.1) If => Yes, clear and set to true ---
2.1) Else => No, clear, state message, and exit loop
*/


function sample2() {
    // 0.0) Start Clean 
    console.clear()

    // 0.1) State sentence
    console.log("Welcome Message.")

    let questionContinue = true // Ingore this until 2.0

    while (questionContinue == true) { //<-------------------------
                                                                //|
        // 1.0) Prompt question                                 //|
        console.log("Question1: Choose one")                    //|
        const question1 = prompt ("Type 1 or 0: ")              //|
                                                                //|
        // 1.1) Render prompt                                   //|
        console.log(`Your answer was ${question1}`)             //|
                                                                //|
        // 1.2) Do again?                                       //|
        console.log("Question2: Would you like to try again")   //|
        const questionContinue = prompt ("Type Yes or No: ")    //|
                                                                //|
        // 2.0) Check Response                                  //|
        // 2.1) If Yes, clear, set to true, stay in loop        //|
        if (questionContinue == "Yes") {                        //|
            questionContinue == true                            //|
            console.clear() //----------------------------------//|
                                                                
        } else {
        // 2.1) Else => No, clear, state message, and exit loop
            questionContinue == false
            console.clear()
            console.log("Thank you, good bye.")
            process.exit()
        }
    }
}

sample2()
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question: DONE
// WHEN I answer a question
// THEN I am presented with another question: DONE
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock: DONE
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over: DONE
// WHEN the game is over
// THEN I can save my initials and score
console.log(this)

var gameTime = 60;
var score = 0;
var questionIndex = 0;
var answersIndex = 0;
var timer;

const startBtn = document.getElementById('start');
const nextBtn = document.getElementById('next-question-btn')
const question = document.getElementById('question');
const answers = document.getElementById('answers');
const countDown = document.getElementById('count-down');
const scoreNum = document.getElementById('score-number')

var questionArray = [
    {
        Q: "What is 3+3?", A: "6",
        ac: ["2", "4", "6", "8"]
    },
    {
        Q: "What is 10-8?", A: "2",
        ac: ["1", "2", "3", "4"]
    },
    {
        Q: "What is 3*3?", A: "9",
        ac: ["3", "6", "9", "12"]
    },
    {
        Q: "What is 125/5?", A: "25",
        ac: ["10", "15", "20", "25"]
    },
]

function startGame() {
    // hide btn
    startBtn.setAttribute('class', 'start-hidden')
    // start timer
    timer = setInterval(tick, 1000)
    // clear score
    score = 0;
    // display score number
    scoreNum.textContent = score
    // display first question
    nextQuestion()
}

function tick() {
    // time goes down by 1
    gameTime--;
    // display new time
    countDown.textContent = gameTime

    if (gameTime === 0) {
        console.log('you have run out of time')
        endGame()
    } else {
        nextQuestion()
    }
}

function nextQuestion() {
    // display question
    question.textContent = questionArray[questionIndex].Q

    // clears answer choices
    answers.innerHTML = "";
    // display answer choices
    questionArray[questionIndex].ac.forEach(function createAnswerButton(choice) {
        // create element for buttons
        var answerBtn = document.createElement('button')
        // add button to screen
        answerBtn.textContent = choice

        answerBtn.onclick = onUserChoice

        // add value
        answerBtn.setAttribute('value', choice)


        answers.appendChild(answerBtn)

    })

}

function onUserChoice() {
    if (event.target.value === questionArray[questionIndex].A) {

        console.log('correct')
        // increase score
        score += 2;
        scoreNum.textContent = score

    } else {
        console.log('incorrect')
        console.log('time reduced by 15')
        gameTime -= 15
    }

    questionIndex++

    if (questionIndex >= questionArray.length) {
        endGame()
    } else {
        nextQuestion()
    }

}

function endGame() {
    // clear timer
    clearInterval(timer)
    // display Game Over in the question section 
    question.textContent = 'GAME OVER'
    // hide answers at the end of the game 
    answers.setAttribute('class', 'answers-hidden')
    // ask for initials

    // display score

    // end game
    console.log('end game')
}

function initials() {
    // 
}



startBtn.onclick = startGame
// nextBtn.onclick = nextQuestion


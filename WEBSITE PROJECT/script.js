const question = document.querySelector('#question')      //this function returns the first element within the document that matches the specified id(question)
const choices = Array.from(document.querySelectorAll('.choice-text'))  //I'm creating an array with all the elements from .choice-text
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('.score-number')



let currentQuestion = {}    //new object to store every time a different object of availableQuestions
let score               //set the score to display
let questionCounter      //set the counter to display
let availableQuestions = []   //array used as a clone to not modify the original 'questions' array

//set Q&A pairs with an array of objects
let questions = [
    {
        question: "Which are a UX designer typical tasks?",
        choice1: "Researching keywords, producing interesting written content and proofreading their work for accuracy and quality.",
        choice2: "Research, creating personas, designing wireframes and interactive prototypes as well as testing designs.",
        choice3: "Create and upload copy and images for the organisation's website.",
        answer: 2,
    },
    {
        question: "What UX is?",
        choice1: "Is the process used to create products that provide meaningful and relevant experiences to users.",
        choice2: "Is the graphical layout of an application.",
        choice3: "Is a multidisciplinary field of study focusing on the design on the interaction between humans (the users) and computers.",
        answer: 1,
    },
    {
        question: "How many death kisses are enlisted by game designer Carolyn Miller?",
        choice1: "7",
        choice2: "6",
        choice3: "8",
        answer: 1,
    },
    {
        question: "How we should design for a baby in kindergarten phase?",
        choice1: "All instruction should be given in audio, video, or animation, since babies cannot read.",
        choice2: "Using the keyboard should be avoided.",
        choice3: "Use simple words and rely heavily on symbols, icons, and pictures to communicate meaning.",
        answer: 3,
    },
    {
        question: "Why cyberbullying is considered to be very dangerous?",
        choice1: "Physical pain",
        choice2: "Bullies can be anonymous and harmful information or comments can be persistent.",
        choice3: "It can bring to depression and suicide.",
        answer: 3,        
    },
    {
        question: "Why UX should also consider elderly people?",
        choice1: "Because their number is largely increasing.",
        choice2: "Because there are the richest category of people.",
        choice3: "Because they are not able to use computers.",
        answer: 1,             
    },
    {
        question: "What is accessibility?",
        choice1: "It is concerned with creating designs that are effective, efficient, and satisfying to use.",
        choice2: "Is the concept of whether a product or service can be used by everyone—however they encounter it.",
        choice3: "It is something concerning just visual aspects",
        answer: 2,
    },
    {
        question: "Which of the following focuses on people with disabilities?",
        choice1: "Accessibility.",
        choice2: "Usability",
        choice3: "Neither of them",
        answer: 1,              
    },
    {
        question: "Which are the four principles that provide the foundation for Web accessibilty?",
        choice1: "Perceivable, Operable, Understandable, and Resilient.",
        choice2: "Persistent, Operable, Understandable, and Robust.",
        choice3: "Perceivable, Operable, Understandable, and Robust.",
        answer: 3,  
    },
    {
        question: "Which is the first phase of the UX Design cycle?",
        choice1: "Specify user requirements.",
        choice2: "Understand contest of use.",
        choice3: "Design solutions.",
        answer: 2,              
    }
]

const NUM_QUESTIONS = 5       //question submitted in the test
const SCORE_POINTS = 1     //score to increment when the answer is right

function getName(){
    var username = document.querySelector('#username').value;       //get the username from the textbox in main.html
    sessionStorage.setItem("nomePlayer", username);              //save the score to use it in results.js
}

function startGame() {     //classic way to define a function, this is called in quiz.html through the attribute 'onload'
    questionCounter = 1      //everytime a game start, reset the counter and score(below)
    score = 0
    availableQuestions = [...questions]    //'...' used for cloning the array 
    getNewQuestion()         //invoking the next function
}

getNewQuestion = () => {     //alternative way to define a function, this is called from startgame() function 
    if(questionCounter > NUM_QUESTIONS) {
        sessionStorage.setItem('punteggioFinale', score)      //save the score to use it in results.js
        return window.location.assign('results.html')           //it opens the results page   
    } 

    progressText.innerText = `Question ${questionCounter} of ${NUM_QUESTIONS}`  //it writes every time the current question, incrementing by 1 

    const questionIndex = Math.floor(Math.random()*availableQuestions.length)        //it extracts a random number within the lenght of the available questions
    currentQuestion = availableQuestions[questionIndex]   //put in currentQuestion the next question based on the random index
    question.innerText = currentQuestion.question   //add '.question' to extrapolate the key 'question' from the array 'questions'

    choices.forEach(function(choice) {          //we use a forEach method to place the choices for every box
        var index = choice.dataset['number']               //we extrapolate the data-'number' from every div
        choice.innerText = currentQuestion["choice" + index]      //the index of currentQuestion will be choice + 1/2/3
    })

    availableQuestions.splice(questionIndex, 1)   //remove questions from the support array at position questionIndex, removing 1 element

    questionCounter++
}

choices.forEach(choice => {            //for each element of 'choices' array, 'choice binds to the 3 div until there is a click matched'
    choice.addEventListener('click', () => {

        const selectedAnswer = choice.dataset['number']     //binding the data-number of the matched div
        let isItTrue 

        if(selectedAnswer == currentQuestion.answer){           //comparing the data-number with the number in the key "answer"
            choice.style.backgroundColor = "rgb(49, 204, 49)"    //apply green color if correct
            isItTrue = true
        }
        else{
            choice.style.backgroundColor = "rgb(207, 8, 8)"   //apply red color if incorrect
        }

        if(isItTrue){
            score += SCORE_POINTS        //keeps track of right answers 
            scoreText.innerText = score      //writes current score 
        }

        setTimeout(function() {          //I used setTimeOut to let mark the question green or red for 1 second
            choice.style.backgroundColor = "rgb(63, 81, 119)"    //apply default blue color
            choice.style.borderRadius = "20px"
            getNewQuestion()
        }, 50)        //RIMETTI 1000 COME TIMEOUT, ORA E' A 50 PER QUESTIONI DI RAPIDITA' DI DEBUGGING
    })
})


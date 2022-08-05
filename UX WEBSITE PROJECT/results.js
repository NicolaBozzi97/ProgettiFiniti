var username
var myScore  

window.onload = () => {

    username = sessionStorage.getItem("nomePlayer");             //getting the username from script.js
    myScore = sessionStorage.getItem("punteggioFinale");            //getting the score from script.js
    document.getElementById('finalScore').innerHTML = `Congratulations ${username}! Your score is ${myScore}.`;

    if(myScore >= ((NUM_QUESTIONS/2)+1)) {
        document.getElementById('finalMessage').innerHTML = `You passed the quiz with the ${(myScore/(SCORE_POINTS*NUM_QUESTIONS)*100)}% of correct question, you're a master of the User eXperience!`  
    }
    else {
        document.getElementById('finalMessage').innerHTML = `You answered ${(myScore/(SCORE_POINTS*NUM_QUESTIONS)*100)}% of the questions correctly, we suggest you to go back to the Learning section and retake another quiz.`
    }
}






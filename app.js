import isYes from './isYes.js';

const quizButton = document.getElementById('quiz-button');
const quizResult = document.getElementById('quiz-result');

function launchQuiz() {
    let correctAnswers = 0;
    let name = '';
    let response = '';

    alert('Let\'s see if you have what it takes to be a Pokemon master!');

    const confirmed = confirm('Are you sure?');
    if (confirmed === false) {
        return;
    }

    const firstName = prompt("What's your first name?");
    name = firstName;
    const lastName = prompt("What's your last name?");
    name = `${name} ${lastName}`;

    const madeWhen = prompt('Was Pokemon made in 1996?');
    if (isYes(madeWhen) === true) {
        correctAnswers++;
    }    

    const whatTypes = prompt('Only Pokemon have Types, moves do not.');
    if (isYes(whatTypes) === false) {
        correctAnswers++;
    }

    const ashWin = prompt ('Ash won the Alola League Pokemon Tournament.');
    if (isYes(ashWin) === true) {
        correctAnswers++;
    }

    switch (correctAnswers) {
        case 0:
            response = `You better brush up on your Pokemon, ${name}!`;
            break;
        case 1:
            response = `You still have some studying to do, ${name}!`;
            break;
        case 2:
            response = `You're almost there, ${name}!`;
            break;
        case 3:
            response = `You have the makings of a Pokemon Master, ${name}!`;
            break;
    } 
    quizResult.textContent = response;
    console.log(correctAnswers);

}


quizButton.addEventListener('click', launchQuiz);
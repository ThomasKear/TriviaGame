var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question')
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var theAnswer = document.getElementById('theAnswer');
var timeLeft = 30;
var timer = document.getElementById('timer');
var timerId = setInterval(countdown, 1000);
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var timeExpire = document.getElementById('tookTooLong');
var restartButton = document.getElementById('restartButton');
var theAnswer = document.getElementById('theAnswer');

// Didn't leave myself time to comment appropriatly as I have been struggling to get a restart feature and the timer experation statement as well as publish the correct answer. Sorry.

 
function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
    var timeLeft = 30;
};

function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
        nextQuestion();
    } else {
        timer.innerHTML = timeLeft;
        timeLeft--;
    }
}

function nextQuestion() {
container.style.display = 'none';
timeExpire.style.display = "";
timeExpire.text = 'You took too long.  The answer is ' + theAnswer;  
}

function moveOn() {
        timeLeft = 30;
        currentQuestion++;
        container.style.display = '';

}


function loadNextQuestion() {
    var selctedOption = document.querySelector('input[type=radio]:checked');
    if (!selctedOption) {
        alert('Please select your answer!');
        return;
    };
    var answer = selctedOption.value;
    if (questions[currentQuestion].answer === answer) {
        score += 10;
        alert('Correct, good job!');
    } else {
        alert('Wrong. The correct answer is ' + theAnswer);
    }
    selctedOption.checked = false;
    timeLeft = 30
    currentQuestion++;
    $("div.endGame").hide();


    if (currentQuestion === totQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    if (currentQuestion == totQuestions) {
        clearTimeout(timerId);
        $("div.endGame").show();
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;


    }
    loadQuestion(currentQuestion);


}


loadQuestion(currentQuestion);

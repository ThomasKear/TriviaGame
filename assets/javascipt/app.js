var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question')
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var timeLeft = 30;
var timer = document.getElementById('timer');
var timerId = setInterval(countdown, 1000);
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var restartButton = document.getElementById('restartButton');


function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
    };

function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
        gameOver();
    } else {
        timer.innerHTML = timeLeft;
        timeLeft--;
    }
}

function gameOver() {
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        alert('It was only a few question, come on!');
    };


function loadNextQuestion() {
    var selctedOption = document.querySelector('input[type=radio]:checked');
    if (!selctedOption) {
        alert('Please select your answer!');
        return;
    };
    var answer = selctedOption.value;
    if (questions[currentQuestion].answer === answer) {
        score += 10;
    }
    selctedOption.checked = false;
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

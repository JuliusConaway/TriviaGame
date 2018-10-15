$('.quiz').hide();
$('.wrapper').hide();
$('#results').hide();
$('.start_game').click(function() {
    
    $("#splashScreen").hide();
    $('.wrapper').show();
    timer(30,countDown,timesUp);
});
function timer(time,update,complete) {

    
    var interval = setInterval(function() {
        var now = time--;
        update(now);
        if( now <= 0) {
            clearInterval(interval);
            complete();
        }

    },1000); 
};
$('#submit').click(function() {
    
    $("#splashScreen").hide();
    $('.wrapper').hide();
    $('#results').show();
});

    function countDown(timeleft) { 
        $('#timer').html(timeleft+" seconds");
    }
    function timesUp() { 
        $('.wrapper').hide();
        $("#results").show();

    }
    
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
        question: "Which actor played Tony Montana in the movie Scarface?",
        answers: {
            a: "Jim Carrey",
            b: "Al Pacino",
            c: "Paul Goodman",
            d: "Joe Pesci",
        },
        correctAnswer :"b"
    },
    {
        question: "Which actor played Sam Rothstien in the movie Casino?",
        answers: {
          a: "Robert Deniro",
          b: "Ray Liotta",
          c: "Steven Segal",
          d: "Bob Hope",
        },
        correctAnswer: "a"
      },
      {
        question: "Which actor played Paulie in the movie Good Fellas?",
        answers: {
          a: "Paul Goodman ",
          b: "Paul Mitchell ",
          c: "Chris Paul",
          d: "Paul Servino"
        },
        correctAnswer: "d"
      },
      {
        question: "What country did Tony Montana come from in the beginning of the movie Scarface?",
        answers: {
          a: "Mexico",
          b: "America",
          c: "Cuba",
          d: "Columbia"
        },
        correctAnswer: "c"
      },
      {
        question: "What was Sam Rothstein's wife's name in the movie Casino?",
        answers: {
          a: "Ginger",
          b: "Candy",
          c: "Claire",
          d: "Marie"
        },
        correctAnswer: "a"
      },
      {
        question: "What was Henry's ethnicity in the movie Good Fellas?",
        answers: {
          a: "Italian ",
          b: "Puerto Rican",
          c: "Black ",
          d: "Scicillian and Irish"
        },
        correctAnswer: "d"
      },
    ];
    var currentQuestion = myQuestions[0-5];
function buildQuiz(){}

function showResults(){}


buildQuiz();

submitButton.addEventListener('click', showResults);

    function buildQuiz(){
        const questionNumber = myQuestions[0];
        const output = [];
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {
                const answers = [];
                for(letter in currentQuestion.answers){
                    answers.push( 
                        `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                      </label>`
                      );
      }
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );
  quizContainer.innerHTML = output.join('');
}
myQuestions.forEach( (currentQuestion, questionNumber) => {
});
var questionNumber = myQuestions[0,1,2,3,4,5];
const answers = [];
const output = [];
for(letter in myQuestions[0].answers){
    answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${myQuestions.answers[letter]}
        </label>`
      );
    }
    output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
      quizContainer.innerHTML = output.join('');
      function showResults(){
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;
        myQuestions.forEach( (currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = 'input[name=question'+questionNumber+']:checked';
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
            if(userAnswer===currentQuestion.correctAnswer){
                numCorrect++;
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            else{
                answerContainers[questionNumber].style.color = 'red';
    }
});
resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}
const answerContainers = quizContainer.querySelectorAll('.answers');
let numCorrect = 0;
myQuestions.forEach( (currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
  const selector = `input[name=question${questionNumber}]:checked`;
  const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  if(userAnswer===currentQuestion.correctAnswer){
    numCorrect++;
    answerContainers[questionNumber].style.color = 'lightgreen';
}
else{
    answerContainers[questionNumber].style.color = 'red';
  }
});
const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value;
if(userAnswer===currentQuestion.correctAnswer){
    numCorrect++;
    answerContainers[questionNumber].style.color = 'lightgreen';
}
else{
    answerContainers[questionNumber].style.color = 'red';
}
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
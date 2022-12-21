/* -- declaration of HTML elements of general Quiz structure into variables -- */

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

/* -- a list of questions to display for the Foundations of Deen section -- */

const questionsDeen = [
  {
    question: "What is the month of fasting called?",
    answers: {
      a: "Tawheed",
      b: "Kaaba",
      c: "Ramadan",
    },
    correctAnswer: "c"
  },
  {
    question: "What are the fundamental and obligatory acts of worship called?",
    answers: {
      a: "Seven Rites",
      b: "Holy Trinity",
      c: "Five Pillars",
    },
    correctAnswer: "c"
  },
  {
    question: "How many names does Allah SWT have?",
    answers: {
      a: "1",
      b: "99",
      c: "33",
    },
    correctAnswer: "b"
  },
  {
    question: "How many times a day are Muslims required to pray?",
    answers: {
      a: "Five times",
      b: "Twice",
      c: "Three times",
    },
    correctAnswer: "a"
  },
  {
    question: "What are the followers of Islam called?",
    answers: {
      a: "Sunnis",
      b: "Muslims",
      c: "Shias",
    },
    correctAnswer: "b"
  },
  {
    question: "How many surahs does the Qur'an have?",
    answers: {
      a: "86",
      b: "122",
      c: "114",
    },
    correctAnswer: "c"
  },
  {
    question: "What is the name of the first woman to become a Muslim?",
    answers: {
      a: "Khadijah",
      b: "Fatima",
      c: "Amina",
    },
    correctAnswer: "a"
  },
  {
    question: "What is the qiblah?",
    answers: {
      a: "Ritual ablution",
      b: "Direction of prayer",
      c: "Remembrance of Allah SWT",
    },
    correctAnswer: "b"
  },
  {
    question: "Which book records the traditions and sayings of Prophet Muhammad SAW?",
    answers: {
      a: "Tafsir",
      b: "Tawrat",
      c: "Hadith",
    },
    correctAnswer: "c"
  },
  {
    question: "When was the Prophet Muhammad SAW born?",
    answers: {
      a: "400 CE",
      b: "670 CE",
      c: "570 CE",
    },
    correctAnswer: "c"
  }
];

/* -- basic functions of the quiz, NOT MINE, made By Sitepoint, rewritten, modified and commented on by me -- */

/* logic for building the quiz structure */
function buildQuiz(){
  /* variable to store all HTML output */
  const output = [];
  /* HTML loop of each question */
  questionsDeen.forEach(
    (currentQuestion, questionNumber) => {
      /* variable to store answers in */
      const answers = [];
      /* for loop to fill answers and array to hold possible answers, adds a radio button */
      for(letter in currentQuestion.answers){
        answers.push(
        `<label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
        ${letter}:
        ${currentQuestion.answers[letter]}
        </label>`
        );
      }
      /* adds the current question and its answer to the output */
      /* slide holds the question and answer containers */
      output.push(
        `<div class="slide">
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>
        </div>`
      );
    }
  );
  /* combines the output list into one string and prints it on the page */
  quizContainer.innerHTML = output.join('');
}

/* logic for displaying quiz results */
function showResults(){
  /* gathers answer containers from the quiz */
  const answerContainers = quizContainer.querySelectorAll('.answers');
  /* keeps track of the student's answers */
  let numCorrect = 0;
  /* for loop for each question asked */
  questionsDeen.forEach(
    (currentQuestion, questionNumber) => {
      /* finds the selected answer */
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      /* if the answer chosen is correct it does the following */
      if(userAnswer === currentQuestion.correctAnswer){
        /* increments the number of correct answers */
        numCorrect++;
        /* colours the answers green */
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      /* if the answer chosen is incorrect or blank it does the following */
      else{
        /* colours the answers red */
        answerContainers[questionNumber].style.color = 'red';
      }
    }
  );
  /* shows the number of correct answers out of all questions asked */
  resultsContainer.innerHTML = `${numCorrect} out of ${questionsDeen.length}`;
}

/* logic for displaying a slide and changing pages */
function showSlide(n) {
  /* hides the current slide */
  slides[currentSlide].classList.remove('active-slide');
  /* shows the new slide */
  slides[n].classList.add('active-slide');
  /* updates the current slide number */
  currentSlide = n;
  if(currentSlide === 0){
    /* hides the previous button if we're on the first slide */
    previousButton.style.display = 'none';
  }
  else {
    /* displays the previous button if we're NOT on the first slide */
    previousButton.style.display = 'inline-block';
  }
  if(currentSlide === slides.length-1){
    /* hides the next slide button if we're on the last slide and displays the submit button */
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else {
    /* displays the next slide button if we're NOT on the last slide and hides the submit button */
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}

/* displays the quiz structure */
buildQuiz();

/* variables for changing pages in the quiz */
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

/* calls the function to display a slide */
showSlide(currentSlide);

/* two functions that make the navigation buttons work */
function showNextSlide(){
  showSlide(currentSlide + 1);
}
function showPreviousSlide(){
  showSlide(currentSlide - 1);
}

/* displays results when 'submit' button is pressed, hooks the nav buttons to slide functions */
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
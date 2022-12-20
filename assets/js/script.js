/* -- JavaScript for the collapsible box, NOT MINE, made By W3Schools -- */

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

/* -- declaration of HTML elements of general Quiz structure into variables -- */

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

/*const quizContainer = document.getElementById('quiz2');*/

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
]

/* -- a list of questions to display for the Islamic History section -- */

/*const questionsHistory = [
  {
    question: "Which Islamic movement was adopted by the House of Saud in 1744?",
    answers: {
      a: "Mahdavia",
      b: "Salafism",
      c: "Wahhabism",
    },
    correctAnswer: "c"
  },
  {
    question: "What is the Zulfiqar?",
    answers: {
      a: "A knife",
      b: "A spear",
      c: "A sword",
    },
    correctAnswer: "c"
  },
  {
    question: "Who founded the Mawlawiyah Sufi order?",
    answers: {
      a: "Shams Tabrizi",
      b: "Ibn Arabi",
      c: "Rumi",
    },
    correctAnswer: "c"
  },
  {
    question: "Who founded the Hanbali school?",
    answers: {
      a: "Ahmad ibn Hanbal",
      b: "Ibn Taymiyyah",
      c: "Abu Hanifa",
    },
    correctAnswer: "a"
  },
  {
    question: "What were the first four Caliphs collectively called?",
    answers: {
      a: "Rashidun",
      b: "Shah",
      c: "Shaykh al-Islam",
    },
    correctAnswer: "a"
  },
  {
    question: "Who constructed the Great Mosque of Damascus?",
    answers: {
      a: "Maulana Sher Ali",
      b: "al-Walid I",
      c: "Umar II",
    },
    correctAnswer: "b"
  },
  {
    question: "Which battle was led by the Prophet SAW during Ramadan?",
    answers: {
      a: "Battle of Badr",
      b: "Battle of Uhud",
      c: "Battle of the Trench",
    },
    correctAnswer: "a"
  },
  {
    question: "What was the purpose of the Prophet SAW's hijrah to Medina?",
    answers: {
      a: "To escape plague",
      b: "To spread Islam",
      c: "To escape persecution",
    },
    correctAnswer: "c"
  },
  {
    question: "Who succeeded the Prophet SAW after his death?",
    answers: {
      a: "Abu Hurairah",
      b: "Abu Bakr",
      c: "Khalid ibn al-Walid",
    },
    correctAnswer: "b"
  },
  {
    question: "What does the term Islam mean?",
    answers: {
      a: "Submission",
      b: "Peace",
      c: "Holy",
    },
    correctAnswer: "a"
  },
  {
    question: "Who introduced the Islamic calendar?",
    answers: {
      a: "Uthman ibn Affan",
      b: "Umar ibn al-Khattab",
      c: "Hasan ibn Ali",
    },
    correctAnswer: "b"
  },
  {
    question: "Which of these battles did Khalid al-Walid fight against Muslims?",
    answers: {
      a: "Battle of Hunayn",
      b: "Battle of Walaja",
      c: "Battle of Uhud",
    },
    correctAnswer: "c"
  },
  {
    question: "Which Muslim commander was victorious at the Battle of Hattin?",
    answers: {
      a: "Salahudin al-Ayubi",
      b: "Timur",
      c: "Ahmad ibn Hanbal",
    },
    correctAnswer: "a"
  },
  {
    question: "Which enemy did the mujahideen fight in Afghanistan in the Cold War?",
    answers: {
      a: "Pakistan",
      b: "USA",
      c: "Soviet Union",
    },
    correctAnswer: "c"
  },
  {
    question: "Which country invaded Iraq in 2003?",
    answers: {
      a: "Iran",
      b: "USA",
      c: "Syria",
    },
    correctAnswer: "b"
  },
  {
    question: "Which Islamic empire ruled India and Afghanistan for over 300 years?",
    answers: {
      a: "Safavid Empire",
      b: "Ottoman Empire",
      c: "Mughal Empire",
    },
    correctAnswer: "c"
  },
  {
    question: "Ibn Sina was a Persian polymath. Which modern day country is his birthplace in?",
    answers: {
      a: "Uzbekistan",
      b: "Iran",
      c: "Tajikistan",
    },
    correctAnswer: "a"
  },
  {
    question: "Which Abbasid ruler established the Bayt al-Hikmah in Iraq?",
    answers: {
      a: "Al Mutassim",
      b: "Al Hakim bi-Amrallah",
      c: "Harun al-Rashid",
    },
    correctAnswer: "c"
  },
  {
    question: "Where was the philosopher ibn Rushd born?",
    answers: {
      a: "Baghdad, Iraq",
      b: "Cordoba, Spain",
      c: "Cairo, Egypt",
    },
    correctAnswer: "b"
  },
  {
    question: "What is al-Khwarizmi best known for?",
    answers: {
      a: "The development of algebra",
      b: "Codifying the Arabic language",
      c: "Discovering the circulatory system",
    },
    correctAnswer: "a"
  }
]*/

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

/* separate quiz function for the Islamic History quiz */
/*function buildHistory(){
  const output = [];
  questionsHistory.forEach(
    (currentQuestion, questionNumber) => {
      const answers = [];
      for(letter in currentQuestion.answers){
        answers.push(
          `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter}:
          ${currentQuestion.answers[letter]}
          </label>`
          );
      }
      output.push(
        `<div class="slide">
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>
        </div>`
      );
    }
  );
  quizContainer.innerHTML = output.join(``);
}*/

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

/* separate answers function for the Islamic History quiz */
/*function showResults(){
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;
  questionsHistory.forEach(
    (currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else {
        answerContainers[questionNumber].style.color = 'red';
      }
    }
  );
  resultsContainer.innerHTML = `${numCorrect} out of ${questionsDeen.length}`;
}*/

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
/*buildHistory();*/

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
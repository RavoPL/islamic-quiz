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

/* -- declaration of HTML elements of Quiz into variables -- */

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

/* -- basic functions of the quiz -- */

/* logic for building the quiz structure */
function buildQuiz(){}

/* logic for displaying quiz results */
function showResults(){}

/* displays the quiz structure */
buildQuiz();

/* displays results when 'submit' button is pressed */
submitButton.addEventListener('click', showResults);

/* -- a list of questions to display for the Foundations of Deen section -- */

const questionsDeen = [
  {
    question: "What is the month of fasting called?",
    answers: {
      a: "Tawheed",
      b: "Kaaba",
      c: "Ramadan"
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
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

/* -- a list of questions to display for the Islamic History section -- */

const questionsHistory = [
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
  ]

/* separate quiz function for the Islamic History quiz */
function buildHistory(){
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
  quizContainer.innerHTML = output.join('');
}

/* separate answers function for the Islamic History quiz */
function showResults(){
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
  resultsContainer.innerHTML = `${numCorrect} out of ${questionsHistory.length}`;
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
buildHistory();

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
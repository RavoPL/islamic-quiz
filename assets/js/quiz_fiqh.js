const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

/* -- a list of questions to display for the Fiqh section -- */

const questionsFiqh = [
    {
      question: "What does wudhu of lower body include?",
      answers: {
        a: "Thighs",
        b: "Ankles",
        c: "Knees",
      },
      correctAnswer: "b"
    },
    {
      question: "What is deductive analogy called?",
      answers: {
        a: "Qiyas",
        b: "Ijmaa",
        c: "Aql",
      },
      correctAnswer: "a"
    },
    {
      question: "What is reason called?",
      answers: {
        a: "Ijit",
        b: "Jihad",
        c: "Aql",
      },
      correctAnswer: "c"
    },
    {
      question: "Between a person and kufr is...?",
      answers: {
        a: "Not praying Fajr",
        b: "Abandoning Salah",
        c: "Praying after time is due",
      },
      correctAnswer: "b"
    },
    {
      question: "What is Sharia?",
      answers: {
        a: "Law",
        b: "Teaching",
        c: "Guidance",
      },
      correctAnswer: "a"
    },
    {
      question: "What is Sunnah?",
      answers: {
        a: "Compulsory",
        b: "Recommended",
        c: "Do and donts",
      },
      correctAnswer: "b"
    },
    {
      question: "What is Nisab?",
      answers: {
        a: "Minimum wealth or property for Zakat",
        b: "Garment for women",
        c: "Ruling on ablution",
      },
      correctAnswer: "a"
    },
    {
      question: "What is Istikharah?",
      answers: {
        a: "Direction of prayer",
        b: "Tax on non-Muslims",
        c: "Prayer for guidance",
      },
      correctAnswer: "c"
    },
    {
      question: "Who is exempt from fasting?",
      answers: {
        a: "Teenagers",
        b: "Mujahideen",
        c: "Pregnant women",
      },
      correctAnswer: "c"
    },
    {
      question: "Who is a recipient of Zakat?",
      answers: {
        a: "Kibar al-Sini",
        b: "al-Fuqaraa",
        c: "Ghuraba",
      },
      correctAnswer: "b"
    }
  ];

/* separate quiz function for the Fiqh quiz */
function buildFiqh(){
  const output = [];
  questionsFiqh.forEach(
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

/* separate answers function for the Fiqh quiz */
function showResults(){
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;
  questionsFiqh.forEach(
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
  resultsContainer.innerHTML = `${numCorrect} out of ${questionsFiqh.length}`;
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
buildFiqh();

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
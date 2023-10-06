// Defining quiz questions and options
const quizData = [
  {
    question: "What is Bitcoin?",
    options: [
      "A digital wallet",
      "A blockchain platform",
      "A cryptocurrency",
      "A stock exchange",
    ],
    correct: "A cryptocurrency",
    answeredCorrectly: false,
  },
  {
    question: "Which cryptocurrency uses the symbol 'ETH'?",
    options: ["Bitcoin", "Ethereum", "Ripple", "Litecoin"],
    correct: "Ethereum",
    answeredCorrectly: false,
  },
  {
    question: "What is the total supply limit of Bitcoin?",
    options: ["11 million", "12 million", "21 million", "21 billion"],
    correct: "21 million",
    answeredCorrectly: false,
  },
  {
    question: "Who is the pseudonymous creator of Bitcoin?",
    options: [
      "Satoshi Nakamoto",
      "Vitalik Buterin",
      "Charlie Lee",
      "Elon Musk",
    ],
    correct: "Satoshi Nakamoto",
    answeredCorrectly: false,
  },
  {
      question: "What is the primary purpose of a blockchain?",
      options: ["Sending emails", "Decentralized finance", "Storing data", "Recording transactions"],
      correct: "Recording transactions",
      answeredCorrectly: false
  },
  {
      question: "What is the name of the consensus algorithm used by Bitcoin?",
      options: ["Proof of Stake (PoS)", "Delegated Proof of Stake (DPoS)", "Proof of Work (PoW)", "Proof of Authority (PoA)"],
      correct: "Proof of Work (PoW)",
      answeredCorrectly: false
  },
  {
      question: "What is the term for the process of converting a cryptocurrency into traditional currency?",
      options: ["Mining", "Trading", "Staking", "Fiat conversion"],
      correct: "Fiat conversion",
      answeredCorrectly: false
  },
  {
      question: "Which cryptocurrency is often referred to as 'digital silver'?",
      options: ["Bitcoin", "Ethereum", "Ripple", "Litecoin"],
      correct: "Litecoin",
      answeredCorrectly: false
  },
  {
      question: "What is a 'smart contract' in blockchain technology?",
      options: ["A legally binding document", "A self-executing contract with the terms of the agreement directly written into code", "A contract signed electronically", "A contract between two AI entities"],
      correct: "A self-executing contract with the terms of the agreement directly written into code",
      answeredCorrectly: false
  },
  {
      question: "What does the term 'HODL' mean in the context of cryptocurrencies?",
      options: ["Hold on for dear life", "Hold on and don't let go", "Hope our Dollars leap", "Hugging our digital ledger"],
      correct: "Hold on for dear life",
      answeredCorrectly: false
  },
  {
      question: "Which cryptocurrency is known for its focus on privacy and anonymity?",
      options: ["Bitcoin", "Ethereum", "Monero", "Cardano"],
      correct: "Monero",
      answeredCorrectly: false
  },
  {
      question: "What is the name of the first widely-adopted cryptocurrency?",
      options: ["Ripple", "Ethereum", "Bitcoin", "Litecoin"],
      correct: "Bitcoin",
      answeredCorrectly: false
  },
  {
      question: "In cryptocurrency, what is 'FOMO'?",
      options: ["Fear of making an investment", "Fear of market crashes", "Fear of missing out", "Fear of manipulation"],
      correct: "Fear of missing out",
      answeredCorrectly: false
  },
  {
      question: "Which cryptocurrency was created as a 'joke' or parody of Bitcoin?",
      options: ["Ripple", "Ethereum", "Bitcoin Cash", "Dogecoin"],
      correct: "Dogecoin",
      answeredCorrectly: false
  },
  {
      question: "What is the term for the process of verifying transactions on a blockchain network and adding them to the public ledger?",
      options: ["Staking", "Mining", "Trading", "Hodling"],
      correct: "Mining",
      answeredCorrectly: false
  }
];

// Track the indices of questions that have been asked
let askedQuestions = [];

// DOM elements
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const nextButton = document.getElementById("next-button");
const startScreen = document.querySelector(".start-screen");
const quizScreen = document.querySelector(".quiz-screen");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const restartButton = document.getElementById("restart-button");

let currentQuestionIndex = 0;
let score = 0;

// Event listener for the "Start Quiz" button
startButton.addEventListener("click", () => {
  // Hide the start screen
  startScreen.style.display = "none";

  // Show the quiz screen
  quizScreen.style.display = "block";
});

// Function to select a random question that has not been asked
function selectRandomQuestion() {
  const remainingQuestions = quizData.filter(
    (question, index) => !askedQuestions.includes(index)
  );

  if (remainingQuestions.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
  return remainingQuestions[randomIndex];
}

// Function to load a question and its options
function loadQuestion() {
  const currentQuestion = selectRandomQuestion();

  if (currentQuestion !== null) {
    askedQuestions.push(quizData.indexOf(currentQuestion));

    questionText.textContent = `Question ${askedQuestions.length}: ${currentQuestion.question}`;

    optionsList.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
      const optionElement = document.createElement("li");
      optionElement.className = "option";
      optionElement.textContent = option;
      optionElement.addEventListener("click", () => selectOption(option));
      optionsList.appendChild(optionElement);
    });

    nextButton.disabled = true;
  } else {
    displayScore();
  }
}

// Function to handle option selection
function selectOption(selectedOption) {
  const currentQuestion = quizData[askedQuestions[askedQuestions.length - 1]];

  const options = optionsList.querySelectorAll(".option");

  for (let i = 0; i < options.length; i++) {
    const option = options[i];

    if (option.textContent === selectedOption) {
      if (selectedOption === currentQuestion.correct) {
        option.style.backgroundColor = "#8bc34a"; // Set correct option to green
        currentQuestion.answeredCorrectly = true;
        score++;
      } else {
        option.style.backgroundColor = "#ff7b7b"; // Set selected incorrect option to red
        currentQuestion.answeredCorrectly = false;
      }
    } else if (option.textContent === currentQuestion.correct) {
      option.style.backgroundColor = "#8bc34a"; // Set correct option to green
    }

    option.removeEventListener("click", () => selectOption(option));
  }

  nextButton.disabled = false;
}

// Function to calculate and display the user's score
function displayScore() {
  questionText.textContent = `Your Score: ${score}/${quizData.length}`;
  optionsList.innerHTML = "";
  nextButton.style.display = "none";
  stopButton.style.display = "inline-block";
  restartButton.style.display = "inline-block";
}

// Event listener for the "Next" button
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    // Quiz finished
    displayScore(); // Display the user's score
  }
});

// Event listener for the "Stop Quiz" button
stopButton.addEventListener("click", () => {
  // Reset score
  score = 0;

  //Reset current question index
  currentQuestionIndex = 0;

  // Reset asked questions array
  askedQuestions = [];

  // Hide the "Restart" and "Stop Quiz" button and load the "Start Quiz" and "Next" button
  restartButton.style.display = "none";
  startButton.style.display = "inline-block";
  nextButton.style.display = "inline-block";

  // Reload initial question
  loadQuestion();

  // Hide the quiz screen
  quizScreen.style.display = "none";

  // Show the start screen
  startScreen.style.display = "block";
});

// Event listener for the "Restart" button
restartButton.addEventListener("click", () => {
  // Reset score
  score = 0;

  //Reset current question index
  currentQuestionIndex = 0;

  // Reset asked questions array
  askedQuestions = [];

  // Hide the "Restart Quiz" button and show the "Next" button
  restartButton.style.display = "none";
  stopButton.style.display = "none";
  nextButton.style.display = "inline-block";

  // Reload initial question
  loadQuestion();
});

// Initial question load
loadQuestion();

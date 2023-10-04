// Defining quiz questions and options
const quizData = [
    {
        question: "What is Bitcoin?",
        options: ["A digital wallet", "A blockchain platform", "A cryptocurrency", "A stock exchange"],
        correct: "A cryptocurrency",
        answeredCorrectly: false
    },
    {
        question: "Which cryptocurrency uses the symbol 'ETH'?",
        options: ["Bitcoin", "Ethereum", "Ripple", "Litecoin"],
        correct: "Ethereum",
        answeredCorrectly: false
    },
    {
        question: "What is the total supply limit of Bitcoin?",
        options: ["10 million", "100 million", "21 million", "1 billion"],
        correct: "21 million",
        answeredCorrectly: false
    },
    {
        question: "Who is the pseudonymous creator of Bitcoin?",
        options: ["Satoshi Nakamoto", "Vitalik Buterin", "Charlie Lee", "Roger Ver"],
        correct: "Satoshi Nakamoto",
        answeredCorrectly: false
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
        options: ["Hold on for dear life", "Sell immediately", "Buy more", "Diversify"],
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

// DOM elements
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
const score = 0;


// Function to load a question and its options
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionText.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    
    // Clear the options list
    optionsList.innerHTML = "";
    
    // Populate options
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("li");
        optionElement.className = "option";
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => selectOption(option));
        optionsList.appendChild(optionElement);
    });
    
    // Disable the "Next" button until an option is selected
    nextButton.disabled = true;
}

// Function to handle option selection

// Function to calculate and display the user's score

loadQuestion()
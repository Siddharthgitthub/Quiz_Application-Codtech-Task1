document.addEventListener("DOMContentLoaded", () => {
    const quizData = [
            {
                question: "Who is known as the 'Father of the Nation' in India?",
                options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Bhagat Singh"],
                answer: "Mahatma Gandhi",
            },
            {
                question: "Which Indian city is called the 'Silicon Valley of India'?",
                options: ["Mumbai", "Chennai", "Bengaluru", "Hyderabad"],
                answer: "Bengaluru",
            },
            {
                question: "What is the national flower of India?",
                options: ["Lotus", "Rose", "Marigold", "Jasmine"],
                answer: "Lotus",
            },
            {
                question: "Which festival is known as the 'Festival of Lights'?",
                options: ["Holi", "Diwali", "Eid", "Christmas"],
                answer: "Diwali",
            },
            
            {
                question: "Who wrote the Indian national anthem?",
                options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Lata Mangeshkar"],
                answer: "Rabindranath Tagore",
            },
            {
                question: "What is India's national sport?",
                options: ["Cricket", "Hockey", "Kabaddi", "Badminton"],
                answer: "Hockey",
            },
            {
                question: "Which monument is considered the symbol of love in India?",
                options: ["Charminar", "Qutub Minar", "Taj Mahal", "Gateway of India"],
                answer: "Taj Mahal",
            },
            {
                question: "Which river is considered the holiest in India?",
                options: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
                answer: "Ganga",
            },
        ];
    

    const questionContainer = document.getElementById("question-container");
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextBtn = document.getElementById("next-btn");
    const resultContainer = document.getElementById("result-container");
    const finalScoreElement = document.getElementById("final-score");
    const restartBtn = document.getElementById("restart-btn");

    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = "";

        currentQuestion.options.forEach((option) => {
            const li = document.createElement("li");
            li.textContent = option;
            li.addEventListener("click", () => selectAnswer(li, currentQuestion.answer));
            optionsElement.appendChild(li);
        });

        nextBtn.disabled = true;
    }

    function selectAnswer(selectedOption, correctAnswer) {
        const options = Array.from(optionsElement.children);

        options.forEach((option) => {
            option.removeEventListener("click", () => selectAnswer(option, correctAnswer));
            if (option.textContent === correctAnswer) {
                option.classList.add("correct");
            } else {
                option.classList.add("incorrect");
            }
        });

        if (selectedOption.textContent === correctAnswer) {
            score++;
        }

        nextBtn.disabled = false;
    }

    function showResult() {
        questionContainer.classList.add("hidden");
        resultContainer.classList.remove("hidden");
        finalScoreElement.textContent = `${score} / ${quizData.length}`;
    }

    function restartQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        questionContainer.classList.remove("hidden");
        resultContainer.classList.add("hidden");
        loadQuestion();
    }

    nextBtn.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    });

    restartBtn.addEventListener("click", restartQuiz);

    // Initialize the quiz
    loadQuestion();
});

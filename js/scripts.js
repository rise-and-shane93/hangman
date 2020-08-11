const form = document.querySelector("#phrase-input form");
const answerInput = document.querySelector("#phrase-input form input[name='the-answer']");
const contestantInput = document.querySelector("#contestant-input");
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");
let answer;
let answerSplit;
let letterBlanks = "";

submitBtn.addEventListener("click", e => {
    e.preventDefault();
    if (answerInput.value !== "") {
        answer = answerInput.value;
        answerSplit = answer.split("");
        console.log("hey", answer, answerSplit);
        answerSplit.forEach(el => {
            if (el !== " ") {
                letterBlanks += "<div class='word-block letter'></div>";
            } else {
                letterBlanks += "<div class='word-block space'></div>";
            }
        });
        contestantInput.innerHTML = letterBlanks;
        answerInput.value = "";
    } else {
        alert("Please enter a word or phrase");
    }
});

resetBtn.addEventListener("click", e => {
    e.preventDefault();
    letterBlanks = "";
    contestantInput.innerHTML = letterBlanks;
    answer = undefined;
    answerSplit = undefined;
});
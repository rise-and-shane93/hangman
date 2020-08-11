const form = document.querySelector("#phrase-input form");
const answerInput = document.querySelector("#phrase-input form input[name='the-answer']");
const contestantInput = document.querySelector("#contestant-input");
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");
let answer;
let answerSplit;
let letterBlanks = "";

resetBtn.setAttribute("disabled", "true");

form.onsubmit = (e) => {
    e.preventDefault();
    answer = answerInput.value;
    answerSplit = answer.split("");
    console.log(answer, answerSplit);
    answerSplit.forEach(el => {
        if (el !== " ") {
            letterBlanks += "<div class='word-block letter'></div>";
        } else {
            letterBlanks += "<div class='word-block space'></div>";
        }
    });
    // console.log(letterBlanks);
    contestantInput.innerHTML = letterBlanks;
    submitBtn.setAttribute("disabled", "true");
    resetBtn.setAttribute("disabled", "false");
    answerInput.value = "";
}

resetBtn.addEventListener("click", () => {
    submitBtn.setAttribute("disabled", "false");
    resetBtn.setAttribute("disabled", "true");
});
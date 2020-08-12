const form = document.querySelector("#phrase-input form");
const answerInput = document.querySelector("#phrase-input form input[name='the-answer']");
const contestantInput = document.querySelector("#contestant-input");
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");
const usedLettersDiv = document.querySelector("#used-letters > div");

let answer;
let answerSplit;
let letterBlanks = "";

let isStudentAnswering = false;
let usedLettersArr = [];

function resetGame() {
    letterBlanks = "";
    contestantInput.innerHTML = letterBlanks;
    answer = undefined;
    answerSplit = undefined;
    isStudentAnswering = false;
}

function renderUsedLetters() {
    let usedLetters = "";
    usedLettersArr.forEach(el => {
        usedLetters += `<p>${el}</p>`;
    });
    usedLettersDiv.innerHTML = usedLetters;
}

submitBtn.addEventListener("click", e => {
    e.preventDefault();
    if (answerInput.value !== "") {
        answer = answerInput.value.toUpperCase();
        console.log(answer);
        answerSplit = answer.split("");
        answerSplit.forEach(el => {
            if (el !== " ") {
                // letterBlanks += `<div class='word-block letter'><p>${el}</p></div>`;
                letterBlanks += `<p class='word-block letter'>${el}</p>`;
            } else {
                // letterBlanks += "<div class='word-block space'></div>";
                letterBlanks += "<p class='word-block space'></p>";
            }
        });
        contestantInput.innerHTML = letterBlanks;
        answerInput.value = "";
        isStudentAnswering = true;
    } else {
        alert("Please enter a word or phrase");
    }
});

resetBtn.addEventListener("click", e => {
    e.preventDefault();
    resetGame();
});

document.onkeypress = function(e) {
    
    if (isStudentAnswering) {
        let wordLetterBlocks = document.querySelectorAll(".word-block");
        if (e.keyCode >= 97 && e.keyCode <= 122) {
            let userLetter = e.key.toUpperCase();
            if (answer.indexOf(userLetter) !== -1) {
                wordLetterBlocks.forEach((el,i) => {
                    if(userLetter === el.textContent) {
                        console.log("correct");
                        el.style.color = "black";
                        usedLetters.push(userLetter);
                        
                    }
                });   
            } else {
                console.log("incorrect");
            }
        } else {
            alert("Please only use the letter keys");
        }
    }
}
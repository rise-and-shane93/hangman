const form = document.querySelector("#phrase-input form");
const answerInput = document.querySelector("#phrase-input form input[name='the-answer']");
const contestantInput = document.querySelector("#contestant-input");
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");
const usedLettersDiv = document.querySelector("#used-letters > div");
const hangmanHead = document.querySelector("#hangman .head");
const hangmanTorso = document.querySelector("#hangman .torso");
const hangmanLeftArm = document.querySelector("#hangman .leftArm");
const hangmanRightArm = document.querySelector("#hangman .rightArm");
const hangmanLeftLeg = document.querySelector("#hangman .leftLeg");
const hangmanRightLeg = document.querySelector("#hangman .rightLeg");

let answer;
let answerSplit;
let letterBlanks = "";

let isStudentAnswering = false;
let numIncorrect = 0;
let usedLettersArr = [];

function resetGame() {
    letterBlanks = "";
    contestantInput.innerHTML = letterBlanks;
    answer = undefined;
    answerSplit = undefined;
    isStudentAnswering = false;
}

function renderHangman(num) {
    switch (num) {
        case 1:
            hangmanHead.style.display = "block";
            break;
        case 2:
            hangmanTorso.style.display = "block";
            break;
        case 3:
            hangmanLeftArm.style.display = "block";
            break;
        case 4:
            hangmanRightArm.style.display = "block";
            break;
        case 5:
            hangmanLeftLeg.style.display = "block";
            break;
        case 6:
            hangmanRightLeg.style.display = "block";
            alert(`Game over! The answer was "${answer}"`);
            break;
    }
}

function removeDuplicateLetters(arr) {
    var a = [], prev;
        
    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
        }
        prev = arr[i];
    }
    return a;
}

function renderUsedLetters() {
    let usedLetters = "";
    let noDuplicateLetters = removeDuplicateLetters(usedLettersArr);
    noDuplicateLetters.forEach(el => {
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
                    }
                });   
            } else {
                console.log("incorrect");
                numIncorrect++;
                renderHangman(numIncorrect);
            }
            usedLettersArr.push(userLetter);
            renderUsedLetters();
        } else {
            alert("Please only use the letter keys");
        }
    }
}
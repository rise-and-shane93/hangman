let form = document.querySelector("#phrase-input form");
let answer = document.querySelector("#phrase-input form input[name='the-answer']");

form.onsubmit = (e) => {
    e.preventDefault();
    alert(answer.value);
}
function newAddition() {
    var firstValue = document.getElementById("firstValue");
    var secondValue = document.getElementById("secondValue");

    firstValue.innerHTML = randomInt(1, 5);
    secondValue.innerHTML = randomInt(1, 5);

    updateButtonsWithOptions();
}

function checkResult(option) {
    var buttonId = "option" + option;
    var correctAnswer = calculateCorrectAnswer();
    var selectedAnswer = Number(document.getElementById(buttonId).innerText);

    if (selectedAnswer == correctAnswer)
        markAsCorrectAnswer(buttonId);
    else
        markAsIncorrectAnswer(buttonId);
    
    document.getElementById("feedback").innerHTML = feedback;           
    document.getElementById("result").innerText = correctAnswer;
}

function updateButtonsWithOptions() {
    var btnOption1  = document.getElementById("option1");
    var btnOption2  = document.getElementById("option2");
    var btnOption3  = document.getElementById("option3");

    var correctAnswer = calculateCorrectAnswer();                
    var incorrectAnswer1 = generateIncorrectAnswer(correctAnswer);
    var incorrectAnswer2 = generateIncorrectAnswer(correctAnswer);

    while (incorrectAnswer2 == incorrectAnswer1 || incorrectAnswer2 == correctAnswer)
        incorrectAnswer2 = incorrectAnswer2 + 1;

    const answers = [correctAnswer, incorrectAnswer1, incorrectAnswer2];
    answers.sort();

    btnOption1.innerText = answers[0];
    btnOption2.innerText = answers[1];
    btnOption3.innerText = answers[2];
}

function calculateCorrectAnswer() {
    var firstValue =  Number(document.getElementById("firstValue").innerText);
    var secondValue = Number(document.getElementById("secondValue").innerText);
    return firstValue + secondValue;
}

function generateIncorrectAnswer(trueAnswer) {
    var maxOffset = Math.floor(0.5 * trueAnswer);
    var minOffset = -1 * maxOffset;
    var offset = randomInt(minOffset, maxOffset);

    if (trueAnswer + offset <= 0)
        return 1;

    if (offset == 0)
        return trueAnswer + 1;

    return trueAnswer + offset;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function markAsCorrectAnswer(buttonId) {
    var button = document.getElementById(buttonId);
    button.classList.remove("btn-outline-dark")
    button.classList.add("btn-success")
}

function markAsIncorrectAnswer(buttonId) {
    var button = document.getElementById(buttonId);
    button.classList.remove("btn-outline-dark")
    button.classList.add("btn-danger")
}
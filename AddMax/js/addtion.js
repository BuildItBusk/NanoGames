function generateRandomAddition() {
    var firstValue = randomInt(1, 10);
    var secondValue = randomInt(1, 10);
    var result = firstValue + secondValue;
    document.getElementById("firstValue").innerHTML = firstValue;
    document.getElementById("secondValue").innerHTML = secondValue;
    generateAnswerOptions();
}

function checkResult(option) {
    var trueAnswer = calculateCorrectAnswer();
    var selectedAnswer = Number(document.getElementById("option" + option).innerText);

    document.getElementById("option" + option).classList.remove('btn-outline-dark');

    if (selectedAnswer == trueAnswer)
    {
        document.getElementById("option" + option).classList.add('btn-success');
    }                    
    else
    {
        document.getElementById("option" + option).classList.add('btn-danger');
    }
    
    document.getElementById("feedback").innerHTML = feedback;   
        
    document.getElementById("result").innerText = trueAnswer;
}

function generateAnswerOptions() {
    var trueAnswer = calculateCorrectAnswer();                
    var fakeAnswer1 = generateIncorrectAnswer(trueAnswer);
    var fakeAnswer2 = generateIncorrectAnswer(trueAnswer);

    while (fakeAnswer2 == fakeAnswer1 || fakeAnswer2 == trueAnswer)
        fakeAnswer2 = fakeAnswer2 + 1;

    const answers = [trueAnswer, fakeAnswer1, fakeAnswer2];
    answers.sort();

    document.getElementById("option1").innerText = answers[0];
    document.getElementById("option2").innerText = answers[1];
    document.getElementById("option3").innerText = answers[2];
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
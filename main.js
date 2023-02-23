const questionButtons = document.querySelectorAll('.question-btn');
const questionAnswers = document.querySelectorAll('.answer');


const showAnswer = e => {
    let buttonId = e.currentTarget.id;
    const answer = document.getElementById(`${buttonId}-answer`);
    removeRotation();
    if (!answer.classList.contains('open')) {
        removeOpened();
        answer.classList.add('open');
        e.currentTarget.style.setProperty('--rotate', "rotate(135deg)");
    } else {
        answer.classList.remove('open');
    }
}

const removeOpened = () => {
    questionAnswers.forEach(answer => answer.classList.remove('open'));
}

questionButtons.forEach(button => {
    button.addEventListener('click', showAnswer);

});

const removeRotation = () => {
    questionButtons.forEach(button => button.style.setProperty('--rotate', ""));
}
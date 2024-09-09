let submitOption = document.getElementById("submit");
let userResult = document.getElementById("result");

const correctAnswers = {
    q1: "1", //correct answer is A
    q2: "2", //correct answer is B
    q3: "3", //correct answer is A
    q4: "4", //correct answer is D
    q5: "3" //correct answer is C
}

// when submit button is clicked, call func
submitOption.addEventListener("click", function() {
    let correctScore = 0;

    for (const questions in correctAnswers) { //loops while there are answers left to check
        const selectedOption = document.querySelector(`input[name="${questions}"]:checked`); //declares selected option to be what the user selected

        if (selectedOption && selectedOption.value === correctAnswers[questions]) {
           correctScore++; // increment score by 1 if selected option was correct 
        };
    };

    userResult.textContent = `You scored ${correctScore} points out of 5!!!`;
});

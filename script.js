let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreval = document.querySelector("#user-score");
const compScoreval = document.querySelector("#comp-score");
const resetBtn = document.querySelector(".reset-btn");

resetBtn.addEventListener("click",() => {
        userScore = 0;
        userScoreval.innerText = userScore;
        compScore = 0;
        compScoreval.innerText = compScore;
        msg.innerText = "Play your move";
        msg.style.backgroundColor = "#081B31";
});

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = (userChoice,compChoice) => {
    msg.style.backgroundColor = "#081B31"
    msg.innerText = (`It's DRAW!! , ${userChoice} draws ${compChoice}`);
};

const userWins = (userChoice,compChoice) => {
    userScore++;
    userScoreval.innerText= userScore;
    msg.innerText = (`You WON!! , ${userChoice} beats ${compChoice}`);
    msg.style.backgroundColor = "green";
};

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame(userChoice,compChoice);
    }

    else if (
             (userChoice === "rock" && compChoice === "scissors") ||
             (userChoice === "paper"   && compChoice === "rock")    || 
             (userChoice === "scissors" && compChoice === "paper")
            ) 
            {
        userWins(userChoice,compChoice);
    }
    else {
        compScore++;
        compScoreval.innerText= compScore;
        msg.innerText = (`You LOST!! , ${compChoice} beats your ${userChoice}`);
        msg.style.backgroundColor = "red";
    }
};
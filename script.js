const newGame = document.getElementById('newGame');
const score = document.querySelector('.score');
const choices = document.querySelectorAll('.choice');
let myStatus = document.getElementById('myStatus');
let computerStatus = document.getElementById('computerStatus');
let computerTurnImg = document.getElementById('computerImg');
let myTurn;
let computerTurn;
let getWinner;
const scoreBoard = {
    player: 0,
    computer: 0
}


choices.forEach(choice => choice.addEventListener('click', game));

function game(e) {
    newGame.style.display = 'inline-block';
    myTurn = e.target.id;
    computerTurn = getcomputerTurn();
    getWinner = getResults(myTurn, computerTurn);
    showResults(getWinner, computerTurn);
    console.log(myTurn, computerTurn[0], getWinner)

}

// This Function State the Computer Choice.
function getcomputerTurn() {
    const computerChoice = Math.floor(Math.random() * choices.length);
    if (computerChoice === 0) {
        return ['Rock', document.getElementById('computerImg').src = 'img/rock.png']
    } else if (computerChoice === 1) {
        // return 'Paper';
        return ['Paper', document.getElementById('computerImg').src = 'img/paper.png']
    } else {
        // return 'Scissors';
        return ['Scissors', document.getElementById('computerImg').src = 'img/scissors.png']
    }
}

// This Function Decides Who is the Winner Based on the Choices.
function getResults(myTurn, computerTurn) {
    if (myTurn === computerTurn[0]) {
        return 'It\'s a Draw'
    } else if (myTurn === 'Rock') {
        if (computerTurn[0] === 'Paper') {
            return 'Computer'
        } else if (computerTurn[0] === 'Scissors') {
            return 'Me'
        }
    } else if (myTurn === 'Paper') {
        if (computerTurn[0] === 'Scissors') {
            return 'Computer'
        } else if (computerTurn[0] === 'Rock') {
            return 'Me'
        }
    } else if (myTurn === 'Scissors') {
        if (computerTurn[0] === 'Rock') {
            return 'Computer'
        } else if (computerTurn[0] === 'Paper') {
            return 'Me'
        }
    }
}

// This Function Show the Results in the Modal & State the Score.
function showResults(getWinner, computerTurn) {    
    if (getWinner === 'Me') {
        scoreBoard.player ++;
        myStatus.innerHTML = 'You Win';
        computerStatus.innerHTML = `Computer Chose ${computerTurn[0]}`;
        computerTurnImg.src = computerTurn[1];
        $('#exampleModal').modal('show');
    } else if (getWinner === 'Computer') {
        scoreBoard.computer ++;
        myStatus.innerHTML = 'You Lost';
        computerStatus.innerHTML = `Computer Chose ${computerTurn[0]}`;
        computerTurnImg.src = computerTurn[1];
        $('#exampleModal').modal('show');
    } else {
        myStatus.innerHTML = 'It\'s a Draw';
        computerStatus.innerHTML = `Computer Chose ${computerTurn[0]}`;
        computerTurnImg.src = computerTurn[1];
    }
    score.innerHTML = `
        <span class="col-md-3" id="player">Player: ${scoreBoard.player}</span>
        <span class="col-md-3" id="computer">Computer: ${scoreBoard.computer}</span>
    `
}

newGame.addEventListener('click', resetGame);

function resetGame() {
    // score.innerHTML = `
    //     <span class="col-md-3" id="player">Player: 0</span>
    //     <span class="col-md-3" id="computer">Computer: 0</span>
    // `
    location.reload();
}

//variables

var playerWins = 0
var computerWins = 0
var gameType 
var icons
var computerIcons
var gameWinner

var computerArrayNumber 
var playerArrayNumber

var gameType = sessionStorage.getItem('gameType')

var normalIcons = [ 'rock-paper-scissors-assets/happy-rocks.png', 'rock-paper-scissors-assets/happy-paper.png', 'rock-paper-scissors-assets/happy-scissors.png']
var hardcoreIcons = ['rock-paper-scissors-assets/rock-hand.png', 'rock-paper-scissors-assets/happy-alien.png', 'rock-paper-scissors-assets/flat-lizard.png']
var RPS = ['rock', 'paper', 'scissors']
var HAL = ['hand', 'alien', 'lizzard']

//event listeneners and their variables

var game = document.querySelector('.game')
var selection = document.querySelector('.game-text')
var winnerText = document.querySelector('.winner')

//functions

if(gameType === 'normal') {
    icons = normalIcons
    computerIcons = RPS
    generateIcons(normalIcons)

} else if(gameType === 'hardcore') {
    icons = hardcoreIcons
    computerIcons = HAL
    generateIcons(hardcoreIcons)
}


function generateIcons(icons) {
    for(var i = 0; i < 3; i++) {
        game.innerHTML += 
        `
        <img src="${icons[i]}">
        `
    }
    iconEvents = game.children
    for(var j = 0; j < iconEvents.length; j++) {
        iconEvents[j].addEventListener('click', playGame)
    }
}

function playGame(e) {
    var choice = e.currentTarget
    arrayString = choice.src.slice(73)
    for(var i = 0; i <= icons.length; i++) {
        if(arrayString === icons[i]) {
            playerArrayNumber = i
        }
    }
    choice = choice.src.slice(73)

    //gets random computer input
    var computerChoice = compChoice()
    
    //gets player choice input
    if(gameType === 'normal') {
        var playerChoice = normalRound(choice)
        var winner = normalLogic(playerChoice, computerChoice)
    }
    else {
        var playerChoice = hardcoreRound(choice)
        var winner = hardcoreLogic(playerChoice, computerChoice)
    }

    console.log(playerChoice)
    console.log(computerChoice)
    console.log(winner)

    if(winner === 'w') {
        gameWinner = 'You won!'
    } else if(winner === 'l') {
        gameWinner = 'You Lost!'
    } else {
        gameWinner = 'You Tied!'
    }

    var fadeEffect = setInterval(function () {
        if (!game.style.opacity) {
            game.style.opacity = 1;
        }
        if (game.style.opacity > 0) {
            game.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }

    }, 25);

    setTimeout(function battleScreen() {
        game.innerHTML = ``

        game.style.opacity = 1;
    
        game.innerHTML = 
        `
        <img src="${icons[playerArrayNumber]}">
        <img src="${icons[computerArrayNumber]}">

        `

        selection.innerHTML =
        `
        <h1 class="player-selection">${playerChoice}</h1>
        <h1 class="computer-selection">${computerChoice}</h1>
        `

        winnerText.innerHTML = 
        `
        <h1 class="game-text">${gameWinner}</h1>
        `
    
    },500)
    
}

function compChoice() {
    var num = Math.floor(Math.random() * 3) 
    var computerChoice = computerIcons[num]

    computerArrayNumber = num

    return computerChoice
}

function normalRound(choice) {
    if(choice === icons[0]) {
        return 'rock'
    } else if(choice === icons[1]) {
        return 'paper'
    } else if(choice === icons[2]) {
        return 'scissors'
    }
}

function hardcoreRound(choice) {
    if(choice === icons[0]) {
        return 'hand'
    } else if(choice === icons[1]) {
        return 'alien'
    } else if(choice === icons[2]) {
        return 'lizzard'
    }
}
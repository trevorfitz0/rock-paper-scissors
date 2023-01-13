//variables

var playerWins = 0
var computerWins = 0
var gameType 
var icons
var computerIcons

var gameType = sessionStorage.getItem('gameType')

var normalIcons = [ 'rock-paper-scissors-assets/happy-rocks.png', 'rock-paper-scissors-assets/happy-paper.png', 'rock-paper-scissors-assets/happy-scissors.png']
var hardcoreIcons = ['rock-paper-scissors-assets/rock-hand.png', 'rock-paper-scissors-assets/happy-alien.png', 'rock-paper-scissors-assets/flat-lizard.png']
var RPS = ['rock', 'paper', 'scissors']
var HAL = ['hand', 'alien', 'lizzard']

//event listeneners and their variables

var game = document.querySelector('.game')

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

    setInterval(function () {
            console.log(game.style.opacity)
            game.style.opacity = 1;

    }, 200);

    battleScreen(playerChoice, computerChoice) 
    
}

setTimeout(function battleScreen(player, computer) {
    game.innerHTML = ``
},3000)

function compChoice() {
    var num = Math.floor(Math.random() * 3) 
    var computerChoice = computerIcons[num]

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
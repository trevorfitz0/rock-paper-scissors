//variables
var gameType
var icons
var gameWinner

var player = new Player('player')
var computer = new Player('computer')

var gameType = sessionStorage.getItem('gameType')

var normalIcons = [ 'rock-paper-scissors-assets/happy-rocks.png', 'rock-paper-scissors-assets/happy-paper.png', 'rock-paper-scissors-assets/happy-scissors.png']
var hardcoreIcons = ['rock-paper-scissors-assets/rock-hand.png', 'rock-paper-scissors-assets/happy-alien.png', 'rock-paper-scissors-assets/flat-lizard.png', 'rock-paper-scissors-assets/ufo.png', 'rock-paper-scissors-assets/iguana.png']
var RPS = ['rock', 'paper', 'scissors']
var HAL = ['hand', 'alien', 'lizzard', 'ufo', 'iguana']

//event listeneners and their variables

var gamePlay = document.querySelector(`.game-play`)
var game = document.querySelector('.game')
var selection = document.querySelector('.game-text')
var winnerText = document.querySelector('.winner')
var pWins = document.querySelector('.pWins')
var cWins = document.querySelector('.cWins')
var homeButton = document.querySelector('.home-button')
var resetButton = document.querySelector('.reset-button')

homeButton.addEventListener('click', home)
resetButton.addEventListener('click', reset)

//functions

function home() {
    setTimeout(window.location.href = "index.html", 3000)
}

function reset() {
    player.wins = 0
    computer.wins = 0
    updateScore()
}

function loadGame() {
    clearGame()
        gamePlay.style.opacity = 1
    if(gameType === 'normal') {
        icons = normalIcons
        computer.icons = RPS
        generateIcons(normalIcons)
    } else if(gameType === 'hardcore') {
        icons = hardcoreIcons
        computer.icons = HAL
        game.style.scale = .75
        generateIcons(hardcoreIcons)
    }
}

function generateIcons(icons) {
    for(var i = 0; i < icons.length; i++) {
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
            player.arrayNumber = i
        }
    }

    //gets random computer input
    computer.choice = compChoice()
    
    //gets player choice input
    if(gameType === 'normal') {
        player.choice = normalRound(arrayString)
        var winner = normalLogic(player.choice, computer.choice)
    } else {
        player.choice = hardcoreRound(arrayString)
        var winner = hardcoreLogic(player.choice, computer.choice)
    }

    console.log(player.choice)
    console.log(computer.choice)
    console.log(winner)

    if(winner === 'w') {
        gameWinner = 'You won!'
        player.wins += 1
    } else if(winner === 'l') {
        gameWinner = 'You Lost!'
        computer.wins += 1
    } else {
        gameWinner = 'You Tied!'
    }

    fadeOut()

    setTimeout(function battleScreen() {
        game.innerHTML = ``

        game.style.scale = 1
        gamePlay.style.opacity = 1;
    
        game.innerHTML = 
        `
        <img src="${icons[player.arrayNumber]}">
        <img src="${icons[computer.arrayNumber]}">

        `

        selection.innerHTML =
        `
        <h1 class="player-selection">${player.choice}</h1>
        <h1 class="computer-selection">${computer.choice}</h1>
        `

        winnerText.innerHTML = 
        `
        <h1 class="game-text">${gameWinner}</h1>
        `

        updateScore()
    
    },500)

    setTimeout(fadeOut, 2000)
    setTimeout(loadGame, 2500)

}

function updateScore() {
    pWins.innerHTML = 
    `
    <p class="human-wins">${player.wins}</p>
    `
    cWins.innerHTML = 
    `
    <p class="human-wins">${computer.wins}</p>
    `
}

function compChoice() {
    var num = Math.floor(Math.random() * icons.length) 
    computer.choice = computer.icons[num]

    computer.arrayNumber = num

    return computer.choice
}

function normalRound(choice) {
    console.log(choice)
    console.log(icons[1])
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
    } else if(choice === icons[3]) {
        return 'ufo'
    } else if(choice === icons[4]) {
        return 'iguana'
    }
}
function clearGame() {
    game.innerHTML = ``
    selection.innerHTML = ``
    winnerText.innerHTML = ``
}

function fadeOut() {
    var fadeEffect = setInterval(function () {
        if (!gamePlay.style.opacity) {
            gamePlay.style.opacity = 1
        }
        if (gamePlay.style.opacity > 0) {
            gamePlay.style.opacity -= 0.1
        } else {
            clearInterval(fadeEffect)
        }
    }, 25)
}
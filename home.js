var gameTypeScreen = document.querySelector('.game-type')
var rainbow = document.querySelector('.rainbow')
var explosion = document.querySelector('.explosion')

rainbow.addEventListener('click', function rainbowGame() {
    gameType = 'normal'
    sessionStorage.setItem('gameType', gameType)
    fadeOut()
    setTimeout(window.location.href = "game.html", 3000)
})
explosion.addEventListener('click', function explosionGame() {
    gameType = 'hardcore'
    sessionStorage.setItem('gameType', gameType)
    fadeOut()
    setTimeout(window.location.href = "game.html", 3000)
})

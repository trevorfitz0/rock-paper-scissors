var gameTypeScreen = document.querySelector('.game-type')
var rainbow = document.querySelector('.rainbow')
var explosion = document.querySelector('.explosion')

rainbow.addEventListener('click', function rainbowGame() {
    gameType = 'normal'
    sessionStorage.setItem('gameType', gameType)
    window.location.href = "game.html"
})
explosion.addEventListener('click', function explosionGame() {
    gameType = 'hardcore'
    sessionStorage.setItem('gameType', gameType)
    window.location.href = "game.html"
})
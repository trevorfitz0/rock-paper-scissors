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

function fadeIcons() {
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
}

function normalLogic(player, computer) {
    if(player === 'rock') {
        if(computer === 'rock') {
            return 't'
        } else if(computer === 'paper') {
            return 'l'
        } else {
            return 'w'
        }
    } else if(player === 'scissors') {
        if(computer === 'rock') {
            return 'l'
        } else if(computer === 'paper') {
            return 'w'
        } else {
            return 't'
        }
    } else if(player === 'paper') {
        if(computer === 'rock') {
            return 'w'
        } else if(computer === 'paper') {
            return 't'
        } else {
            return 'l'
        }
    }
}


function hardcoreLogic(player, computer) {
    if(player === 'hand') {
        if(computer === 'hand') {
            return 't'
        } else if(computer === 'alien') {
            return 'l'
        } else {
            return 'w'
        }
    } else if(player === 'lizzard') {
        if(computer === 'hand') {
            return 'l'
        } else if(computer === 'alien') {
            return 'w'
        } else {
            return 't'
        }
    } else if(player === 'alien') {
        if(computer === 'hand') {
            return 'w'
        } else if(computer === 'alien') {
            return 't'
        } else {
            return 'l'
        }
    }
}
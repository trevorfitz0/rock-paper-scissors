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


var HAL = ['hand', 'alien', 'lizzard', 'ufo', 'iguana']

//  hand cut alien
//  alien covers lizzard
//  lizzard crushes ufo
//  ufo poisons iguanas
//  iguanas smashes (or melts) hand
//  hand decapitate ufo
//  ufo eats alien
//  alien disproves iguanas
//  iguanas vaporizes lizzard
//  lizzard breaks hand

function hardcoreLogic(player, computer) {
    if(player === 'hand') {
        if(computer === 'hand') {
            return 't'
        } else if(computer === 'alien') {
            return 'w'
        } else if(computer === 'lizzard') {
            return 'l'
        } else if(computer === 'ufo') {
            return 'w'
        } else if(computer === 'iguana') {
            return 'l'
        }
    } else if(player === 'alien') {
        if(computer === 'hand') {
            return 'l'
        } else if(computer === 'alien') {
            return 't'
        } else if(computer === 'lizzard') {
            return 'w'
        } else if(computer === 'ufo') {
            return 'l'
        } else if(computer === 'iguana') {
            return 'w'
        }
    } else if(player === 'lizzard') {
        if(computer === 'hand') {
            return 'w'
        } else if(computer === 'alien') {
            return 'l'
        } else if(computer === 'lizzard') {
            return 't'
        } else if(computer === 'ufo') {
            return 'w'
        } else if(computer === 'iguana') {
            return 'l'
        }
    } else if(player === 'ufo') {
        if(computer === 'hand') {
            return 'w'
        } else if(computer === 'alien') {
            return 'w'
        } else if(computer === 'lizzard') {
            return 'l'
        } else if(computer === 'ufo') {
            return 't'
        } else if(computer === 'iguana') {
            return 'l'
        }
    } else if(player === 'iguana') {
        if(computer === 'hand') {
            return 'w'
        } else if(computer === 'alien') {
            return 'l'
        } else if(computer === 'lizzard') {
            return 'w'
        } else if(computer === 'ufo') {
            return 'l'
        } else if(computer === 'iguana') {
            return 't'
        }
    } 
}
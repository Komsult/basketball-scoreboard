let homeValue = document.getElementById("point-one")
let guestValue = document.getElementById("point-two")
let scoreHome = 0
let scoreGuest = 0

function addOneHome(){
    scoreHome += 1
    homeValue.textContent = scoreHome
}
function addTwoHome(){
    scoreHome += 2
    homeValue.textContent = scoreHome
}

function addThreeHome(){
    scoreHome += 3
    homeValue.textContent = scoreHome
}

function addOneGuest(){
    scoreGuest += 1
    guestValue.textContent = scoreGuest
}
function addTwoGuest(){
    scoreGuest += 2
    guestValue.textContent = scoreGuest
}

function addThreeGuest(){
    scoreGuest += 3
    guestValue.textContent = scoreGuest
}

function newGame(){
    scoreGuest = 0
    scoreHome = 0
    guestValue.textContent = scoreGuest
    homeValue.textContent = scoreHome
}
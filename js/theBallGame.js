'use strict'

function onBallClick(elBall) {
    var newBallSize = +elBall.innerText + 50
    elBall.style.width = newBallSize + 'px'
    elBall.style.height = newBallSize + 'px'
    elBall.innerText = newBallSize
}

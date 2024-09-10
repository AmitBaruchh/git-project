'use strict'

function onBallClick(elBall) {
    var newBallSize = +elBall.innerText + 50
    newBallSize = newBallSize > 400 ? 100 : newBallSize
    elBall.style.width = newBallSize + 'px'
    elBall.style.height = newBallSize + 'px'
    elBall.innerText = newBallSize
    elBall.style.backgroundColor = getRandomColor()
}

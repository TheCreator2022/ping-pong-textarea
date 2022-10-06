var outside = 0
var side = {
    left:document.querySelector(".sides .left"),
    right:document.querySelector(".sides .right")
}
var tutorial = document.querySelector(".tutorial")
var tutorialContantier = {
    bg:document.querySelector(".tutorial .bg")
}
var worldRecord = document.querySelector(".world-records")
var secondDoc = document.querySelector(".world-records .starts .number")
var restartBtn = document.querySelector(".start .restart")
var secondReam = 20
let record = 0
var landed1 = 0
var startGame = document.querySelector(".start")
var charBackground = "\u2B1B"
var charBall = "\u2B1C"
var charPaddle = "\uD83D\uDFE9"
var rowBG = ""
var result = {
    areaArray:[],
    areaNewLine:""
}
var gameText = document.querySelector(".start .game")
var ballX = 9
var ballY = 11
var dierctions = ["right", "up"]
var dead = false
var paddlePosition = 8
var paddleEnd = () => getChange()
var resources = {
    score:0,
    time:[0,0,0]
}
var scoreDisplay = document.querySelector(".start .display .score .number")
var timeDoc = [
    document.querySelector(".start .display .time .hours"),
    document.querySelector(".start .display .time .minutes"),
    document.querySelector(".start .display .time .seconds")
]
var copyable = document.querySelector(".start .copy")

tutorial.style.display = "none"
worldRecord.style.display = "none"
startGame.style.display = "none"
document.body.style.fontFamily = "monospace"

setTimeout(() => {
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            outside += 5
        }, 100);
    }
}, 500);

setTimeout(() => {
    tutorial.style.display = "block"
    tutorialContantier.bg.style.opacity = "0.75"
}, 1500);

const formatTen = function(number) {
    return number < 10 ? `0${number}` : number
}

const restart = function() {
    startGame.style.display = "block"
    worldRecord.style.display = "none"
    record = 2
}

for (let i = 0; i < 17; i++) {
    rowBG += charBackground
}

for (let i = 0; i < 13; i++) {
    result.areaArray.push(rowBG)
}

const moveBall = function(x, y) {
    result.areaArray[y] = ""
    for (let i = 0; i < x; i++) {
        result.areaArray[y] += charBackground
    }
    result.areaArray[y] += charBall
    for (let i = 0; i < 16 - x; i++) {
        result.areaArray[y] += charBackground
    }
}

const dierction = function(d1, d2) {
    if (d1 == "left") {
        ballX--
    }
    if (d1 == "right") {
        ballX++
    }
    if (d2 == "down") {
        ballY++
    }
    if (d2 == "up") {
        ballY--
    }
}

restartBtn.addEventListener("click", function() {
    restart()
    ballX = 9
    ballY = 11
    paddlePosition = 8
})

const getChange = function() {
    if (paddlePosition == 0) {
        return ballX == 3 || ballX == 4 || ballX == 5 || ballX == 6 || ballX == 7 || ballX == 8 || ballX == 9 || ballX == 10 || ballX == 11 || ballX == 12 || ballX == 13 || ballX == 14 || ballX == 15 || ballX == 16 || ballX == 17
    }
    if (paddlePosition == 1) {
        return ballX == 0 || ballX == 4 || ballX == 5 || ballX == 6 || ballX == 7 || ballX == 8 || ballX == 9 || ballX == 10 || ballX == 11 || ballX == 12 || ballX == 13 || ballX == 14 || ballX == 15 || ballX == 16 || ballX == 17
    }
    if (paddlePosition == 2) {
        return ballX == 0 || ballX == 1 || ballX == 5 || ballX == 6 || ballX == 7 || ballX == 8 || ballX == 9 || ballX == 10 || ballX == 11 || ballX == 12 || ballX == 13 || ballX == 14 || ballX == 15 || ballX == 16 || ballX == 17
    }
    if (paddlePosition == 3) {
        return ballX == 0 || ballX == 1 || ballX == 2 || ballX == 6 || ballX == 7 || ballX == 8 || ballX == 9 || ballX == 10 || ballX == 11 || ballX == 12 || ballX == 13 || ballX == 14 || ballX == 15 || ballX == 16 || ballX == 17
    }
    if (paddlePosition == 4) {
        return ballX == 0 || ballX == 1 || ballX == 2 || ballX == 3 || ballX == 7 || ballX == 8 || ballX == 9 || ballX == 10 || ballX == 11 || ballX == 12 || ballX == 13 || ballX == 14 || ballX == 15 || ballX == 16 || ballX == 17
    }
    if (paddlePosition == 5) {
        return ballX == 0 || ballX == 1 || ballX == 2 || ballX == 3 || ballX == 4 || ballX == 8 || ballX == 9 || ballX == 10 || ballX == 11 || ballX == 12 || ballX == 13 || ballX == 14 || ballX == 15 || ballX == 16 || ballX == 17
    }
    if (paddlePosition == 6) {
        return ballX == 0 || ballX == 1 || ballX == 2 || ballX == 3 || ballX == 4 || ballX == 5 || ballX == 9 || ballX == 10 || ballX == 11 || ballX == 12 || ballX == 13 || ballX == 14 || ballX == 15 || ballX == 16 || ballX == 17
    }
    if (paddlePosition == 7) {
        return ballX == 0 || ballX == 1 || ballX == 2 || ballX == 3 || ballX == 4 || ballX == 5 || ballX == 6 || ballX == 10 || ballX == 11 || ballX == 12 || ballX == 13 || ballX == 14 || ballX == 15 || ballX == 16 || ballX == 17
    }
    if (paddlePosition == 8) {
        return ballX == 0 || ballX == 1 || ballX == 2 || ballX == 3 || ballX == 4 || ballX == 5 || ballX == 6 || ballX == 7 || ballX == 11 || ballX == 12 || ballX == 13 || ballX == 14 || ballX == 15 || ballX == 16 || ballX == 17
    }
    if (paddlePosition == 9) {
        return ballX == 0 || ballX == 1 || ballX == 2 || ballX == 3 || ballX == 4 || ballX == 5 || ballX == 6 || ballX == 7 || ballX == 8 || ballX == 12 || ballX == 13 || ballX == 14 || ballX == 15 || ballX == 16 || ballX == 17
    }
    if (paddlePosition == 10) {
        return ballX == 0 || ballX == 1 || ballX == 2 || ballX == 3 || ballX == 4 || ballX == 5 || ballX == 6 || ballX == 7 || ballX == 8 || ballX == 9 || ballX == 13 || ballX == 14 || ballX == 15 || ballX == 16 || ballX == 17
    }
    if (paddlePosition == 11) {
        return ballX == 0 || ballX == 1 || ballX == 2 || ballX == 3 || ballX == 4 || ballX == 5 || ballX == 6 || ballX == 7 || ballX == 8 || ballX == 9 || ballX == 10 || ballX == 14 || ballX == 15 || ballX == 16 || ballX == 17
    }
    if (paddlePosition == 12) {
        return ballX == 0 || ballX == 1 || ballX == 2 || ballX == 3 || ballX == 4 || ballX == 5 || ballX == 6 || ballX == 7 || ballX == 8 || ballX == 9 || ballX == 10 || ballX == 11 || ballX == 15 || ballX == 16 || ballX == 17
    }
    if (paddlePosition == 13) {
        return ballX == 0 || ballX == 1 || ballX == 2 || ballX == 3 || ballX == 4 || ballX == 5 || ballX == 6 || ballX == 7 || ballX == 8 || ballX == 9 || ballX == 10 || ballX == 11 || ballX == 12 || ballX == 16 || ballX == 17
    }
    if (paddlePosition == 14) {
        return ballX == 0 || ballX == 1 || ballX == 2 || ballX == 3 || ballX == 4 || ballX == 5 || ballX == 6 || ballX == 7 || ballX == 8 || ballX == 9 || ballX == 10 || ballX == 11 || ballX == 12 || ballX == 13 || ballX == 17
    }
    if (paddlePosition == 15) {
        return ballX == 0 || ballX == 1 || ballX == 2 || ballX == 3 || ballX == 4 || ballX == 5 || ballX == 6 || ballX == 7 || ballX == 8 || ballX == 9 || ballX == 10 || ballX == 11 || ballX == 12 || ballX == 13 || ballX == 14
    }
}

const blankGame = function() {
    result.areaArray = []
    result.areaNewLine = ""
    for (let i = 0; i < 13; i++) {
        result.areaArray.push(rowBG)
    }
}

const movePaddle = function(x) {
    for (let i = 0; i < x; i++) {
        result.areaArray[12] += charBackground
    }
    for (let i = 0; i < 3; i++) {
        result.areaArray[12] += charPaddle
    }
    for (let i = 0; i < 14 - x; i++) {
        result.areaArray[12] += charBackground
    }
}

const copyTextGame = () => {
    navigator.clipboard.writeText(result.areaNewLine)
}

side.left.addEventListener("click", function() {
    paddlePosition--
})

side.right.addEventListener("click", function() {
    paddlePosition++
})

copyable.addEventListener("click", function() {
    copyTextGame()
})

var gameLoop = function() {
    side.left.style.width = `calc(50% - ${outside}px)`
    side.right.style.width = `calc(50% - ${outside}px)`
    side.right.style.left = `calc(50% + ${outside}px)`
    secondDoc.innerHTML = formatTen(secondReam)
    if (secondReam < 0) {
        restart()
    }
    if (landed1 == 0) {
        landed1 = 1
        for (let i = 0; i < result.areaArray.length; i++) {
            result.areaNewLine += result.areaArray[i]
            result.areaNewLine += "\n"
        }
        gameText.value = dead ? "You are Lost! Click to restart." : result.areaNewLine
    }
    scoreDisplay.innerHTML = resources.score
    if (record == 2) {
        timeDoc[0].innerHTML = formatTen(resources.time[0])
        timeDoc[1].innerHTML = formatTen(resources.time[1])
        timeDoc[2].innerHTML = formatTen(resources.time[2])
    }
}

const closeTurt = function() {
    tutorial.style.display = "none"
}

const showWorldRecord = function() {
    worldRecord.style.display = "block"
}

document.addEventListener("click", function() {
    closeTurt()
    record = 1
    showWorldRecord()
})

setInterval(() => {
    gameLoop()
}, 100);

setInterval(() => {
    if (record == 1 && !(secondReam < 0)) {
        secondReam--
    }
    if (record == 2) {
        resources.time[2]++
    }
    if (record == 2 && resources.time[2] >= 60) {
        resources.time[2] -= 60
        resources.time[1]++
    }
    if (record == 2 && resources.time[1] >= 60) {
        resources.time[1] -= 60
        resources.time[0]++
    }
}, 1000);

setInterval(() => {
    if (record == 2) {
        blankGame()
        result.areaArray[12] = ""
        moveBall(ballX, ballY)
        movePaddle(paddlePosition)
        dierction(dierctions[0], dierctions[1])
        if (ballX >= 17) {
            dierctions[0] = "left"
        }
        if (ballX <= 0) {
            dierctions[0] = "right"
        }
        if (ballY <= 0) {
            dierctions[1] = "down"
            resources.score++
        }
        if ((ballX == paddlePosition || ballX == (paddlePosition + 1) || ballX == (paddlePosition + 2)) || ballY >= 13) {
            dierctions[1] = "up"
        }
        if (paddleEnd() && ballY >= 13) {
            dead = true
        }
        landed1 = 0
    }
}, 1400);

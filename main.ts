input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(Cunter * 75)
})
input.onGesture(Gesture.LogoUp, function () {
    Cunter += 1
})
input.onButtonPressed(Button.AB, function () {
    Cunter = -1
    basic.clearScreen()
})
let Cunter = 0
Cunter = -1
basic.forever(function () {
    if (Cunter >= 0) {
        basic.showNumber(Cunter)
    }
})

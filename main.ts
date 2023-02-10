input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showIcon(IconNames.Scissors)
    } else if (hand == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.SmallSquare)
    }
})
let hand = 0
basic.showIcon(IconNames.Happy)

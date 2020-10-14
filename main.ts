function encenderluces () {
	
}
input.onButtonPressed(Button.A, function () {
    prendeluces()
})
function prendeluces () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    images.iconImage(IconNames.Happy).showImage(0)
}
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 6; index++) {
        prendeluces()
        basic.pause(300)
        apagarluces()
        basic.pause(300)
    }
})
function apagarluces () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    images.iconImage(IconNames.Confused).showImage(0)
}
input.onButtonPressed(Button.B, function () {
    prendeluces()
})
pins.analogWritePin(AnalogPin.P0, 2000)
let angulo = 90
pins.servoWritePin(AnalogPin.P0, 180)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, pins.map(
    input.acceleration(Dimension.X),
    0,
    1023,
    45,
    135
    ))
    basic.pause(100)
})

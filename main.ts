music.setVolume(255)
basic.forever(function () {
	
})
basic.forever(function () {
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )))
    if (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ) > 5) {
        basic.showString("A")
    } else {
        basic.showString("b")
    }
})

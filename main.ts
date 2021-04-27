let pressure_sensor = 0
basic.forever(function () {
    pressure_sensor = pins.analogReadPin(AnalogPin.P0)
    if (pressure_sensor < 600) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . # . #
            . # . # .
            `)
    } else {
        basic.showLeds(`
            # # . # #
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})

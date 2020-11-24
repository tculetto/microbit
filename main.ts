let test = 0
basic.forever(function () {
    basic.pause(1000)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
    test = 0
    basic.pause(test + 4)
})

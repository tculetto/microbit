let test = 9
basic.pause(100)
basic.showNumber(test)
for (let index = 0; index < 10; index++) {
    basic.pause(500)
    basic.showNumber(test)
    test += 9
}
basic.forever(function on_forever() {
    basic.showIcon(IconNames.SmallHeart)
})

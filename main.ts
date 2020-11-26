basic.pause(2000)
let times_table_number = 9
basic.pause(200)
basic.showNumber(times_table_number)
for (let index = 0; index < 10; index++) {
    basic.pause(500)
    basic.showNumber(times_table_number)
    times_table_number += 9
}
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
})

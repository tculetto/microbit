test = 9
basic.pause(100)
basic.show_number(test)
for index in range(10):
    basic.pause(500)
    basic.show_number(test)
    test += 9

def on_forever():
    basic.show_icon(IconNames.SMALL_HEART)
basic.forever(on_forever)

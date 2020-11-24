times_table_number = 9
basic.pause(200)
basic.show_number(times_table_number)
for index in range(10):
    basic.pause(500)
    basic.show_number(times_table_number)
    times_table_number += len("Hello")

def on_forever():
    basic.show_icon(IconNames.SMALL_HEART)
basic.forever(on_forever)

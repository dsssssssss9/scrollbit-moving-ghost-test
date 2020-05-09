scrollbit.clear()
let cpos = 0
basic.forever(function () {
    scrollbit.clear()
    scrollbit.setIcon(
    IconNames.Ghost,
    cpos,
    0,
    58
    )
    scrollbit.show()
    basic.pause(500)
    cpos += 1
    if (cpos >= 13) {
        cpos = 0
    }
})

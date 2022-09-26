input.onButtonPressed(Button.A, function () {
    counter += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(counter)
})
input.onButtonPressed(Button.B, function () {
    counter += -1
})
// Created by: John Hanekom
// Date: September 26th, 2022
// 
// This program sets a variable named "counter" to 0 and adds 1 when you press A but subtracts 1 when you press B. When you press A+B it will show the number
let counter = 0
counter = 0

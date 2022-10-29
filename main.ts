input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("")
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Happy)
})
radio.setGroup(2)
basic.forever(function () {
	
})

document.addEventListener("keydown", (event) => {
    let numDisplay = document.getElementById("numDisplay")
    let numCode = document.getElementById("codeDisplay")
    let numKey = document.getElementById("keyDisplay")
    let numWhich = document.getElementById("whichDisplay")

    let keyDown = event.key // Setting event key
    let keyWhich = event.which // Setting key which
    let keyCode = event.code// Seting key code

    numDisplay.innerHTML = `<p class = "pressedBtn"> ${keyDown.toUpperCase()} was pressed! </p>`
    //Displaying what key was pressed with keydown

    numCode.innerHTML = `<p class = "pressedBtn"> ${keyCode} was pressed </p>`

    numKey.innerHTML = `<p class = "pressedBtn"> ${keyDown.toUpperCase()} was pressed </p>`

    numWhich.innerHTML = `<p class = "pressedBtn"> Key: ${keyWhich} was pressed </p>`

})
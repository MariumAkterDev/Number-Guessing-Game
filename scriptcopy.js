playerThreeButton.addEventListener("click", () => {
    if (inputPlayerThree.value == "") {
        error.innerHTML                     = "Dhurrrrrrrrrrrrrrrrr"
    } else{
        if (inputPlayerThree.value < 0 || inputPlayerThree.value > 10) {
        error.innerHTML                 = "Enter a value between 0 to 10"
        }else{
            error.style                 = "display:none"
            if (inputPlayerOne.value == inputPlayerThree.value) {
                playerName.innerHTML        = ""
                playerThree.style           = "display:none"
                winner.style                = "display:block"
                result.innerHTML            = "Player 3 is Winner"
            }else{
                chanceT++
                chanceCountT.innerHTML      = chanceT
                inputPlayerThree.value      = ""
                if (chanceT == 5) {
                    playerName.innerHTML    = ""
                    playerThree.style         = "display:none"
                    winner.style       = "display:block"
                    result.innerHTML   = "Player 1 is Winner"
                }
            }
        }
    }
})
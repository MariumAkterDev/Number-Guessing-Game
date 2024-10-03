//  =========== DOM part starts ==================

// ============ Player One DOM
let playerOne               = document.querySelector(".playerOne")
let inputPlayerOne          = document.querySelector(".inputPlayerOne")
let playerOneButton         = document.querySelector(".playerOneButton")
// ============ Player Two DOM
let playerTwo               = document.querySelector(".playerTwo")
let inputPlayerTwo          = document.querySelector(".inputPlayerTwo")
let playerTwoButton         = document.querySelector(".playerTwoButton")
// ============ Player Three DOM
let playerThree             = document.querySelector(".playerThree")
let inputPlayerThree        = document.querySelector(".inputPlayerThree")
let playerThreeButton       = document.querySelector(".playerThreeButton")

// =========== Others DOM
let playerName              = document.querySelector(".playerName")
let error                   = document.querySelector(".error")
let winner                  = document.querySelector(".winner")
let result                  = document.querySelector(".result")

// =========== player 2 chance DOM
let chanceCount             = document.querySelector(".chanceCount")
let chance                  = 0
// =========== player 3 chance DOM
let chanceCountT            = document.querySelector(".chanceCountT")
let chanceT                 = 0

// *********** DOM part ends **********************

// $$$$$$$$$$$$$$$$function part starts $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
chanceCount.innerHTML          = chance
chanceCountT.innerHTML         = chanceT

// ========== player 1 function starts ===============
playerOneButton.addEventListener("click", () => {
    if (inputPlayerOne.value == "") {
        error.innerHTML             = "Please enter a value!"
    } else {
        if (inputPlayerOne.value < 0 || inputPlayerOne.value > 10) {
            error.innerHTML         = "Enter a value between 0 to 10"
        } else {
            error.innerHTML         = ""
            playerOne.style         = "display:none"
            playerTwo.style         = "display:block"
            playerName.innerHTML    = "Player - 2"
        }
    }
    // =========== player 2 function starts =================
    playerTwoButton.addEventListener("click", () => {
        if (inputPlayerTwo.value == "") {
            error.innerHTML                     = "Haireeeeeee!"
        } else {
            if (inputPlayerTwo.value < 0 || inputPlayerTwo.value > 10) {
                error.innerHTML                 = "Your value is invalid"
            } else {
                error.innerHTML                 = ""
                if (inputPlayerOne.value == inputPlayerTwo.value) {
                    playerName.innerHTML        = ""
                    playerTwo.style             = "display:none"
                    winner.style                = "display:block"
                    result.innerHTML            = "Player 2 is Winner"
                } else {
                    chance++
                    chanceCount.innerHTML       = chance
                    inputPlayerTwo.value        = ""
                    if (chance == 5) {
                        playerName.innerHTML    = "Player - 3";
                        playerTwo.style         = "display:none"
                        playerThree.style       = "display:block"
                    }
                    // ================= player 3 function starts ===========
                    playerThreeButton.addEventListener("click", () => {
                        if (inputPlayerThree.value == "") {
                            error.innerHTML                     = "Dhurrrrrrrrrrrrrrrrr"
                        } 
                        else{
                            if (inputPlayerThree.value < 0 || inputPlayerThree.value > 10) {
                            error.innerHTML                 = "Enter a value between 0 to 10"
                            }else{
                                error.innerHTML =""
                                if (inputPlayerOne.value == inputPlayerThree.value) {
                                    playerName.innerHTML        = ""
                                    playerThree.style           = "display:none"
                                    winner.style                = "display:block"
                                    result.innerHTML            = "Player 3 is Winner"
                                }else{
                                    error.innerHTML = ""
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
                }
            }
        }
    })
})








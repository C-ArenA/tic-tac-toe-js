// wins:    [0][1][2]
//          [3][4][5]
//          [6][7][8]
//
// H: 0-1-2, 3-4-5, 6-7-8, 
// V: 0-3-6, 2-5-8, 1-4-7,
// D: 0-4-8, 2-4-6 
function checkIfWins(player, buttonsArray) {
    let toWin = player + player + player;
    let result = "";
    let tie = 0;
    for (let i = 0; i < buttonsArray.length; i++) {
        const button = buttonsArray[i];
        if (button.innerHTML != "-") tie = tie + 1;
        result += button.innerHTML; 
    }
    
    // Check H:
    for (let h = 0; h < result.length; h+=3) {
        const toTest = result.slice(h, h+3);
        if (toTest == toWin) return true;
    }
    // Check V:
    for (let v = 0; v < 3; v++) {
        const toTest = result[v] + result[v+3] + result[v+6];
        if (toTest == toWin) return true;
    }
    // Check D \:
    {
        const toTest = result[0] + result[4] + result[8];
        if (toTest == toWin) return true;
    }
    // Check D /:
    {
        const toTest = result[2] + result[4] + result[6];
        if (toTest == toWin) return true;
    }
    if (tie >= 9) {
        return undefined;
    }
    return false;
}

function initializeGame() {
    askingUser.style["display"] = "none";
    const X = "X";
    const O = "O";
    let buttonsArray = document.getElementsByTagName("button");
    let player = X;
    info.innerHTML = "Player " + player;
    for (let i = 0; i < buttonsArray.length; i++) {
        const button = buttonsArray[i];
        button.innerHTML = "-"
        button.addEventListener("click", () => {
            if (button.innerHTML != "-") return false;
            button.innerHTML = player;
            let wins = checkIfWins(player, buttonsArray);
            if(wins === undefined) {
                message.innerHTML = "It's a tie :("; 
                start.value = "Play Again?"
                askingUser.style["display"] = "block";
                return true;
            }
            if (wins) {
                message.innerHTML = "Player " + player + " Wins!!"; 
                start.value = "Play Again?"
                askingUser.style["display"] = "block";
                return true;
            }
            player = player == "X"? "O" : "X";
            info.innerHTML = "Player " + player; 
            return true;
        });  
    }
    console.log("Game Initialized");
}

start.addEventListener("click", initializeGame);
//initializeGame();
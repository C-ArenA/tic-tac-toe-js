// wins:    [0][1][2]
//          [3][4][5]
//          [6][7][8]
//
// H: 0-1-2, 3-4-5, 6-7-8, 
// V: 0-3-6, 2-5-8, 1-4-7,
// D: 0-4-8, 2-4-6 
function wins(player, buttonsArray) {
    let toWin = player + player + player;
    let result = "";
    for (let i = 0; i < buttonsArray.length; i++) {
        const button = buttonsArray[i];
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
            if (wins(player, buttonsArray)) {
                info.innerHTML = "Player " + player + " Wins!!"; 
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
const X = "X";
const O = "O";
let buttonsArray = document.getElementsByTagName("button");
let player = X;
info.innerHTML = "Player " + player;
for (let i = 0; i < buttonsArray.length; i++) {
    const button = buttonsArray[i];
    button.addEventListener("click", () => {
        if (button.innerHTML != "-") return false;
        button.innerHTML = player;
        player = player == "X"? "O" : "X";
        info.innerHTML = "Player " + player; 
        return true;
    });  
}

// wins:    [0][1][2]
//          [3][4][5]
//          [6][7][8]
//
// H: 0-1-2, 3-4-5, 6-7-8, 
// V: 0-3-6, 2-5-8, 1-4-7,
// D: 0-4-8, 2-4-6 
function checkGame() {
    for (let i = 0; i < buttonsArray.length; i++) {
        const button = buttonsArray[i];
        
    }
}
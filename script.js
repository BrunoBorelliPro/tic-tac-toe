const cells = document.getElementsByClassName("cell")
const player = document.getElementById("player")
let isX = true
const gameStatus = [
    -1,-1,-1,
    -1,-1,-1,
    -1,-1,-1
]
const possibilidades = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]


for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.addEventListener('click',()=>{
        if(gameStatus[parseInt(cell.id)-1] === -1){
            gameStatus[parseInt(cell.id)-1] = isX ? 5 : 0
            cell.innerHTML = isX ? "x" : "o"
            changePlayer()
            verifyWinner()
        }
    })
}

function changePlayer(){
    isX = !isX
    player.innerHTML = isX? "Player: X": "Player: O"
}
function verifyWinner(){
    possibilidades.forEach(possibilidade=>{
        sum = gameStatus[possibilidade[0]-1] + gameStatus[possibilidade[1]-1] + gameStatus[possibilidade[2]-1]
        if(sum === 15){
            alert("X GANHOU!")
            resetGame()
        }
        if(sum === 0){
            alert("O GANHOU!")
            resetGame()
        }
        if(gameStatus.indexOf(-1) === -1){
            alert("EMPATOU!")
            resetGame()
        }
    })
}

function resetGame(){
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        gameStatus[i] = -1
        cell.innerHTML=""
    }
}
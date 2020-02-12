//constants
let grid = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];

//variables
let turn;
let gridColumn;
let gridRow;
let winCount, distance, counter;
let columnCounter;
let gameOver;
let gameCounter;
//Cached Elements
let changeColor = document.querySelectorAll('th.blackhover');
let changeStatement = document.querySelector('h1');

//Event Listeners
document.getElementById('clickables').addEventListener('click', clickGrid);
document.getElementById('btn').addEventListener('click', replay);
document.getElementById('choosered').addEventListener('click', startRed);
document.getElementById('chooseblack').addEventListener('click', startBlack);




//Functions
init();

function init(){
    gameOver = 1;
    for(let i = 0; i < 7; i++){
        changeColor[i].classList = "bluehover";
    }
    gameCounter = 0;
}
function startRed(){
turn = -1;
gameOver = 0;
document.querySelector("div").style.visibility = "hidden";
for(let i = 0; i < 7; i++){
    changeColor[i].classList = "redhover";
}

}
function startBlack(){
turn = 1;
gameOver = 0;
document.querySelector("div").style.visibility = "hidden";
for(let i = 0; i < 7; i++){
    changeColor[i].classList = "blackhover";
}  

}

function clickGrid(){
    idx = parseInt(event.target.id.replace('B',''));
    if(gameOver === 1){
        return;
    }
    if(idx != 0){
        gridColumn = idx / 10;
    }else{
        gridColumn = 0;
    }
    render(idx);
}

function addToGrid(){
    grid[gridColumn][gridRow] = turn;
}

function replay(){
    document.getElementById("btn").style.visibility = "hidden";
    document.querySelector("div").style.visibility = "visible";
    changeStatement.textContent = "Connect 4";
    changeStatement.style.webkitTextStrokeColor = "blue";

    grid = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];

    for(i = 0; i < 70; i += 10){
        for(j = 0; j < 6; j ++){
        idx = i + j;
        fillHole = document.getElementById(idx);
        fillHole.style.backgroundColor = "rgb(240, 214, 13)";
        }
    }
    init();

}



function render(){
    
    for(let i = 5; i >= 0; i--){
        
        if(grid[gridColumn][i] == 0){
            idx += i;
            fillHole = document.getElementById(idx);
            
           if(turn > 0){
                fillHole.style.backgroundColor = "black";
               for(let i = 0; i < 7; i++){
                    changeColor[i].classList = "redhover";
                }
                
            }
            if(turn < 0){
                fillHole.style.backgroundColor = "red";
                for(let i = 0; i < 7; i++){
                    changeColor[i].classList = "blackhover";
                }           
            }
            gridRow = i;
            addToGrid(idx)
            turn *= -1;
            winCondition();
            return;
        }
    }

}
function checkWinner(){
    if(winCount >= 4){
        if(turn > 0){
            changeStatement.textContent = "Red Wins";
            changeStatement.style.webkitTextStrokeColor = "red";
        }
        if(turn < 0){
            changeStatement.textContent = "Black Wins";
            changeStatement.style.webkitTextStrokeColor = "black";
        }
        document.getElementById("btn").style.visibility = "visible";
        gameOver = 1;
        return;
        
    }
}
function turnCounter(){
    gameCounter+= 1;
    if(gameCounter === 42){
        gameOver = 1;
        document.getElementById("btn").style.visibility = "visible"; 
        for(let i = 0; i < 7; i++){
            changeColor[i].classList = "bluehover";
        }
    }
}
function reset(){
    winCount = 1;
    distance = 1;
    counter = 1;
}

function winCondition(){
    
    reset();

    for(let i = 0; i < 2; i++){
        while(((gridColumn + distance) < 7)  && ((gridColumn + distance) >= 0) && (grid[gridColumn][gridRow] === grid[gridColumn + distance][gridRow])){
            winCount += 1;
            distance += counter;
        }
        distance = -1;
        counter *= -1;
    }
     checkWinner();
     reset();

     for(let i = 0; i < 2; i++){
        while(((gridRow + distance) < 6)  && ((gridRow + distance) >= 0) && (grid[gridColumn][gridRow] === grid[gridColumn][gridRow + distance])){
            winCount += 1;
            distance += counter;
        }
        distance = -1;
        counter *= -1;
    }
    checkWinner();
    reset();
    for(let i = 0; i < 2; i++){
        while(((gridRow + distance) < 6)  && ((gridRow + distance) >= 0) && ((gridColumn + distance) < 7)  && ((gridColumn + distance) >= 0) && (grid[gridColumn][gridRow] === grid[gridColumn + distance][gridRow + distance])){
            winCount += 1;
            distance += counter;
        }
        distance = -1;
        counter *= -1;
    }
    checkWinner();
    reset();
    for(let i = 0; i < 2; i++){
        while(((gridRow - distance) < 6)  && ((gridRow - distance) >= 0) && ((gridColumn + distance) < 7)  && ((gridColumn + distance) >= 0) && (grid[gridColumn][gridRow] === grid[gridColumn + distance][gridRow - distance])){
            winCount += 1;
            distance += counter;
        }
        distance = -1;
        counter *= -1;
    }
    checkWinner();
    turnCounter();
}

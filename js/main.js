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
let winSound = new Audio('/Users/alanmccracken/code/connect4/sounds/winSound.m4a');
let playSound = new Audio('/Users/alanmccracken/code/connect4/sounds/play sound.wav');
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
//responds to 'click' on red game peice, starts game as red, renders
//start game text and peices invisible
    function startRed(){
    turn = -1;
    gameOver = 0;
    document.querySelector("div").style.visibility = "hidden";
    for(let i = 0; i < 7; i++){
        changeColor[i].classList = "redhover";
    }
//responds to click on black game peice
}
function startBlack(){
    turn = 1;
    gameOver = 0;
    document.querySelector("div").style.visibility = "hidden";
    for(let i = 0; i < 7; i++){
        changeColor[i].classList = "blackhover";
    }  
}
//pulls a value from click in multiples of 10 coresponding to the column
function clickGrid(){
    idx = parseInt(event.target.id.replace('B',''));
    if(gameOver === 1){
        return;
    }
    //stores column value in a single digit value
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

//resets all values on click of replay button
function replay(){
    winSound.play();
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
    //loop checking if row poition is occupied
    for(let i = 5; i >= 0; i--){
        if(grid[gridColumn][i] == 0){
            //adds single digit row value to 2 digit colum value to access dom
            idx += i;
            fillHole = document.getElementById(idx);  
           if(turn > 0){
                fillHole.style.backgroundColor = "black";
                //loop to change each color of arrows on hover
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
            playSound.play();
            addToGrid(idx)
            turn *= -1;
            winCondition();
            return;
        }
    }

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

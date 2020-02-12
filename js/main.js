//constants
let grid = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];

//variables
let turn;
let gridColumn;
let gridRow;
let winCount, distance, counter;
let columnCounter;
let gameOver;
//Cached Elements
let changeColor = document.querySelectorAll('th.blackhover');
let changeStatement = document.getElementById('winStatement');

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
    //console.log(idx);
    if(idx != 0){
        gridColumn = idx / 10;
    }else{
        gridColumn = 0;
    }
    render(idx);
}

function addToGrid(){
    grid[gridColumn][gridRow] = turn;
    //console.log(grid);
}

function replay(){
    document.getElementById("btn").style.visibility = "hidden";
    document.querySelector("div").style.visibility = "visible";

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
            console.log(fillHole);
            gridRow = i;
            addToGrid(idx)
            //console.log(idx);
            //console.log(gridRow, gridColumn)
            turn *= -1;
            console.log(changeColor);
            
            
            winCondition();
            return;
        }
    }

}
function checkWinner(){
    if(winCount >= 4){
        console.log(turn + " wins");
        gameOver = 1;
        document.getElementById("btn").style.visibility = "visible";
        
    }
}
function reset(){
    winCount = 1;
    distance = 1;
    counter = 1;
}

function winCondition(){
    
    
    reset();
    //console.log(gridColumn + 1);
    //console.log(grid[gridColumn][gridRow]);
    //console.log(grid[gridColumn + 1][gridRow]);
    //console.log(gridColumn, gridRow);

    for(let i = 0; i < 2; i++){
        while(((gridColumn + distance) < 7)  && ((gridColumn + distance) >= 0) && (grid[gridColumn][gridRow] === grid[gridColumn + distance][gridRow])){
            winCount += 1;
            distance += counter;
            console.log(winCount);
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
            console.log(winCount);
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
            console.log(winCount);
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
            console.log(winCount);
        }
        distance = -1;
        counter *= -1;
    }
    checkWinner();
    

 


/*   

    for(let i = 1; (gridRow + i) < 7; i++){
        if((grid[gridrow][gridColumn]) === (grid[gridRow + i][gridColumn])){
            winCount +=1;
            console.log(winCount);
        }
    }
    for(let i = -1; (gridRow + i) >= 0; i--){
        if((grid[gridRow][gridColumn]) === (grid[gridRow + i][gridColumn])){
            winCount +=1;
            console.log(winCount);
        }
    }

*/


  /*  winCount = 0;
    let rowCounter;
    console.log(grid[gridRow][gridColumn]);
    for(let i = 1; i < 4; i ++){
        rowCounter = gridRow + i;
        console.log(rowCounter);
        console.log(grid[rowCounter][gridColumn]);
        if((rowCounter) < 7){
            if((grid[rowCounter][gridColumn]) === (grid[gridRow][gridColumn])){
                winCount += 1;
                console.log(winCount);
            }
        }

    }
    */
    
}

























/*
let grid = [[00, 01, 02, 03, 04, 05, 06], [10,11, 12, 13, 14, 15, 16], [20, 21, 22, 23, 24, 25, 26], [30, 31, 32, 33, 34, 35, 36], [40, 41, 42, 43, 44, 45, 46], [50, 51, 52, 53, 54, 55, 56]];
console.log(grid);
let horz = 0;
let vert = 0;
let a = 6, b = 7, c, i, j, k, l, m, n, o, y, z;

function switchEm(i, j){
    l = i;
    i = j;
    j = l;
}

for(x = 0; x < 4; x ++){
    for(i = 0, m = 2, k = 3; i < a; i++){
        horz = 0;
        if(x === 2){
            
                n = m;
            z = i, y = j;
            l = i - 2;
            if(l < 0){
                l = 0;
            }if(n < 0){
                n = 0;
            }
        }
        if(x === 3){   
            z = i, y = j;
            l = i - 2;
            o = k;
            if(l < 0){
            l = 0;
            }if(o > 5){
            o = 5;
            }
    }
        for(j = 0; j < b; j++){
            if(x === 1){
                l = i;
                i = j;
                j = l;
            }
            if(x === 2){
                z = i, y = j;
                i = n, j = l;
            }
            if(x === 3){
                z = i, y = j;
                i = o, j = l;
            }
                //console.log(l);
                //console.log(n);
            if((x < 2) || ((x === 2) && (n < 6) && ( l < 7))  || ((x === 3) && (o >= 0) && ( l < 7))){
                //console.log(l);
                //console.log(j);
                console.log(grid[i][j]);
                if(horz >= 0){
                    if(grid[i][j] === 1){
                        horz+= 1;
                    }else if(grid[i][j] === -1){
                        horz = -1;
                    }else if(grid[i][j] === 0){
                        horz = 0;
                    }
                }else if(horz <= 0){
                    if(grid[i][j] === -1){
                        horz += -1;
                    }else if(grid[i][j] === 1){
                        horz = 1;
                    }else if(grid[i][j] === 0){
                        horz = 0;
                    }
                }
            }
            console.log(horz)
            if(horz ===4){
            console.log(" 1's wins")
            }
            if(horz ===-4){
            console.log(" -1's wins")
            }   
            
           if(x === 1){
            l = i;
            i = j;
            j = l;
            }if(x === 2){
            console.log(l);
            console.log(n);
            i = z;
            j = y;
            l++, n++;
            }
            if(x === 3){
            console.log(l);
            i = z;
            j = y;
            l++, o--;
            }
            
        }
        m--;
        k++;
        
    }
    if(x === 0){
        a++;
        b--;
    }if(x === 1){
        a--;
    }

}
*/ 

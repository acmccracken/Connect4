let grid = [[00, 01, 02, 003, 04, 05, 06], [10,11, 12, 13, 14, 15, 16], [20, 21, 22, 23, 24, 25, 26], [30, 31, 32, 33, 34, 35, 36], [40, 41, 42, 43, 44, 45, 46], [50, 51, 52, 53, 54, 55, 56]];
console.log(grid);
let horz = 0;
let vert = 0;
let a = 6, b = 7, c, i, j, k, l;

function switchEm(i, j){
    l = i;
    i = j;
    j = l;
}

for(x = 0; x < 2; x ++){
    for(i = 0; i < a; i++){
        horz = 0;
        for(j = 0; j < b; j++){
            if(x === 1){
                l = i;
                i = j;
                j = l;
            }
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
            /*console.log(horz)
            if(horz ===4){
            console.log(" 1's wins")
            }
            if(horz ===-4){
            console.log(" -1's wins")
            }   
            */
           if(x === 1){
            l = i;
            i = j;
            j = l;
            }
        }
    }
    a++;
    b--;
}
/*for(j = 0; j < 7; j++){
  vert = 0;
  for(i = 0; i < 6; i++){
    if(vert >= 0){
      if(grid[i][j] === 1){
        vert+= 1;
      }else if(grid[i][j] === -1){
        vert = -1;
      }else if(grid[i][j] === 0){
        vert = 0;
      }
    }else if(vert <= 0){
      if(grid[i][j] === -1){
        vert += -1;
      }else if(grid[i][j] === 1){
        vert = 1;
      }else if(grid[i][j] === 0){
        vert = 0;
      }
    }
    console.log(vert);
    if(vert ===4){
      console.log(" 1's wins")
    }
    if(vert ===-4){
      console.log(" -1's wins")
    }   

  }
*/
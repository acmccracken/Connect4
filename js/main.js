let grid = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
console.log(grid)
let horz = 0;
let vert = 0;


for(i = 0; i < 6; i++){
  horz = 0;
  for(j = 0; j < 7; j++){
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
    console.log(horz)
    if(horz ===4){
      console.log(" 1's wins")
    }
    if(horz ===-4){
      console.log(" -1's wins")
    }   

  }
}
for(j = 0; j < 7; j++){
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
}
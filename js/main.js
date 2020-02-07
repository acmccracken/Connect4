let grid = [[00, 01, 02, 003, 04, 05, 06], [10,11, 12, 13, 14, 15, 16], [20, 21, 22, 23, 24, 25, 26], [30, 31, 32, 33, 34, 35, 36], [40, 41, 42, 43, 44, 45, 46], [50, 51, 52, 53, 54, 55, 56]];
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
            }if(x === 2){
            //console.log(l);
            //console.log(n);
            i = z;
            j = y;
            l++, n++;
            }
            if(x === 3){
            //console.log(l);
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
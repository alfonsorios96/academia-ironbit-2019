const grid0 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
 ];
 
const grid1 =[
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
];

const makeGroups =()=> {
  const group = [];
  for(let value of grid[0]){
    group.push(new Set());
  }
  //for(let i=0; i<9; i++) {
  //  group.push(new Set());
  //}
  return group;
}

const grid = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
 ];

const locateGrid = (row, column) =>{
  const gridCol = Math.floor(column/3);
  const gridRow = Math.floor(row/3);
  return 3*gridRow + gridCol;
}

const isValid = (value, group) =>{
  if (group.has(value)) {
    return false; 
  }
  group.add(value);
  return true;
}

const validate= (board)=> {
  const rows = makeGroups();
  const cols = makeGroups();
  const grids = makeGroups();
  let countrow=0;
  for (let valuerow of board) {
    let countcolmn=0;
    for (let value of valuerow) {
      if (value === '.') {
        continue;
      }
      if (!(
        isValid(value, rows[countrow]) &&
        isValid(value, cols[countcolmn]) &&
        isValid(value, grids[locateGrid(countrow, countcolmn)])
      )) {
        return false;    
      }
      countcolmn++;
    }
    countrow++;
  }
  return true;
}

validate (grid0);
validate (grid1);
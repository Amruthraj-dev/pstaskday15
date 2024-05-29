//2.
// *
// * *
// * * *
// * *
// *

const prompt=require("prompt-sync")()
let rows=+prompt("Enter no of rows: ")

mid=Math.ceil(rows/2)
for(i=1;i<=mid;i++){
    s=""

    for(j=1;j<=i;j++){
        s=s+"* "
    }
    console.log(s)
  }
for(k=mid+1;k<=rows;k++){
  s=""
  for(l=1;l<=rows-k+1;l++){
    s+="* "
  }
  console.log(s)
}

// 2nd logic with less time complexity reducing by 1 loop
// const prompt = require("prompt-sync")();
// let rows = +prompt("Enter no of rows: ");

// mid = Math.ceil(rows / 2);
// for (i = 1; i <= rows; i++) {
//   s = "";
//   if (i <= mid) {
//     for (j = 1; j <= i; j++) {
//       s = s + "* ";
//     }
//   } 
//   else {
//     for (l = 1; l <= rows - i + 1; l++) {
//       s += "* ";
//     }
//   }
//   console.log(s);
// }
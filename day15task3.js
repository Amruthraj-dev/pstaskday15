// 3)Write a program to print the below pattern based on no of rows
// input: rows: 4
// output:

//    1
//   2 3 
//  4   6 
// 7 8 9 10

const prompt=require("prompt-sync")()
let rows=+prompt("Enter no of rows: ")
c=1
for(i=1;i<=rows;i++){
     s=""
    // c=0
    for(j=1;j<=rows-i;j++){
        s+=" "
    }
    for(k=1;k<=i;k++){
        if(i==k||i==rows||k==1){
          
        s+=c+" "
        
        }
        else{
        
            s+="  "
        }
        c++
    }
    console.log(s)
}
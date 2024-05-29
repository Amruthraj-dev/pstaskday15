//1.
// * * * * *
//  *     *
//   *   *
//    * *
//     *
const prompt=require("prompt-sync")()
let rows=+prompt("Enter no of rows: ")
for(i=1;i<=rows;i++){
     s=""
    for(j=1;j<=i;j++){
        s+=" "
    }
    for(k=1;k<=rows-i+1;k++){
        if(i==1||i+k==rows+1||k==1){
        s+="* "
        }
        else{
            s+="  "
        }
    }
    console.log(s)
}
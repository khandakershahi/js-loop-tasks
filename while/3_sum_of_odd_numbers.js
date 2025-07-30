

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
console.log('subtask 1');

let n = 81;
let sum = 0;
while(n <= 131){
    if(n % 2 !== 0){
        console.log(n);
        sum = sum + n;
    }
    n++;
  
    
}
console.log('sum of all the odd numbers from 81 to 131 is ' + sum);


/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

console.log('subtask 2');


let i = 206;
let total = 0;
while(i <= 311){
    if(i % 2 === 0){
        console.log(i);
        total = total + i;
    }
    i++;
   
    
}
console.log('sum of all the even numbers from 206 to 311 is ' + total);
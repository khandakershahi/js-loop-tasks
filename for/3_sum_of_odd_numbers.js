

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */

console.log('subtask-1');
let sum = 0;
for(let i = 91; i <= 129; i++){
    if(i % 2 !== 0){
        console.log(i);
        sum = sum + i;
      
    }
}

console.log('sum of all the odd numbers from 91 to 129 is ' + sum);

/***
Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

console.log('subtask-2');
let total = 0
for(let n = 51; n <= 85; n++){
    if(n % 2 === 0){
        console.log(n);
        total = total + n;
    }
}

console.log('sum of all the even numbers from 51 to 85 is ' + total);
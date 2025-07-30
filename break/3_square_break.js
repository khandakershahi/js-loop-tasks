/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for(let i = 1; i <= 100; i++) {
    // try all values of j from 1 up to i
    let isSquare = false;

    for(let j = 2; j <= i; j++) {
        if(j * j === i) {
            isSquare = true;
            break;
        }
    }

    if(isSquare) {
        console.log('First square number found: ' + i);
        break;
    }

    console.log(i);
}


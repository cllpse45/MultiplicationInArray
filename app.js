
let table = [];


for (let i=0; i<=10; i++){
    
    let box = []

    for (let k=0; k<=10; k++){

        box.push(i*k); // adds elements to "box" array

    }

    table[i] = box; // adds elements to "table" array

}

console.log(table[2][5]); // Write two numbers to calculate --> 2 * 5

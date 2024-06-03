console.log("Bubble Sort")
const arr = [23, 54, 47, 36, 15, 92, 83, 32];
console.log("Inicial: " , arr);

for(let i = 0; i < arr.length-1; i++) {
    for (let j = 0; j < arr.length-i-1; j++) {
        if (arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
    }
    console.log(`${i}:`, arr);    
}

console.log("Final: " , arr);


console.log("Bubble Sort otimizado")
const arr2 = [23, 54, 47, 36, 15, 92, 83, 32];
console.log("Inicial: " , arr2);

let troca = true;
for(let i = 0; i < arr2.length-1 && troca; i++) {
    troca = false;
    for (let j = 0; j < arr2.length-i-1; j++) {
        if (arr2[j] > arr2[j+1]) {
            [arr2[j], arr2[j+1]] = [arr2[j+1], arr2[j]];
            troca = true;
        }
    }
    console.log(`${i}:`, arr2);    
}

console.log("Final: " , arr2);
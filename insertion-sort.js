console.log("Insertion Sort")
const arr = [23, 54, 47, 36, 15, 92, 83, 32];
console.log("Inicial: " , arr);

let elected = 0, j;

for (let i = 1; i < arr.length; i++) {
    elected = arr[i]
    j = i-1;
    while (j >= 0 && arr[j] > elected) {
        arr[j+1] = arr[j];
        j = j-1;
    }
    arr[j+1] = elected;
    console.log(arr)
}
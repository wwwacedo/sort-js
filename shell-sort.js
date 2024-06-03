console.log("Shell Sort")
const arr = [23, 54, 47, 36, 15, 92, 83, 32];
console.log("Inicial: " , arr);

let cont1, cont2, cont3, dist, elem, n_increm = 2;
const incre = [3, 1]

for (cont1 = 0; cont1 < n_increm; cont1++) {
    dist = incre[cont1];
    for (cont2 = dist; cont2 < arr.length; cont2++) {
        elem = arr[cont2];
        for (cont3 = cont2-dist; (cont3 >= 0) && (elem < arr[cont3]); cont3 = cont3 - dist) {
            arr[cont3 + dist] = arr[cont3];
        }
        arr[cont3+dist] = elem;
    }
}

console.log("Final: " , arr);



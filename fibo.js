function fibs(n) {
    let arr = [];
    let x = 0;
    let y = 1;
    let z;
    for (let i = 0; i < n; i++) {
        arr.push(x);
        z = x;
        x = y;
        y = z + y;
    }
    return arr;
}

console.log(fibs(8));

function fibsRec(n) {
    if (n === 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    let arr = fibsRec(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
}

console.log(fibsRec(8));
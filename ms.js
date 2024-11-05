function mergeSort(arr) {
    if (arr.length == 1) return arr;

    let mid = arr.length / 2;
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let arr = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr.push(left[i]);
            i++;
        } else {
            arr.push(right[j]);
            j++;
        }
    }
    return [...arr, ...left.slice(i), ...right.slice(j)];
}

console.log(mergeSort([3, 2, 99, 80, 201, 333, 55]));
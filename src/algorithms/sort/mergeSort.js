import { defaultCompare, Compare } from "../../util.js";

function mergeSort(array, compareFn = defaultCompare) {
    if (array.length > 1) { // {1}
        const { length } = array;
        const middle = Math.floor(length / 2);
        const left = mergeSort(array.slice(0, middle), compareFn);
        const right = mergeSort(array.slice(middle, length), compareFn); // {4}
        array = merge(left, right, compareFn); // {5}
    }
    return array;
}


function merge(left, right, compareFn) {
    let i = 0; // {6}
    let j = 0;
    const result = [];
    while (i < left.length && j < right.length) { // {7}
        result.push(
            compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]); // {8}
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j)); // {9} 
}

let array = [5, 2, 4, 1, 3]
let newArray = mergeSort(array)
newArray.toString()
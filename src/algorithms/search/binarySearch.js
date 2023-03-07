import { defaultCompare, Compare } from '../../util.js'
const DOES_NOT_EXIST = -1
function lesserOrEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}
function binarySearch(array, value, compareFn = defaultCompare) {
    let low = 0;
    let high = array.length - 1; // {3}
    while (lesserOrEquals(low, high, compareFn)) { // {4}
        const mid = Math.floor((low + high) / 2); // {5}
        const element = array[mid]; // {6}
        if (compareFn(element, value) === Compare.LESS_THAN) { // {7}
            low = mid + 1; // {8}
        } else if (compareFn(element, value) === Compare.BIGGER_THAN) { // {9}
            high = mid - 1; // {10}
        } else {
            return mid; // {11}
        }
    }
    return DOES_NOT_EXIST; // {12}
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
binarySearch(arr, 8)
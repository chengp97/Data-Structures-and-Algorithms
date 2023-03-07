import { defaultCompare, Compare, swap } from '../../util.js'
console.log(defaultCompare)
let count = 0
function bubbleSort(array, compareFn = defaultCompare) {
    const { length } = array;
    for (let index = 0; index < length; index++) {
        for (let j = 0; j < length - 1; j++) { // {3}
            count += 1
            if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) { // {4}
                swap(array, j, j + 1); // {5}
            }
        }
    }
}

let arr = [4, 3, 2, 1]
bubbleSort(arr)


function modifiedBubbleSort(array, compareFn = defaultCompare) {
    const { length } = array;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) { // {1}
            if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}
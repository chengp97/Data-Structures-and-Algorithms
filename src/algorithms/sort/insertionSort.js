import { defaultCompare, Compare } from '../../util.js'
function insertionSort(array, compareFn = defaultCompare) {
    const { length } = array; // {1}
    let temp;
    for (let i = 1; i < length; i++) { // {2}
        let j = i; // {3}
        temp = array[i]; // {4}
        while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) { // {5}
            array[j] = array[j - 1]; // {6}
            j--;
        }
        array[j] = temp; // {7}
    }
    return array;
};

let arr = [4, 3, 2, 1]
insertionSort(arr)
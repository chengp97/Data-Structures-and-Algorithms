import { defaultCompare } from '../../util'
function quickSort(array, compareFn = defaultCompare) {
    return quick(array, 0, array.length - 1, compareFn);
};


function quick(array, left, right, compareFn) {
    let index; // {1}
    if (array.length > 1) { // {2}
        index = partition(array, left, right, compareFn); // {3}
        if (left < index - 1) { // {4}
            quick(array, left, index - 1, compareFn); // {5}
        }
        if (index < right) { // {6}
            quick(array, index, right, compareFn); // {7}
        }
    }
    return array;
};

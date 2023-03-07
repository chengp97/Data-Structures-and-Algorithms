import { defaultCompare, swap, Compare } from "../../util.js";

function selectionSort(array, compareFn = defaultCompare) {
    const { length } = array;// {1}
    let indexMin;
    for (let index = 0; index < length - 1; index++) { // {2}
        indexMin = index // {3}
        for (let j = index; j < length; j++) { // {4}
            if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) { // {5}
                indexMin = j // {6}
            }
        }
        if (index !== indexMin) { // {7}
            swap(array, index, indexMin);
        }
    }
    return array
}


let arr = [4, 3, 2, 1]
selectionSort(arr)
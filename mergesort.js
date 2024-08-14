//Implement the merge sort algorithm to sort an array.

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
}

const array = [38, 27, 43, 3, 9, 82, 10];
console.log("Original array:", array);
const sortedArray = mergeSort(array);
console.log("Sorted array:", sortedArray);

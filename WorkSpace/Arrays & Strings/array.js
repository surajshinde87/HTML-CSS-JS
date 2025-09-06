// Write a program to find the largest element in an array.
function findLargestElement(arr) {
    if (arr.length === 0) {
        return null; 
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }   
    }
    return largest;
}

let array1 = [3, 5, 7, 2, 8];
console.log("Largest element in the array:", findLargestElement(array1));

// Reverse an array without using the built-in reverse method.
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
let array2 = [1, 2, 3, 4, 5];
console.log("Reversed array:", reverseArray(array2));


// FInd the sum of all elements in an array.
function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let array3 = [1, 2, 3, 4, 5];
console.log("Sum of all elements in the array:", sumOfArray(array3));

// Remove duplicates from an array.
function removeDuplicates(arr) {
    let uniqueElements = [];
    let seen = new Set();
    for (let element of arr) {
        if (!seen.has(element)) {
            seen.add(element);
            uniqueElements.push(element);
        }
    }
    return uniqueElements;
}

let array4 = [1, 2, 2, 3, 4, 4, 5];
console.log("Array after removing duplicates:", removeDuplicates(array4));


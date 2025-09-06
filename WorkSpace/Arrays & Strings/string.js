// Reverse a string without using the built-in reverse method.
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
let string1 = "Hello, World!";
console.log("Reversed string:", reverseString(string1));


// Check if a string is a palindrome.
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

let string2 = "race";
console.log(string2 + " is a palindrome:", isPalindrome(string2));


// Count the number of vowels and consonants in a string.
function countVowelsAndConsonants(str) {
    let vowels = "aeiouAEIOU";
    let vowelCount = 0;
    let consonantCount = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
            consonantCount++;
        }
    }
    return { vowelCount, consonantCount };
}
let string3 = "Hello, World!";
let counts = countVowelsAndConsonants(string3);
console.log("Vowels:", counts.vowelCount, "Consonants:", counts.consonantCount);


// Find the first non-repeating character in a string.
function firstNonRepeatingCharacter(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}
let string4 = "swiss";
console.log("First non-repeating character in " + string4 + " is:", firstNonRepeatingCharacter(string4));

// Remove duplicates from a string.
function removeDuplicates(str) {
    let seen = new Set();
    let result = "";
    for (let char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    return result;
}

let string5 = "programming";
console.log("String after removing duplicates:", removeDuplicates(string5));

// Check if two strings are equals are not.
function areStringsEqual(str1, str2) {
    return str1 === str2;
}

let string6a = "hello";
let string6b = "hello";
console.log("Are the strings equal?", areStringsEqual(string6a, string6b));


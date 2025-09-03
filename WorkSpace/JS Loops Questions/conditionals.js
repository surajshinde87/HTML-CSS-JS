// #  Write a JavaScript program to find the largest of three numbers entered by the user using if-else statements.
let num1 = prompt("Enter first number:");
num1 = parseFloat(num1);
let num2 = prompt("Enter second number:");
num2 = parseFloat(num2);
let num3 = prompt("Enter third number:");   
num3 = parseFloat(num3);
let largest;
if (num1 >= num2 && num1 >= num3) {
  largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
  largest = num2;
} else {
  largest = num3;
}
console.log(
  "The largest number among " +
    num1 +
    ", " +
    num2 +
    ", and " +
    num3 +
    " is: " +
    largest
);

// #  Write a JavaScript program to check whether a year is a leap year or not using if-else.
let year = 2020;
let isLeapYear;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  isLeapYear = true;
} else {
  isLeapYear = false;
}
console.log(year + " is a leap year: " + isLeapYear);

// #  Write a JavaScript program to check whether a character entered by the user is a vowel or a consonant using if-else.
let char = prompt("Enter a single alphabet character:");
char = char.toLowerCase();
let isVowel;
if ("AEIOUaeiou".includes(char)) {
  isVowel = true;
} else {
  isVowel = false;
}
console.log(char + " is a vowel: " + isVowel);

// #  Write a JavaScript program to check whether a number entered by the user is positive, negative, or zero using if-else.
let number = prompt("Enter a number:");
number = parseFloat(number);
let numberType;
if (number > 0) {
  numberType = "positive";
} else if (number < 0) {
  numberType = "negative";
} else {
  numberType = "zero";
}

console.log(number + " is a " + numberType + " number.");
// #  Write a JavaScript program to find the grade of a student based on marks entered by the user. Use the following conditions:
//                             Marks > 90: Grade A
//                             Marks > 75: Grade B
//                             Marks > 50: Grade C
//                             Marks <= 50: Grade D

let marks = prompt("Enter the marks:");
marks = parseFloat(marks);
let grade;
if (marks > 90) {
  grade = "A";
} else if (marks > 75) {
  grade = "B";
} else if (marks > 50) {
  grade = "C";
} else {
  grade = "D";
}
console.log("The grade for marks " + marks + " is: " + grade);

// #  Write a JavaScript program to check whether a given string is a palindrome using if-else statements.
let str = "racecar";
let reversedStr = str.split("").reverse().join("");
let isPalindrome;
if (str === reversedStr) {
  isPalindrome = true;
} else {
  isPalindrome = false;
}
console.log(str + " is a palindrome: " + isPalindrome);

// #  Write a JavaScript program to check if a number entered by the user is divisible by both 3 and 7 using if-else.


let num = prompt("Enter a number:");
num = parseInt(num);
let isDivisible;
if (num % 3 === 0 && num % 7 === 0) {
  isDivisible = true;
} else {
  isDivisible = false;
}
console.log(num + " is divisible by both 3 and 7: " + isDivisible);

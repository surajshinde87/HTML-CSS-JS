
        //    #  Write a JavaScript program to print the first 10 natural numbers using a while loop.
         let num = 1;
             while (num <= 10) {
                 console.log(num);
                 num++;
             }

        //    #  Write a JavaScript program to calculate the sum of all numbers from 1 to 100 using a for loop.
        let sum = 0;
        for (let i = 1; i <= 100; i++) {
            sum += i;
        }
        console.log("Sum of numbers from 1 to 100 is: " + sum);

        //    #  Write a JavaScript program to print all even numbers between 1 and 50 using a for loop.
        console.log("Even numbers between 1 and 50:");
        for (let i = 1; i <= 50; i++) {
            if (i % 2 === 0) {
                console.log(i);
            }
        }
        //    #  Write a JavaScript program to find the factorial of a number entered by the user using a while loop.

        let number = prompt("Enter a number to find its factorial:");
        number = parseInt(number);
        let factorial = 1;
        let n = number;
        while (n > 1) {
            factorial *= n;
            n--;
        }
        console.log("Factorial of " + number + " is: " + factorial);

        //    #  Write a JavaScript program to reverse a number using a while loop.
        let originalNumber = 12345;
        let reversedNumber = 0;
        let temp = originalNumber;
        while (temp > 0) {
            let digit = temp % 10;
            reversedNumber = reversedNumber * 10 + digit;
            temp = Math.floor(temp / 10);
        }
        console.log("Reversed number of " + originalNumber + " is: " + reversedNumber);

        //    #  Write a JavaScript program to print the Fibonacci series up to a certain number entered by the user using a for loop.

        let fibLimit = prompt("Enter the limit for Fibonacci series:");
        fibLimit = parseInt(fibLimit);
        let a = 0, b = 1;
        console.log("Fibonacci series up to " + fibLimit + ":");
        for (let i = 0; a <= fibLimit; i++) {
            console.log(a);
            let next = a + b;
            a = b;
            b = next;
        }

        //    #  Write a JavaScript program to check whether a number is prime or not using a for loop.
        let primeCheck = 2;
        let isPrime = true;
        if (primeCheck <= 1) {
            isPrime = false;
        } else {
            for (let i = 2; i <= Math.sqrt(primeCheck); i++) {
                if (primeCheck % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        console.log(primeCheck + " is prime: " + isPrime);
        
        //    #  Write a JavaScript program to count the number of digits in a given number using a while loop.
        let countNumber = 123456;
        let count = 0;
        let tempCount = countNumber;
        while (tempCount > 0) {
            tempCount = Math.floor(tempCount / 10);
            count++;
        }
        console.log("Number of digits in " + countNumber + " is: " + count);

        //    #  Write a JavaScript program to calculate the power of a number using a for loop.
        let base = 2;
        let exponent = 5;
        let power = 1;
        for (let i = 1; i <= exponent; i++) {
            power *= base;
        }
        console.log(base + " raised to the power of " + exponent + " is: " + power);

        //    #  Write a JavaScript program that prints all prime numbers between 1 and 100 using nested for loops.
        console.log("Prime numbers between 1 and 100:");
        for (let num = 2; num <= 100; num++) {
            let isPrime = true;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                console.log(num);
            }
        }

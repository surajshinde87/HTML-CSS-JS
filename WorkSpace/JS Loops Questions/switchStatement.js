
            // #  Write a JavaScript program that takes a number from 1 to 12 and prints the corresponding month using a switch statement.
            let monthNumber = prompt("Enter a number between 1 and 12:");
            monthNumber = parseInt(monthNumber);
            let monthName;
            switch (monthNumber) {
                case 1:
                    monthName = "January";
                    break;
                case 2:
                    monthName = "February";
                    break;
                case 3:
                    monthName = "March";
                    break;
                case 4:
                    monthName = "April";
                    break;
                case 5:
                    monthName = "May";
                    break;
                case 6:
                    monthName = "June";
                    break;
                case 7:
                    monthName = "July";
                    break;
                case 8:
                    monthName = "August";
                    break;
                case 9:
                    monthName = "September";
                    break;
                case 10:
                    monthName = "October";
                    break;
                case 11:
                    monthName = "November";
                    break;
                case 12:
                    monthName = "December";
                    break;
                default:
                    monthName = "Invalid month number";
            }
            console.log("The month is: " + monthName);

            // #  Write a JavaScript program to perform basic arithmetic operations (addition, subtraction, multiplication, division) based on the user's choice using a switch         
            //      statement.           
            let num1 = prompt("Enter the first number:");
            num1 = parseFloat(num1);
            let num2 = prompt("Enter the second number:");
            num2 = parseFloat(num2);
            let operation = prompt("Enter the operation (+, -, *, /):");
            let result;
            switch (operation) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    if (num2 !== 0) {
                        result = num1 / num2;
                    }
                    else {
                        result = "Error: Division by zero";
                    }
                    break;
                default:
                    result = "Invalid operation";
            }
            console.log("The result is: " + result);

            // #  Write a JavaScript program that takes a grade (A, B, C, D, F) as input and prints a description using a switch statement:
            //                                          A: Excellent
            //                                          B: Good
            //                                          C: Average
            //                                          D: Poor
            //                                          F: Fail
            let grade = prompt("Enter a grade (A, B, C, D, F):");
            grade = grade.toUpperCase();
            let description;
            switch (grade) {
                case "A":
                    description = "Excellent";
                    break;
                case "B":
                    description = "Good";
                    break;
                case "C":
                    description = "Average";
                    break;
                case "D":
                    description = "Poor";
                    break;
                case "F":
                    description = "Fail";
                    break;
                default:
                    description = "Invalid grade";
            }
            console.log("The description for grade " + grade + " is: " + description);
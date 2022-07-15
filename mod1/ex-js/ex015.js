let num1 = 4000000, num2 = 5000, num3 = 900;

if (num1 >= num2 && num1 >= num3) {
    console.log(`${num1} is the better`);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`${num2} is the better`);
} else if (num3 >= num2 && num3 >= num1) {
    console.log(`${num3} is the better`);
}

if (num1 <= num2 && num1 <= num3) {
    console.log(`${num1} is the lower`);
} else if (num2 <= num1 && num2 <= num3) {
    console.log(`${num2} is the lower`);
} else if (num3 <= num2 && num3 <= num1) {
    console.log(`${num3} is the lower`);
}

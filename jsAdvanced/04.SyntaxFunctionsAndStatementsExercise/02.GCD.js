function gcd(num1, num2) {
    let divisor = 0;
    for (let i = 0; i <= num1 && i <= num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            divisor = i;
        }
    }
    console.log(divisor);
}
gcd(15, 5)
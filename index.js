// Question 106
function LeapYear(num) {
    // if(num%4==0){
    //     console.log(`${num} is a leap year`);
    // }
    // else{
    //     console.log(`${num} is not a leap year`);
    // }
    return (num % 4 === 0 && num % 100 !== 0) || num % 400 === 0;
}
console.log(LeapYear(1900));
console.log(LeapYear(2020));
// Question 107
function NumberDivisibleBoth2and3(num) {
    if (num % 2 === 0 && num % 3 === 0) {
        console.log(`${num} is also divisible on 2,3 and 6.`);
    }
    else {
        console.log(`${num} is not divisible on 2,3 and 6.`);
    }
}
NumberDivisibleBoth2and3(6);
NumberDivisibleBoth2and3(9);
// Question 108
function CheckIdenticalString(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(CheckIdenticalString("Hello", "hello"));
console.log(CheckIdenticalString("word", "World"));
export {};
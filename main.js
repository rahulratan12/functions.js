// adding of two numbers
function sum(num1,num2){
    add = num1+num2
    return add;
}
console.log(sum(10,20))

// multiplication of two numbers
function multiply(num3,num4){
    return num3*num4
}
console.log(multiply(5,8))

// Factorial of a number
function numFactorial(number){
    if (number<0){
        return "Error"
    }
    if (number==0){
        return 1
    }
    else{
        let factorial = 1
        while(number>1){
            factorial = factorial*number
            number=number-1
        }
        return factorial
    }
}
console.log(numFactorial(6))

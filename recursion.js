/*Add the natural numbers up to N recursively.*/

function addUntilN(n){
    return n==0? 0 : n + addUntilN(n-1);
}

console.log(addUntilN(6));

/*Factorial of a number*/


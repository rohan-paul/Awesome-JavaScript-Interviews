//Write a program which determines the largest prime palindrome less than 1000.

function isPrime (number)
{
    if (number < 2) return false;

    //An integer is prime if it is not divisible by any prime less than or equal to its square root

    var q = Math.floor(Math.sqrt(number));

    for (var i = 2; i <= q; i++)
    {
        if (number % i == 0)
        {
            return false;
        }
    }

    return true;
}

var isPalindrome = function (number) {
    var numToString = number.toString();
    var checkPalindrome = numToString.split('').reverse().join('');

    if (numToString === checkPalindrome) {
        return true;
    }else {
        return false;
    }
};

for (var i = 1000; true; i--){
    if (isPalindrome(i) && isPrime(i)){
        console.log(i);
        break;
    }
}
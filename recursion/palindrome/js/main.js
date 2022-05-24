// use recursion to determine if a given word is a palindrome

function palindrome(input){
    // base case - if input is 0 or 1 characters
    if(input.length < 2){
        return true;
    }
    // recursive call - compare first and last char of substring(input) and return true or false
    if(input[0] == input[input.length-1]){
        return palindrome(input.substring(1,input.length-1));
    }else{
        return false;
    }
}
console.log(palindrome('kayak'));
console.log(palindrome('sass'));

// Example: input = 'racecar'
//  palindrome('racecar') -> length !< 2, continue. -> input[0] == input[length-1]? -> 'r' = 'r', continue. -> palindrome(substring(1,length-1))
//      palindrome('aceca') -> length !< 2, continue. -> 'a' = 'a', continue. -> palindrome(substring(1,length-1))
//          palindrome('cec') -> length !< 2, continue. -> 'c' == 'c', continue. -> palindrome(substring(1,length-1))
//              palindrome('e') -> length < 2, return true

// Example: input = 'sass'
//  palindrome('sass') -> length !< 2, continue. -> input[0] == input[length-1]? -> 's' = 's', continue. -> palindrome(substring(1,length-1))
//      palindrome('as') -> length !< 2, continue. -> input[0] == input[length-1]? -> 'a' != 's', return false;
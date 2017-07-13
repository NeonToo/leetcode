/*
Determine whether an integer is a palindrome. Do this without extra space.
*/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var newX = x;
    var result = 0;
    
    if(newX < 0)
        return false;
    
    while(newX != 0) {
        result = result * 10 + newX % 10;
        newX = Math.floor(newX / 10);
    }

    return result == x;
};
/*
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x < 0) {
        return -reverse(-x);
    }

    var result = 0;
    while(x > 0) {
        if(result >= 214748365) {
            return 0;
        }

        var rail = x % 10;
        result = result * 10 + rail;
        x = Math.floor(x / 10);
    }

    return result;
};
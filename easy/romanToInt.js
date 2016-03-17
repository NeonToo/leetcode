/*
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
*/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    };
    var len = s.length,
        s = s.toUpperCase(),
        result = map[s.charAt(len - 1)];
    
    for(var i = 0; i < len - 1; i++) {
        var digit = map[s.charAt(i)];
        if(typeof (digit) != "undefined") {
            if(digit >= map[s.charAt(i + 1)]) {
                result += digit;
            } else {
                result -= digit;
            }
        } else {
            return false;
        }
    }
    
    return result;
};
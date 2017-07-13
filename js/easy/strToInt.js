/*
Implement atoi to convert a string to an integer.
*/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var num = 0,
        sign = 1,
        str = str.trim(),
        len = str.length,
        i = 0;

    if(len == 0) {
        return 0;
    }

    if(str.charAt(i) == "+" || str.charAt(i) == "-") {
        sign = str.charAt(0) == "+" ? 1 : -1;
        i++;
    }

    while(i < len && str.charAt(i) != " " && !isNaN(str.charAt(i))) {
        num = num * 10 + parseInt(str.charAt(i++));

        if(num > 2147483647) {
            return sign > 0 ? 2147483647 * sign : 2147483648 * sign;
        }
    }

    return num * sign;
};
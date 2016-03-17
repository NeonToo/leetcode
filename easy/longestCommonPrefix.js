/*
Write a function to find the longest common prefix string amongst an array of strings.
*/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0)
        return "";
    
    var pre = strs[0];
    for(var i = 0, len = strs.length; i < len; i++) {
        while(strs[i].indexOf(pre) != 0) {
            pre = pre.substr(0, pre.length - 1);
        }
    }
    
    return pre;
};
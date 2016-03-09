/*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
Example:
    Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 // my solution (注意undefined的引号，用typeof判断可以避免为null时出现的错误)
var twoSum = function(nums, target) {
    var result = [],
        exist = {};
        
    for(var i = 0, len = nums.length; i < len; i++) {
        var want = exist[target - nums[i]];
        if (typeof (want) !== 'undefined') {
            result.push(want);
            result.push(i);
        }
        exist[nums[i]] = i;
    }
    
    return result;
};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    for(let i = 0; i < nums.length; i++) {
    	const val = nums[i];
        const oldVal = nums[i - 1] || 0
    	nums[i] = oldVal+val
    }
    return nums;
};
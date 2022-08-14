/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let transformed = [];
    for(let i = 0; i < nums.length; i++) {
    	const val = nums[i];
        const oldVal = transformed[i - 1] || 0
    	transformed.push(oldVal+val)
    }
    return transformed
};


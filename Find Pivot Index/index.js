var pivotIndex = function(nums) {
    const total = nums.reduce((acc, curr) => acc + curr, 0)
    let leftSum = 0;
    for(let i = 0; i < nums.length; i++) {
        if(leftSum === total - leftSum - nums[i]) return i;
        leftSum += nums[i]
    }
    return -1;
};

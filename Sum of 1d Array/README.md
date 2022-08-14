Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.


Example 1:
<pre>
<code>
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
</pre>
</code>

Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].


Example 2:
<pre>
<code>
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
</code>
</pre>


Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

Example 3:
<pre>
<code>
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
</pre>
</code>

Constraints:
<pre>
<code>
1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6
</pre>
</code>
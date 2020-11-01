Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

**Example:**

Given an input string of:
<pre>
<code>
apples, pears # and bananas
grapes
bananas !apples
</code>
</pre>
The output expected would be:
<pre>
<code>
apples, pears
grapes
bananas
</code>
</pre>
The code would be called like so:
<pre>
<code>
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
</code>
</pre>
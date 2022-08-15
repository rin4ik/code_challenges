Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 

<b>Example 1:</b>
<pre>
<code>
Input: s = "egg", t = "add"
Output: true
</pre>
</code>
<b>Example 2:</b>
<pre>
<code>
Input: s = "foo", t = "bar"
Output: false
</pre>
</code>
<b>Example 3:</b>
<pre>
<code>
Input: s = "paper", t = "title"
Output: true
</pre>
</code>
<b>Constraints:</b>
<pre>
<code>
1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
</pre>
</code>
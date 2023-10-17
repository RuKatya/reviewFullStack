Problem condition:
two arrays of string are supplied as input,
it is necessary to return true if the two arrays represent the same string,
false otherwise.

By representing the same string, it is meant that after concatenating all fragments of the lists,
the two resulting strings will be identical.

Example:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true

Explanation:
word1: "ab" + "c" -> "abc"
word2: "a" + "bc" -> "abc"

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false
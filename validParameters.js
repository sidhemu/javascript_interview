//https://leetcode.com/problems/valid-parentheses/

/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

*/


let isValid = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        }else{
            let prevVal = stack.pop();

            if(prevVal === "(" && char !== ")") return false;
            if(prevVal === "{" && char !== "}") return false;
            if(prevVal === "[" && char !== "]") return false;
            if(prevVal === undefined) return false;
        }
    }

    return stack.length === 0;


}



const s = "()";
const s2 = "()[]{}";
const s3 = "(]";
const s4 = "]]";
const s5 = "{}{]}";

console.log(isValid(s));
console.log(isValid(s2));
console.log(isValid(s3));
console.log(isValid(s4));
console.log(isValid(s5));
export default function isPalindrome(text, ignoreCase = true) {
    return new RegExp(text, ignoreCase ? "gi" : "g").test(text.split("").reverse().join(""));
}

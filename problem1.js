function checkPalindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    // console.log(str[j]);
    // console.log(str[i]);
    if (str[i] != str[j]) {
      return "uwu";
    }
    j--;
  }
  return "String is a palindrome";
}

const string1 = "racecar";
const string2 = "hello world";
console.log(checkPalindrome(string1));
console.log(checkPalindrome(string2));
// const string1 = "Rea";
// const string2 = "LYN";
// console.log(isPalindrome(string1));
// console.log(isPalindrome(string2));

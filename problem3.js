function multiplyString(str, n) {
  n = n > 0 ? n : 1;

  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}

let answer = multiplyString("Hello", 3);
console.log("HelloHelloHello");

answer = multiplyString("World", 0);
console.log("World");

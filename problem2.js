function checkOdd(array) {
  // console.log("array length is", array.length);
  for (let i = 0; i < array.length; i++) {
    // console.log(i, array[i]);
    // console.log("condition this is not equal to 0", array[i] % 2);
    if (array[i] % 2 !== 0) {
      return false; // If an odd number is found, return true
    }
  }
  return true; // If no odd number is found, return false
}

console.log(checkOdd([2, 4, 6, 8]));

console.log(checkOdd([10, 11, 14, 16]));

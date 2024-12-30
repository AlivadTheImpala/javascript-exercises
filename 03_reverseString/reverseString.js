const reverseString = function (string) {
  let reversedString = string.split("").reverse().join("");
  return reversedString;
};
//Ill have to use a string method to extract the input string into an array of its characters. split()
//I can save this in its own variable. arrays have the reverse() method to change the order of the array.
// Do not edit below this line
module.exports = reverseString;

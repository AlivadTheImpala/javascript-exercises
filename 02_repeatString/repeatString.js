const repeatString = function (string, repeatNum) {
  let repeatedString = "";
  if (repeatNum < 0) {
    return "ERROR";
  }

  for (let i = 0; i < repeatNum; i++) {
    repeatedString += string;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;

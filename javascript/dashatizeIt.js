// https://www.codewars.com/kata/dashatize-it/train/javascript

// Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5

//
// first attempt
//
function dashatize(num) {
  if (!Number.isInteger(num)) {
    return 'NaN';
  }
  result = '';
  num = num.toString();
  if (num.length == 1) {
    return num;
  } else if(num.length == 2 && num[0] == '-' ){
    return num[1];
  } else {
    if (num[0] != '-') {
      result += (num[0]);
    }
    if (result && result[0] % 2 != 0) {
      result += '-';
    }
    for (let i = 1; i < num.length-1; i ++) {
      if (num[i] % 2 != 0 ){
        if (result[result.length-1] == '-') {
          result += (num[i] + '-');
        } else {
          result += ('-' + (num[i]) + '-');
        }
      } else {
        result += (num[i]);
      }
    }

    if (num[num.length-1] % 2 != 0) {
      if (result[result.length-1] == '-'){
        result += num[num.length-1];  
      } else {
        result += '-' + num[num.length-1];
      }
    } else {
      result += num[num.length-1];
    }
  }
  return result;
};


dashatize(274); // "2-7-4", "Should return 2-7-4"
dashatize(5311); // "5-3-1-1", "Should return 5-3-1-1"
dashatize(86320); // "86-3-20", "Should return 86-3-20"
dashatize(974302); // "9-7-4-3-02", "Should return 9-7-4-3-02"


dashatize(NaN); // "NaN", "Should return NaN"
dashatize(0); // "0", "Should return 0"
dashatize(-1); // "1", "Should return 1"
dashatize(-28369); // "28-3-6-9", "Should return 28-3-6-9"


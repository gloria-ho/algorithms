// https://www.codewars.com/kata/59df2f8f08c6cec835000012

// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

// Notes
// You can see another examples in the "Sample tests".



// first attempt
function meeting(s){
  let upper = s.toUpperCase();
  let arr = upper.split(';');
  
  let newArr = [];
  for (x of arr) {
    newArr.push(x.split(':'));
  }

  let newList = [];
  for (x of newArr) {
    newList.push(x.reverse());
  }

  let sortedNewList = newList.sort();

  let sortedNames = [];
  for (x of sortedNewList) {
    let name = x.join(', ');
    sortedNames.push(name);
  }

  let result = [];
  for (x of sortedNames) {
    result.push('(' + x + ')');
  }

  return result.join('')
}

// second attempt
function meeting(s){
  let upper = s.toUpperCase();
  let arr = upper.split(';');
  let names = arr.map(friend => {
    let firstN = friend.split(':');
    let lastN = firstN.reverse().join(', ');
    let name = ('(' + lastN + ')');
    return name;
  })
  return names.sort().join('');
}


let s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"

console.log(meeting(s)); // "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
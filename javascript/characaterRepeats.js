// Character Repeats
// Write a function that takes in two parameters: a paragraph of text and a letter, and returns the number of times that letter appears in the paragraph.

function characterRepeats(paragraph, letter) {
  let target = new RegExp(letter,'g');
  return (paragraph.match(target) || []).length;
}

const myPara = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt dignissimos natus praesentium, cum dicta alias sunt voluptates consequatur aliquam porro impedit. Provident delectus iste distinctio accusantium maiores at a magni!';

console.log(characterRepeats(myPara, 'a'));


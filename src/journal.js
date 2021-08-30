export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

function noInputtedWord() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

Entry.prototype.wordCount = function (text) {
  if (noInputtedWord(text)) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
};

// WIP
// Entry.prototype.vowelCount = function (text) {
//   let vowelCount = 0;
//   let vowelArray = text.split('');
//   const vowels = ["a", "i", "o", "u", "e"];
//   for (let i = 0; i < vowels.length; i += 1) {
//     if (vowels[i] === vowelArray[])
//   }
// }

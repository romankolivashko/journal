export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

function noInputtedWord() {
  for (let i = 0; i < arguments.length; i++) {
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

Entry.prototype.vowelCount = function (text) {
  let vowelCount = 0;
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < text.length; i ++) {
    if (vowels.indexOf(text[i]) !== -1) {
      vowelCount += 1;
    }
  }
  return vowelCount;
};

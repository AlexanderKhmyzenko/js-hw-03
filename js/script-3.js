// Поиск самого длинного слово в строке с пробелами

// Напиши функцию findLongestWord(string = ""),
// которая принимает параметром произвольную строку(в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.

const findLongestWord = function (string = " ") {
  const a = string.split(" ");
  console.log(a);

  let maxWord = a[0];

  for (const element of a) {
    if (element.length > maxWord.length) {
      maxWord = element;
    }
  }
  console.log(maxWord);
  return maxWord;
};

findLongestWord("The quick brown fox jumped over the lazy dog");
// 'jumped'

findLongestWord("Google do a roll");
// 'Google'

findLongestWord("May the force be with you");

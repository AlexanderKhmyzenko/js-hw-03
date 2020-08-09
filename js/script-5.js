// Функция предикат

// Функция предикат возвращает true или false

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale.
// Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.

const checkForSpam = function (message = " ") {
  const string = message.toLowerCase();
  let contains = true;

  console.log(string);

  const message1 = string.includes("spam");
  const message2 = string.includes("sale");
  //   console.log(message1);
  //   console.log(message2);

  if (contains === message1) {
    return true;
  } else if (contains === message2) {
    return true;
  } else {
    return false;
  }
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));

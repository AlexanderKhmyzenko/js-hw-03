// Форматирование строки в зависимости от длинны строки

// Напиши функцию formatString(string, maxLength = 40)
// которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
// Если длина больше maxLength, то функция обрезает строку до размера maxLength символов
// и добавляет в конец строки троеточие ...,
// после чего возвращает укороченную версию.

const formatString = function (string = "", maxLength = 40) {
  let message = string.split("");
  let message1;
  let result;

  if (string.length < maxLength) {
    message = string;
    result = message;
    // console.log(message);
  } else if (maxLength <= 30) {
    message = message.slice(0, 30);
    message1 = message.splice(31, 0, ".", ".", ".");
    result = message.join("");
  } else {
    message = message.slice(0, 40);
    message1 = message.splice(41, 0, ".", ".", ".");
    result = message.join("");
  }
  return result;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);

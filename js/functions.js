// Задание 1
function formatmessage(text, maxLength) {
  let result;
  // eslint-disable-next-line no-undef
  if (text.length >= maxLength) {
    // eslint-disable-next-line no-undef
    result = text.slice(0, maxLength);
  } else{
    // eslint-disable-next-line no-undef
    result = text.slice(0, text.length);
  }
  return result;
}
formatmessage('домашнее задание', 20);

// Задание 2
function isPalindrome (string) {
  const normalized = string.toLowerCase().match(/[a-z]/gi).reverse();
  return normalized.join('') === normalized.reverse().join('');
}
// eslint-disable-next-line no-console
console.log(isPalindrome('топот'));

// Дополнительное задание
function foundNumber (string) {
// eslint-disable-next-line no-console
  return console.log(Number.parseInt(string, 10));
}
foundNumber('2023 год');

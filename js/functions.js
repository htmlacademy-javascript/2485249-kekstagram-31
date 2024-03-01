// Задание 1
function formatmessage(text, maxLength) {
  return (maxLength >= text.length);
}
formatmessage('домашнее задание', 20);

// Задание 2

function checkPalindrome (string) {
  const phrase = string.replaceAll(' ', '').toLowerCase();
  let reversePhrase = '';
  for (let i = phrase.lenght - 1; i >= 0; i--){
    reversePhrase += phrase[i];
  }
  return (reversePhrase === phrase);
}
checkPalindrome();

// Дополнительное задание
// eslint-disable-next-line no-unused-vars
function extractNumber(param) {
  const str = param.toString();
  let num = '';
  for (let i = 0; i < str.length; i++) {
    num += (Number.isNaN(parseInt(str[i], 10))) ? '' : str[i];
  }
  return parseInt(num, 10);
}

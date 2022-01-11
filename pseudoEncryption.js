'use strict';

/**
 * encrypt
 * @param {string} text
 * @param {integer} n
 * @return {string}
 */
function encrypt(text, n) {
  if (!text) {
    return text;
  }
  for (let i = 0; i < n; i++) {
    const odd = text.split('').filter((e, i) => i%2 != 0).join('');
    const even = text.split('').filter((e, i) => i%2 == 0).join('');
    text = `${odd}${even}`;
  }
  return text;
}

/**
 * decrypt
 * @param {string} encryptedText
 * @param {integer} n
 * @return {string}
 */
function decrypt(encryptedText, n) {
  if (!encryptedText) {
    return encryptedText;
  }
  let text = encryptedText;
  const coef = encryptedText.length % 2 == 0 ? 0 : 1;
  for (let j = 0; j < n; j++) {
    text = text.split('').map((el, i, arr) => i % 2 == 0 ? arr[(i + arr.length - coef) / 2] : arr[(i - 1) / 2]).join('');
  }
  return text;
}

module.exports = {encrypt, decrypt};

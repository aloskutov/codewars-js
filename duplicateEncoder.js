"use strict"

function duplicateEncode(word) {
  return word.toLowerCase()
  .split("")
  .map((element, index, elements) => {
    return (elements.lastIndexOf(element) != elements.indexOf(element)) ? ")" : "("
  })
  .join("")
}

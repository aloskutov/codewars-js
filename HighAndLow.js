"use strict"

function highAndLow(numbers){
  return numbers.split(" ")
    .concat(numbers.split(" "))
    .sort((el1, el2) => {return Number(el2) - Number(el1)})
    .filter((el, index, elements) => ((index == 0) || (index == (elements.length - 1))))
    .join(' ')
}

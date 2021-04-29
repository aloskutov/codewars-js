"use strict"

function zero(...args) {
  return args.length === 1 ? args[0](0) : 0
}
function one(...args) {
  return args.length === 1 ? args[0](1) : 1
}
function two(...args) {
  return args.length === 1 ? args[0](2) : 2
}
function three(...args) {
  return args.length === 1 ? args[0](3) : 3
}
function four(...args) {
  return args.length === 1 ? args[0](4) : 4
}
function five(...args) {
  return args.length === 1 ? args[0](5) : 5
}
function six(...args) {
  return args.length === 1 ? args[0](6) : 6
}
function seven(...args) {
  return args.length === 1 ? args[0](7) : 7
}
function eight(...args) {
  return args.length === 1 ? args[0](8) : 8
}
function nine(...args) {
  return args.length === 1 ? args[0](9) : 9
}

function plus(a) {
  return (b) => b + a
}
function minus(a) {
  return (b) => b - a
}
function times(a) {
  return (b) => b * a
}
function dividedBy(a) {
  return (b) => Math.floor(b / a)
}

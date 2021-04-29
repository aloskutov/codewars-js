"use strict"

function alphabetPosition(text) {
    return text.toLowerCase()
    .replace(/[^a-z]/g, '')
    .split("")
    .map (el => (el.charCodeAt() - 96))
    .join(' ')
}

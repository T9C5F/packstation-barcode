const assert = require('assert')
const Luhn = require('luhn-js')
const opn = require('opn')

function generate (postnummer) {
    let number = postnummer * 631
    return `3${(Luhn.generate(number.toString())).padStart(15, '0')}`
}

// Beispiel anhand einer zufallsgenerierten Zahl:
// 20281557 ergibt 3000127976624677
assert(generate('20281557') === '3000127976624677')

// Interleaved 2 of 5 ITF barcode
opn('https://barcode.tec-it.com/de/Code25IL?data=' + generate(process.argv[2] || '20281557'))

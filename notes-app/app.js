const validator = require('validator')
const getNotes = require('./notes')

const msg = getNotes()

console.log(msg)

console.log(validator.isEmail('bobby@exmaple.com'))
console.log(validator.isURL('http://tester.com'))

const fs = require('fs')

fs.writeFileSync('notes.txt',' 1st write')
fs.writeFileSync('notes.txt',' 2nd write')
fs.appendFileSync('notes.txt',' 3rd appendage ')


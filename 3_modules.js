// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4_names')
const seyHi = require('./5_utils')
const items = require('./6_alternative-falvor')
require('./7_mind-grenade')

seyHi(names.peter)
console.log(items)
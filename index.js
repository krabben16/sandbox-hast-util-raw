var h = require('hastscript')
var raw = require('hast-util-raw')

var tree = h('div', [
  h('h1', [
    'Foo ',
    h('h2', 'Bar'),
    ' Baz'
  ])
])

var clean = raw(tree)

// console.log(clean)
console.dir(clean, { depth: null })

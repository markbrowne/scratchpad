var p1 = Promise.resolve(console.log('1'))
var p2 = Promise.resolve(console.log('2'))
var p3 = Promise.resolve(console.log('3'))
var p4 = Promise.resolve(console.log('4'))

Promise.all([p1,p2,p3,p4])

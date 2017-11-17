 var assert = require('assert')
 describe('Cadenas', function () {
   describe('subcadenas', function () {
     it('deberia retornar una sub cadenas', function () {
       assert.equal('Bello', 'Panama es Bello'.substring(10, 15))
     })
   })
 })

// var contentful = require('contentful')

var client = contentful.createClient({
    space: 'x4jjujv3ppx5',
    accessToken: '_-8gfgQbjRke6f59m_O5m1Jo4BvADnwMRcP3P6_8D-Q'
  })

client.getEntry('txXXQlzQdXYfcUlYn4Yoa')
.then(function (entry) {
  // logs the entry metadata
  console.log(entry.sys)

  // logs the field with ID title
  console.log(entry.fields.productName)
})

console.log("hello")
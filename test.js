http = require('request')
http
  .post('localhost:3000/posts')
  .on('response', function(req,res) {
    console.log(response.statusCode) // 200
    console.log(response.headers['content-type']) // 'image/png'
  })

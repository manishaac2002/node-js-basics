//create http server
const http = require('http')
//importing requestHandler
const router = require('./router')

console.log(router.sample);
const server =http.createServer(router.handler)
server.listen(3000)
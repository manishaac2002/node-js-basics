//create http server
const http = require('http')
//importing requestHandler
const requestHandler = require('./router')

const server =http.createServer(requestHandler)
server.listen(3000)
//create http server
const http = require('http')

const server =http.createServer((request,response) =>{
    console.log(request.headers);//request
    response.setHeader()//response
    response.write
    response.end

})
server.listen(3000)
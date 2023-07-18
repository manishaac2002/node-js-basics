const fs=require ('fs')

const requestHandler =(request,response)=>{
    const url =request.url
    console.log(url);// which return /(slash)
    const method=request.method
    console.log(method);//which return the type of method like (get,post)
   // console.log(request.headers);//request
   if (url ==='/') { 
       response.setHeader('Content-type','text/html')//response
       response.write('<html>')
       response.write('<head><title>form details </title></head>')
       response.write('<form action="message" method="post"> <input type="text" name="message"><input type="submit" value ="Send"></form>')
       response.write('</html>')
       return response.end()
    }
    if (url==='/message' && method =='post') {
        fs.writeFileSync('hello.txt','dummy')
        response.setHeader('Location','/')
        response.statusCode=302
        return response.end()
    }
    response.setHeader('Content-type','text/html')//response
    response.write('<html>')
    response.write('<head><title>Sample code</title></head>')
    response.write('<body><h1>Hello from Node.js Server..!</h1></body>')
    response.write('</html>')
    response.end()

}
module.exports = requestHandler

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
    if (url==='/message' && method =='POST') {
        fs.writeFileSync('hello.txt','dummy')
        response.setHeader('Location','/')
        //302 -->status code redirecting to the page
        response.statusCode=302 //redirecting the form to receive original form(to set a statuscode)
        //it redirect the page
        console.log("THIS IS MESSAGE");
        return response.end()
    }
    response.setHeader('Content-type','text/html')//response
    response.write('<html>')
    response.write('<head><title>Sample code</title></head>')
    response.write('<body><h1>Hello from Node.js Server..!</h1></body>')
    response.write('</html>')
    response.end()

}
// module.exports = {handler:requestHandler,
//                   sample:"sample statement" }

//node js
// exports.handler =requestHandler
// exports.sample ='Sample statement'

// js
module.exports.handler =requestHandler
module.exports.sample ='Sample statement'


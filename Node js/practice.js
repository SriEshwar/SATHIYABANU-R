//console.log("Welcome to aspire");

            // adding to two numbers
var a=5
var b=5
var c=a+b
console.log(c);

            // creating server to run in the browser
var http = require('http')      // require function
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'})    // header information
    res.write("Welcome to aspire") // response back to the client 
    res.end()   // informing this the end to the server
}).listen(8080);   // port number   

            // modules

var calc = require('./calc.js')
result = calc.add(5,5)
console.log(result);


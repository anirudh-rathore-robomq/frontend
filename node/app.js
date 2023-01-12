var calc = require('./calc.js')
var http = require('http')

http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'text/html'})//if error is thrown
    res.write("Hello World")
    res.end() // this statement tells that there are not more statements other wise server will keep on waiting for other statements
    //res.end("Hello World") can also be written like this
}).listen(8080)
//this wont open in chrome if you are using wsl command line
// type google-chrome --no-sandbox --user-data-dir 
//in wsl to open google chrome and run it from there

console.log(calc.add(1,2));

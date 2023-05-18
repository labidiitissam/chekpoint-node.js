console.log("hello world")
const fs = require("fs")
const message = fs.readFileSync("./text.txt")
console.log(message.toString())

const {response} = require("express")
const http = require("http")
http.createServer((request, response) => {
    response.end("<h1>Hello monde!!!</h1>")
    
}).listen(1900)


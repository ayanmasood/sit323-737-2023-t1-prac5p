var express = require("express")
var app = express()

app.get('/', function(req,res){
    res.send("hello world")
})


app.listen(3040, function (request, response){
    console.log("server on 3040")
})
const express = require('express');

const app = express(); // initializing express

//app.listen(9000)

app.get('/',function(req,res){
    res.send('Hello world')
})

app.get('/alien',function(req,res){
    const id = req.query.id
    //looalhost:9000/alien?id=1
    res.send('Welcome Back Alien' + id)
})

app.get('/alien/:id',function(req,res){
    //locoalhost:9000/alien/1
    const id = req.params.id
    res.send('Hey'+id)
})
app.listen(9000,function(req,res){
    console.log('Running...')
})
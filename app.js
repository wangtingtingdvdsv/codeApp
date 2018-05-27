var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.sendfile(__dirname+'/index.html')
})
app.post('/',function(req,res){
    req.on('data',function(data){
        obj=JAON.parse(data);
        console.log(obj);
        res.send('数据已接收')
    })
})
app.listen(3000);
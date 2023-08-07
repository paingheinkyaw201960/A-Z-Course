// console.log("hello world");
// var http=require("http");
// var calc=require("./calc.js");
//  result=calc.add(5,3);
// http.createServer(function(req,res){
//     res.write("Hello Paing");
//     res.end();
// }).listen(9000);
// console.log("Your result is "+result);
// var fs=require("fs")
// fs.readFile("calc.js","utf-8",function(err,data){
//     console.log(data);
// })
// fs.appendFile("calc.js","console.log(`I am a man!`)",function (error) {
//     console.log("Ok");
    
// })
// fs.unlink("calc1.js",function(error){
//     console.log("Deleted");
// })
// fs.writeFile("calc.js","console.log(`I am a man!`)",function (error) {
//     console.log("Ok");
    
// })
const express=require(`express`);
const app=express();

app.listen(8080,function(req,res){
    console.log("running....");
});
app.get("/",function(req,res){
    res.send("hello paing");
});
app.get("/paing",function(req,res){
    res.send("Welcome paing world");
});
app.get("/paing/:id",function(req,res){
    const id=req.params.id;
    res.send("Welcome paing world"+id);
})
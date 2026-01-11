const fs = require('node:fs');
fs.writeFile('hey.txt',"hello world",function(err){
    if(err) console.log(err);
    else console.log("file created");   
});
//fs.appendFile('hey.txt',"i m doing great",function(err){
   // if(err) console.log(err);
   // else console.log("done");
//});
//fs.rename('hey.txt','hello.txt',function(err){
  //  if(err) console.log(err);
    //else console.log("renamed");   
//});
fs.copyFile('hey.txt','./copy/copy.txt',function(err){
    if(err) console.log(err);
    else console.log("copied"); 
});
fs.unlink('hello.txt',function(err){
    if(err) console.log(err);
    else console.log("deleted"); 
});
fs.rmdir('./copy',function(err){
    if(err) console.log(err);
    else console.log("directory removed");
});
fs.readFile('hey.txt','utf8',function(err,data){
    if(err) console.log(err);
    else console.log(data); 
});
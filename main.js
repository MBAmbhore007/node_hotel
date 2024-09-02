/*var add=function(a, b, sum){
    console.log(a+b);
    sum();
}

add(3,4,function(){
    console.log("Added");
})*/

var os= require('os');
var fs= require('fs');
const db=require('./db.js');+
var user= os.userInfo();
console.log(user);

fs.appendFile('hello2.txt',"Hi Mayur, lets do this" + '\n',()=> console.log("Done Bro"));

var test= require("./test_folder/test.js");
var t=test.sum();
console.log(t);









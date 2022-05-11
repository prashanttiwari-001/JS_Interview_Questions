 let fs = require("fs");
 let content = fs.readFileSync("geetingStarted.js");
 console.log(content+"");

let doesPathExist = fs.existsSync("myFolder");
if(doesPathExist==false){
    fs.mkdirSync("myFolder");
}else{
    console.log("file already exist");
}
console.log(doesPathExist);





const fm = require("./module/file_management")
const p=require("process")
// setInterval(() => {
//     console.log("System is running !!...");
   
// }, 5000);
 
 
fm.fileWrite("Hello.txt","Hello");
fm.fileAppend("Hello.txt","\nThis is Appended Content");
fm.fileRead("Hello.txt")
fm.fileDelet("Hello.txt");
 
 
console.log("Node Js Version:",p.version);
console.log("Platfrom:",p.platform);
console.log("Process ID:",p.pid);
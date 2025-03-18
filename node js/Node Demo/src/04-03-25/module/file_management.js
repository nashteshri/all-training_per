// create and write to files
 
 
const fs = require("fs");
 
 
 
 
function fileWrite(filename,data){
    // console.log( `${filename}`);
    if(!data){
        data='';
    }
 
    fs.writeFileSync(`${filename}`,`${data}`,()=>{
        console.log("File is Created!....");
       
    });
}
 
function fileAppend(filename,data){
    // console.log( `${filename}`);
    console.log("Appending...");
   
   
    fs.appendFile(`${filename}`,`${data}`,()=>{
        console.log("Data Appended Succesfully!!....");
       
    });
}
 
function fileRead(filename){
    console.log( `Reading ${filename} in 3 seconds...`);
   
    setTimeout(() => {
        fs.readFile(`${filename}`,'utf-8',(err,data)=>{
            console.log("Data:",data);
        })
    }, 3000);
}
 
function fileDelet(filename){
    console.log( `Deleting ${filename} file...`);
 
    fs.unlink(`${filename}`,()=>{
        console.log("File Deleted Succesfully...!!");
       
    })
   
   
}
 
 
 
 
 
// fs.appendFile("Output.txt","\nThis is appended at Last",()=>{
//     console.log(("Appended!!"));
   
// });
 
module.exports={fileWrite,fileAppend,fileRead,fileDelet}
 
 
 
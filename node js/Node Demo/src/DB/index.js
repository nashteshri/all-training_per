// const express = require('express')
// const {sql,poolPromise} = require('./database')

// const app = express()

// app.get('/demo',async(request,response)=>{
//     response.send('request works..');
//     let pool = await poolPromise;

//     let results = await pool.request().query('SELECT * from authors');
//     console.log(results.body);
// })

// app.post('/post', async (request, response) => {
//     try {
//       let pool = await poolPromise;
//       console.log(request.body);
//       let { authorId, firstName, lastName } = request.body;
  
//       // Use input parameters to safely construct the SQL query
//       let result = await pool.request()
//         .input('authorId', sql.Int, authorId)
//         .input('firstName', sql.NVarChar, firstName)
//         .input('lastName', sql.NVarChar, lastName)
//         .query('INSERT INTO authors (authorId, firstName, lastName) VALUES (@authorId, @firstName, @lastName)');
  
//       response.status(200).send({ message: 'Author added successfully', result: result });
//     } catch (err) {
//       console.error('Database connection failed', err);
//       response.status(500).send({ message: 'Database connection failed', error: err });
//     }
//   });
// app.listen(3000,()=>{
//     console.log('server running!...')
// })

// app.listen(3000,()=>{
//     console.log("server running on port 3000...");
// })

// app.post('./post')


// const fs = require('fs');
// const readStream =fs.createReadStream('d:/example.txt',{highWaterMark:5,encoding:'utf8'});

// readStream.on('data',(chunk)=>{
//   console.log('received chunk:',chunk);

// });

// readStream.on('error',(err)=>{
//   console.error('Error reading file:',err);
// });
// readStream.on('end',()=>{
//   console.log('file reading complete');
// });


// const writestream = fs.createWriteStream('output.txt');
// writeStream.write('hello,this is a stream example.\n');
// writeStream.write('DAta iis written in chunks ');
// writeStream.end(()=>{
//   console.log('Data sucessfully written to output ')
// })

// const fd = require('fs');
// const readStream = fs.createReadStream('input.txt');
// const writeStream = fs.createWriteStream('output.txt');



// const fs = require('fs');
// const zlib = require('zlib');

// const readStream=fs.createReadStream('d:/example.txt');
// const writeStream = fs.createReadStream('d:/example.zip');


// const gzip =zlib


// const http = require('http');
// const fs = require ('fs');

// http.createServer((req,res)=>{
//   const readStream = fs.createReadStream('bigfile.txt');
//   res.writeHead(200,{'content-type':'text/plain'});
//   readStream.pipe(res);
// }).listen(3000,()=>{
//   console.log('server running at http://localhost:3000');
// });
// const fs = require('fs');
// fs.appendFile('example.txt','\nNew Line!',(err)=>{
//   if(err) throw err;
//   console.log('content appended');
// });


// fs.readFile('d:/example.txt','utf8',(err,data)=>{
//   if(err) throw err;
//   console.log(data);
// });




const multer = require('multer');
const  path = require('path');
const express=require('express');
const app= express();
 
const storage  = multer.diskStorage({
    destination:'./uploads',
    filename:(req,file,cb)=>{
        cb(null,file.filename+'-'+Date.now()+path.extname(file.originalname));
    }
})
 
const upload = multer({storage:storage})



 
app.post('/upload',upload.single('myfile'),(req,res)=>{
    console.log(req.file);
    res.send('Single file uploaded');
})

app.listen(3000,()=>{
  console.log('serveer startd');
})

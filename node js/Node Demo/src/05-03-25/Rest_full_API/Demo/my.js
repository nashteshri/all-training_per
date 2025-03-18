// function savetodb(){
//     return new Promise((resolve ,reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed >4){
//             resolve(console.log("succes data is saved "));
//         }else{
//             reject(console.log("failure data not saved"));
//         }

//     });
// }
// let request=savetodb();
// request.then(()=>{
//     console.log("promise was accepeted");
// })
// .catch(()=>{
//     console.log("promise was rejected");
// })
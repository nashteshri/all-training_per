// let p1 = new Promise((resolve)=>setTimeout(()=>resolve("promise 1 Done"),1000));
// let p2 = new Promise((resolve)=>setTimeout(()=>resolve("promise 2 Done"),2000));
// let p3 = new Promise((resolve)=>setTimeout(()=>resolve("promise 3 Done"),4000));
// let p4 = new Promise((resolve)=>setTimeout(()=>resolve("promise 4 Done"),500));


// Promise.race([p1,p2,p3,p4])
// .then((results)=>console.log("All completed :",results))
// .catch((error)=>console.log("Error :",error ));



function getData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Data Fetched!")
        }, 1000);
    });
}


async function fetchData(){
    console.log("Fetched data...");
    let result = await getData();
    console.log(result);
}
fetchData();
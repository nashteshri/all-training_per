
// async function placeorder(item,delay){
//     console.log('ordered placed:',item);
//     return new promise ((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('${item} is ready')
//         }, delay);
//     })
// }
// async function ordersystem(item,delay){
//     let output = await placeorder(item,delay);
//     console.log(output);
// }

//--------------------------------------------------------------------------------------------------------------------------------------
//Exercise 3

// Simulate fetching user information
// function fetchUser() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({ id: 1, name: 'Shri' });
//       }, 2000); // Resolves after 2 seconds
//     });
//   }
  
//   // Simulate fetching orders
//   function fetchOrders() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve([{ orderId: 101, item: 'Laptop' }, { orderId: 102, item: 'Phone' }]);
//       }, 3000); // Resolves after 3 seconds
//     });
//   }
  
//   // Fetch user info and orders simultaneously
//   Promise.all([fetchUser(), fetchOrders()])
//     .then(([user, orders]) => {
//       console.log('User Info:', user);
//       console.log('Orders:', orders);
//     })
//     .catch((error) => {
//       console.error('Error fetching data:', error);
//     });
  

//--------------------------------------------------------------------------------------------------------------------
function fetchDataWithTimeout(url, timeout) {
    return new Promise((resolve, reject) => {
      // Create a timeout promise that rejects after the specified timeout
      const timer = setTimeout(() => {
        reject(new Error('Request timed out'));
      }, 2000);
  
      // Fetch the data from the API
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          clearTimeout(timer); // Clear the timeout if the request is successful
          resolve(data);
        })
        .catch(error => {
          clearTimeout(timer); // Clear the timeout if there's an error
          reject(error);
        });
    });
  }
  
  // Example usage:
  fetchDataWithTimeout('https://api.example.com/data', 3000)
    .then(data => {
      console.log('Data fetched:', data);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  

//------------------------------------------------------------------------------------------------------------
function mockAPI(){
    return new promise ((resolve, reject)=>{
        setTimeout(()=>{
            if (Math.random()>0.5){
                resolve({message:"sucess!"});
            }else{
                reject("API Error");
            }
        },1000);
    });
}


//* promises *//
 /* --------
  - an object returned by an async function that helps user handle the success or failure of the operation
  - async function starts the operation first, returns the promise object, and then handlers are executed when the operation succeeds or fails
             */


//* the follow along code *//
const fetchPromiseOne = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);   // calling the fetch API into fetchPromise variable

console.log(fetchPromiseOne);  // console logs "pending" which means that the fetch operation is still running

fetchPromiseOne.then((response) => {
  console.log(`Received response: ${response.status}`);  
  // if operation is successful, the promise calls in our handler and passes a response object which contains server's notification of success
});
console.log("Started request…");  // very first line that is outputted in console



//* chaining promises *//
 /* ----------------- */
const fetchPromiseTwo = fetch(
"https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromiseTwo.then((response) => {   // 
const jsonPromise = response.json();
jsonPromise.then((data) => {
    console.log(data[0].name);  
   });
});

/* the code above and below produce the same results but the bottom is better than the top code.
   this is what promise chaining looks like.
   it helps avoid levels of indentation.
*/

const fetchPromiseThree = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );

fetchPromiseThree
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        response.json();
    })
    .then((data) => {
        console.log(data[0].name);
    });


//* catching errors *//
 /* --------------- 
  - use catch() to handle errors when an async operation fails 
 */
const fetchPromiseFour = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromiseFour
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });


//* promise terminology *//
 /* -------------------
  - a promise has 3 states it can be in:
    1. pending: neither succeeded nor failed, promise has only been created.
    2. fulfilled: success. the promise has been fulfilled. then() is called.
    3. rejected: failed. the promise has been rejected. catch() is called.
  - "settled" can refer to the promise being in either the state of fulfilled or rejected.
  - "resolved" if it is settled or has been locked in
                        */


//* combining multiple promises *//
 /* ---------------------------
  - promise.all() is only fulfilled if ALL promises in array are fulfilled. then() is called with an array of all the responses
  - if any of the promises in the array is rejected, the catch() calls in an error
  - promise.any() means only one promise needs to be fulfilled for the promise chain to be successful. if they're all rejected, the whole promise chain is rejected. 
 */

const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });


//* async and wait *//
 /* --------------
  - adding "async" in front of a function makes it operate asynchronously
  - use "await" in front of fetch(). this makes it so the promise is settled first and then the code can follow through after.
                   */

try {
  // using await outside an async function is only allowed in a module
  const response = await fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  console.log(data[0].name);
} catch (error) {
  console.error(`Could not get products: ${error}`);
}
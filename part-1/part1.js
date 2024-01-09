//* (a/synchronous javascript) *//
 /* ----------------------------
  - synchronous js implies that each code is parsed line by line and can only move from the top to bottom.
  - asynchronous js allows multiple tasks to run simultaneously. they don't need to wait for one task to complete for the next to start.
  - examples of async data:  
        - Web & Browser API's  
        - promises.            */                          


// example.1 of sync js:
const activity = 'roller blading';   //string stored in a variable
const topic = `${activity} fashion in the 90's `;   //another variable stores a string that calls in the first variable
console.log(topic);   //second variable outputted 


// example.2 of sync js:
function sqRoot(number) {
    return Math.sqrt(number);
}

const number = 121;
const sqRootResult = `the square root of 121 is ${sqRoot(number)}`;
console.log(sqRootResult);   
// this uses sync js because sqRootResults waits for the function to insert a value into template literal before it can produce the whole string


//* when sync js takes too long *//
 /* ------------------------------ in reference to the prime number generator in mdn 
  - the program didn't allow me to type in the box while the program was generating prime numbers
  - due to the mannerism of sync js. the program was single-threading through one line of code at a time from top to bottom
  - only one thing could be done at a time which is why i couldn't type while prime numbers were generating
  - how to solve the problem with async js:
    1. use a function to call in a long-running operation.
    2. function starts operation and returns immediately to allow other events to run.
    3. function executes but does not block the main thread.
    4. result outputs when function is completed. 
                                */


//* event handlers *//
 /* ------------------------------
  - in the following example, 
    1. when "click to start request" button is clicked, the first thing outputted is "start XHR request".
       "start XHR request" is called in by the send() and then through recursion and lets user know the task is tarting
    2. open() pulls some sort of data out. probably the 200 ms?
    3. then once that data is pulled from the json file, the addEventListener() lets us know the task has completed.
  
  - if i'm understanding properly, this is async because .addEventListener doesn't need to wait for .open() to complete before
    the output is produced
*/
const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  );
  xhr.send();
  log.textContent = `${log.textContent}Started XHR request\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});
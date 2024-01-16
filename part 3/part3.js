//* implementing promise-based API's *//
 /* -------------------------------- */

 /* alarm() example:
    goal is to:
      - use setTimeOut() to send a message after 1000 ms of the alarm() function being called.
      - function called when the "set alarm" button is pressed.
 */

function setAlarm(){
    setTimeout(() => {
        output.textContent = "Wake up!";
    }, 1000);
}
button.addEventListener('click', setAlarm);

//* the promise() constructor *//
 /* -------------------------
  - when the time expires, the alarm() returns a promise.
  - the message is passed into the then() handler and promise is rejected if the caller supplies a negative delay value.
  - promise() takes a function called the executor as an argument.
  - when new promise is created, the executor is implemented.
  - executor takes two arguments: resolve & reject.
  - when executor is implemented, the underlying async function is called in.
  - call resolve after async function succeeds, call reject if there is an errror  
                             */

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}


//* using the alarm() API *//
 /* --------------------- */

const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", () => {
  alarm(name.value, delay.value)
    .then((message) => (output.textContent = message))
    .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
});

/* - if the value of the delay is a negative number, then the promise notifies user of the error.
   - when the value passes the credentials, the promise is successful and calls in resolve() to allow alarm() to proceed with the message.
*/


//* using async and await with the alarm() API *//
 /* ------------------------------------------ 
  - we can perform all functions because a promise is called in 
  - promise.all() & async/wait.
 */

const name1 = document.querySelector("#name");
const delay1 = document.querySelector("#delay");
const button1 = document.querySelector("#set-alarm");
const output1 = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", async () => {
  try {
    const message = await alarm(name.value, delay.value);
    output.textContent = message;
  } catch (error) {
    output.textContent = `Couldn't set alarm: ${error}`;
  }
});
//* introducing workers *//
 /* -------------------
  - workers enable us to run tasks in a separate thread of execution
  - single threaded code temporarily freezes a program until one task is finished. only then can we move onto the next task
  - workers divide tasks between different threads so one task can be started and other ones can be processed simultaneously
  - main code and worker code should never have direct access to each other's variables or else they might change the code accidentally
  - run in different worlds and only interact by sending each other messages
  - workers can not access the DOM 
  - 3 types of workers: 
    1. dedicated workers
    2. shared workers
    3. service workers
  - can be an effective way to keep the main application responsive but they can't access all the APi's that the main application can
                        */


//* using web workers *//
 /* -----------------
  - main.js file calls a new worker with Worker (/insertsomefile.js)
  - the worker.js waits for a message from main.js to call in the function
  - when the task is completed by worker.js, it sends back a message to main.js notifying that it's finished
  - main.js file then gives us the output and results sent to it by the worker.js
                      */


//* other types of workers *//
 /* ----------------------

  - shared workers: 
        - can be accessed from several browsing contexts like windows, iframes, and other workers
  - service workers:
        - acts as proxy server between web applications, browser, and the network
        - enable the creation of effective offline experiences, intercepts network requests, and takes appropriate action based on if network is available or not
                           */
// ----------------------------------XMLHttpRequest Explained-----------------------------------

// Each XMLHttpRequest object has a "readyState" property that tracks the state of the request.
// Below are the values it can have:

// 0 - UNSENT: Request not yet initialized (you just created the xhr object).
// 1 - OPENED: Request has been opened using xhr.open(), but not sent yet.
// 2 - HEADERS_RECEIVED: Request was sent, and the server has responded with headers.
// 3 - LOADING: Server is transmitting the response (you may have partial data).
// 4 - DONE: Entire response has been received, and you can now access it.

// ------------------------------------------------------------

// STEP 1: API Endpoint from where we want to fetch data
const requestUrl = 'https://api.github.com/users/Piyush-Raj-Sharma';

// STEP 2: Create an instance of XMLHttpRequest
const xhr = new XMLHttpRequest();

// STEP 3: Initialize the request by calling open()
// xhr.open(method, url) — prepares a request but doesn't send it yet
xhr.open('GET', requestUrl);

// STEP 4: Define what happens when the request state changes
// This function will be triggered every time `readyState` changes (0 → 4)
xhr.onreadystatechange = function () {
    
    // Log each readyState to understand the flow (this is optional)
    console.log(xhr.readyState);

    // Once the request is fully complete (readyState 4), we can safely access the response
    if (xhr.readyState === 4) {
        // The API response is received in string format, e.g., JSON string like:
        // '{"login": "Piyush-Raj-Sharma", "public_repos": 34, ...}'

        // STEP 5: Parse the JSON string into a JavaScript object
        const data = JSON.parse(this.responseText);

        // STEP 6: Access any value from the data. Let's log the number of public repositories.
        console.log(data.public_repos); // Example output: 34
    }
}

// STEP 7: Send the request to the server
xhr.send();

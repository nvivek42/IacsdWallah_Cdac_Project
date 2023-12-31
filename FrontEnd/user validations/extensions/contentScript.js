// contentScript.js

console.log("Content script started.");

chrome.runtime.sendMessage({ greeting: "Hello from content script!" }, function(response) {
  console.log("Received response:", response);
});

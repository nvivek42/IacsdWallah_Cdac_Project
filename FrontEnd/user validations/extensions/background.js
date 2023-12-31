// background.js

console.log("Background script started.");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("Message received:", request);
  sendResponse({ farewell: "Goodbye from background script!" });
});

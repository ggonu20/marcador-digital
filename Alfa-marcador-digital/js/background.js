try {
  self.importScripts('firebase-compat.js');

  var config = {
    apiKey: "...",
    authDomain: "...",
    databaseURL: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
  };
  firebase.initializeApp(config);

  var db = firebase.firestore();

  chrome.runtime.onMessage.addListener(function (request, sender) {
    if (request.command === "post") {
            // in here, you can use both firebase and data from popup view
      console.log(request.data);
            return true;
    }
  });
} catch (e) {
  console.error(e);
}
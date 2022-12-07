console.log("background!")
try {
    // you need to manually have firebase-compat.js file in your dir
  self.importScripts('../firebase/firebase-compat.js');

  var config = {
    apiKey: "AIzaSyAyZuP-UEhgDg29ZeO36zguxULW52pr-kU",
    authDomain: "marcador-d.firebaseapp.com",
    projectId: "marcador-d",
    storageBucket: "marcador-d.appspot.com",
    messagingSenderId: "686306553948",
    appId: "1:686306553948:web:d033a4d99359d01d12b699",
    measurementId: "G-DTH7J11Y76"
  };
  firebase.initializeApp(config);

  var db = firebase.firestore();

} catch (e) {
  console.error(e);
}
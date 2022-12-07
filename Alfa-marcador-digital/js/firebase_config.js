  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAyZuP-UEhgDg29ZeO36zguxULW52pr-kU",
    authDomain: "marcador-d.firebaseapp.com",
    projectId: "marcador-d",
    storageBucket: "marcador-d.appspot.com",
    messagingSenderId: "686306553948",
    appId: "1:686306553948:web:d033a4d99359d01d12b699",
    measurementId: "G-DTH7J11Y76"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export{
        app
  }
try {
    self.importScripts('./firebase/firebase-apps.js');
    self.importScripts('./firebase/firebase-analytics.js');

    const firebaseConfig = {
        apiKey: "<fill_me>", 
        authDomain: "<fill_me>", 
        projectId: "<fill_me>", 
        storageBucket: "<fill_me>", 
        messagingSenderId: "<fill_me>", 
        appId: "<fill_me>", 
        measurementId: "<fill_me>", 
    };
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

} catch(e) {
    console.error(e);
}

console.log("popup!")
import { app } from './firebase_config'
import {
    getAuth,
    onAuthStateChanged,
    signInWithCredential,
    GoogleAuthProvider,
    setPersistence,
    browserLocalPersistence
} from 'firebase/auth';
// firebaseApp = app

const auth = getAuth(app);
setPersistence(auth,browserLocalPersistence)

function init() {
    onAuthStateChanged(auth, user => {
        if (user != null) {
            console.log('Below User is logged in:')
            console.log(user)
            //window.location.replace('./main.html');
        } else {
            console.log('No user logged in!');
        }
    });
}
init();

document.querySelector('.btn_2').addEventListener('click',()=> {
    initFirebaseApp()
})

function initFirebaseApp() {
    onAuthStateChanged(auth, user => {
        if (user != null) {
            console.log('logged in!');
            console.log("current")
            console.log(user)
            console.log(user.token)
        } else {
            console.log('No user');
            startSignIn()
        }
    });
}

function startSignIn() {
    console.log("started SignIn")
    const user = auth.currentUser;
    if (user) {
        console.log("current")
        console.log(user)
        auth.signOut();
    } else {
        console.log("proceed")
        startAuth(true);
    }
}

function startAuth(interactive) {
    console.log("Auth trying")
    chrome.identity.getAuthToken({ interactive: true }, function (token) {
        if (chrome.runtime.lastError && !interactive) {
            console.log('It was not possible to get a token programmatically.');
        } else if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
        } else if (token) {
            console.log("TOKEN:")
            console.log(token)
            const credential = GoogleAuthProvider.credential(null, token);
            signInWithCredential(auth, credential).then((result) => {
                console.log("Success!!!")
                console.log(result)
            }).catch((error) => {
                console.log(error)
            });
        } else {
            console.error('The OAuth token was null');
        }
    });
}
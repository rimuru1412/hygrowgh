import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyAEHDcehHriUMDuRt94FS7EtYUX1s4b11E",
    authDomain: "hygrownft.firebaseapp.com",
    databaseURL: "https://hygrownft-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hygrownft",
    storageBucket: "hygrownft.appspot.com",
    messagingSenderId: "666341807162",
    appId: "1:666341807162:android:09e10c2ae583bca37a5103",
};
// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.database();

export { db };
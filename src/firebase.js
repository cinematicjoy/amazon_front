import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC5cuf2qLRbRoTLEmVli16JpZ-u4f4i_3M",
    authDomain: "am-az-on-clone-by-j.firebaseapp.com",
    databaseURL: "https://am-az-on-clone-by-j.firebaseio.com",
    projectId: "am-az-on-clone-by-j",
    storageBucket: "am-az-on-clone-by-j.appspot.com",
    messagingSenderId: "622297649783",
    appId: "1:622297649783:web:1d299945c9d89115de6c72",
    measurementId: "G-4CQJ8EEP8N"
});

const auth = firebase.auth();

export {  auth };
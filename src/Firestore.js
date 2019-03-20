import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyALgvUe1Jt7QexcxJq_8BlMH0gQQxM1UVI",
    authDomain: "notflix-7ab12.firebaseapp.com",
    databaseURL: "https://notflix-7ab12.firebaseio.com",
    projectId: "notflix-7ab12",
    storageBucket: "notflix-7ab12.appspot.com",
    messagingSenderId: "686596230656"
};
const fire = firebase.initializeApp(config);

export default fire;
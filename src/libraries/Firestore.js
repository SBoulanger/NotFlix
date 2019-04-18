//import firebase, { app } from 'firebase';
import app from 'firebase/app';
import 'firebase/auth';
import firebase from 'firebase/firebase-firestore';

const config = {
    apiKey: "AIzaSyALgvUe1Jt7QexcxJq_8BlMH0gQQxM1UVI",
    authDomain: "notflix-7ab12.firebaseapp.com",
    databaseURL: "https://notflix-7ab12.firebaseio.com",
    projectId: "notflix-7ab12",
    storageBucket: "notflix-7ab12.appspot.com",
    messagingSenderId: "686596230656"
};
const fire = app.initializeApp(config);

export default fire;

/**class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    async createUser(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password)
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }

    userLogin(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    userLogout() {
        return this.auth.signOut()
    }
}

export default new Firebase();
*/

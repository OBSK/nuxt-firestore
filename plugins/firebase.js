import firebase from 'firebase/app'
import 'firebase/firestore'

if(!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyCYnTj2y7VzjANNNqMfTz-UaSazqFlerzY",
        authDomain: "practicando-e69d9.firebaseapp.com",
        databaseURL: "https://practicando-e69d9.firebaseio.com",
        projectId: "practicando-e69d9",
        storageBucket: "practicando-e69d9.appspot.com",
        messagingSenderId: "1081663309567",
        appId: "1:1081663309567:web:baaab7454b11e99a"
    }
    firebase.initializeApp(config)
}

const fireDB = firebase.firestore()

export {fireDB}
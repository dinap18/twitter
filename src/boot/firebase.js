import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
var firebaseConfig = {
  apiKey: 'AIzaSyAvGY7DuXPOnC_cskWcDpC5LMfaD0zsDNA',
  authDomain: 'twitter-clone-4bd6d.firebaseapp.com',
  projectId: 'twitter-clone-4bd6d',
  storageBucket: 'twitter-clone-4bd6d.appspot.com',
  messagingSenderId: '255177266540',
  appId: '1:255177266540:web:af09a4e0c34838532f0f49'
}
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
export default db

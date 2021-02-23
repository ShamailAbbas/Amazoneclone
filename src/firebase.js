import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCoTYpoQkmnxY8dAPtF03f04a2in0H_tXg',
  authDomain: 'feed-97658.firebaseapp.com',
  databaseURL: 'https://feed-97658-default-rtdb.firebaseio.com',
  projectId: 'feed-97658',
  storageBucket: 'feed-97658.appspot.com',
  messagingSenderId: '696896135316',
  appId: '1:696896135316:web:a3aa5acc9e0eaa8bbc5481',
  measurementId: 'G-SGRKMFXGYY',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }

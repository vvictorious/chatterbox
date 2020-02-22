import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCxBRxy4x83FuKVKQ6goasar1sfKwBzHM0",
    authDomain: "chatterbox-9980d.firebaseapp.com",
    databaseURL: "https://chatterbox-9980d.firebaseio.com",
    projectId: "chatterbox-9980d",
    storageBucket: "chatterbox-9980d.appspot.com",
    messagingSenderId: "447508547992",
    appId: "1:447508547992:web:e94a50b9af3e181c6603ed"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ })
  export default firebaseApp.firestore()
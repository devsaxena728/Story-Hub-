import  firebase from 'firebase';
require ('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDNCFIleEczVizbESRN8NGQVjHJ9lPWoWY",
    authDomain: "project-71-4d371.firebaseapp.com",
    databaseURL: "https://project-71-4d371-default-rtdb.firebaseio.com",
    projectId: "project-71-4d371",
    storageBucket: "project-71-4d371.appspot.com",
    messagingSenderId: "485658249479",
    appId: "1:485658249479:web:fbae4ef45ec660ce741da2"
  };
 
  firebase.initializeApp(firebaseConfig); 
 

  export default firebase.firestore();
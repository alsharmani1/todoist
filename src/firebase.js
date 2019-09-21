import firebase from 'firebase/app';
import firebaseStore from 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCHzCzkhQ53CUKntpV1VesCvq6h5UNDCIM",
    authDomain: "todoist-react-007.firebaseapp.com",
    databaseURL: "https://todoist-react-007.firebaseio.com",
    projectId: "todoist-react-007",
    storageBucket: "todoist-react-007.appspot.com",
    messagingSenderId: "716602577579",
    appId: "1:716602577579:web:771b23df72eefeef015dee"
});

export { firebaseConfig as firebase }
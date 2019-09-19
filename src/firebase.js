import firebase from 'firebase/app';
import firebaseStore from 'firebase/firebaseStore';

const firebaseConfig = firebase.initializeApp({
    apiKey : '',
    authDomain : '',
    databaseURL : '',
    projectId : '',
    storageBucket : '',
    messageSenderId : '',
    apiId : '',
});

export { firebaseConfig as firebase }
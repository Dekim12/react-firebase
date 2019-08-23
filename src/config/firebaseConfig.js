import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCO-6F_6qUi5Xbp37dn3_DQz6pjCRsNeaM',
  authDomain: 'my-first-firebase-projec-11763.firebaseapp.com',
  databaseURL: 'https://my-first-firebase-projec-11763.firebaseio.com',
  projectId: 'my-first-firebase-projec-11763',
  storageBucket: '',
  messagingSenderId: '430850808090',
  appId: '1:430850808090:web:015d56e08fa1c84f',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
  timestampsInSnapshots: true,
});

export default firebase;

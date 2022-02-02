import firebase from 'firebase';
import 'firebase/firestore'

if(!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.EXT_PUBLIC_FIREBASE_API_KEY,
    authDOmain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  })
}

export default firebase
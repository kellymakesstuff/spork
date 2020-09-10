import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDjJb8YsQO2DgjnRyg1SUxSU68ViAz-uCg",
  authDomain: "spork-70c37.firebaseapp.com",
  databaseURL: "https://spork-70c37.firebaseio.com",
  projectId: "spork-70c37",
  storageBucket: "spork-70c37.appspot.com",
  messagingSenderId: "264424092612",
  appId: "1:264424092612:web:226e1d3b90c8bb64816a91",
  measurementId: "G-TBW9QT5595"
}

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef

}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
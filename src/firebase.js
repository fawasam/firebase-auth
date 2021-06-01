import firebase from "firebase/app"
import "firebase/auth"



const app =firebase.initializeApp({
    apiKey: "AIzaSyDHKgEgfnhf6Y082DdPOcX1jBWVtAW89s0",
    authDomain: "auth-test-f8e74.firebaseapp.com",
    projectId: "auth-test-f8e74",
    storageBucket: "auth-test-f8e74.appspot.com",
    messagingSenderId: "167584369954",
    appId: "1:167584369954:web:1a4ae44b6f9add3435697b"
  })

export const auth =app.auth()
export default app  
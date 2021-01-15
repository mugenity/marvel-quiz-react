import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyD7DjB0xNA5x2xa1F5AMbUWj5H6jCVL6cQ",
  authDomain: "marvel-quiz-a6def.firebaseapp.com",
  projectId: "marvel-quiz-a6def",
  storageBucket: "marvel-quiz-a6def.appspot.com",
  messagingSenderId: "162823487599",
  appId: "1:162823487599:web:0305b4dc702b8fac898d9a",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  // inscription
  signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  // Connexion
  loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  // Déconnexion
  signoutUser = () => this.auth.signOut();

  //Recuperation mot de passe
  passwordReset = (email) => this.auth.sendPasswordResetEmail(email);

  //Creation user dans la database
  user = (uid) => this.db.doc(`users/${uid}`);
}

export default Firebase;

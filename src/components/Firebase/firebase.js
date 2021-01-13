import app from "firebase/app";
import "firebase/auth";

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
  }

  //Inscription
  signupUser = (email, password) => {
    this.auth.createUserWithEmailAndPassword(email, password);
  };

  //Connexion
  loginUser = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password);
  };

  //Deconnexion
  signoutUser = () => {
    this.auth.signOut();
  };
}

export default Firebase;

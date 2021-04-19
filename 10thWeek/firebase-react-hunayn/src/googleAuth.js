import firebase from "firebase";
// import { App } from "./index";
import { AuthContext } from "./index";
import { useContext } from "react";

const googleAuth = () => {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      // The signed-in user info.
      var user = result.user;
      // ...
      if (user) {
        const Auth = useContext(AuthContext);
        Auth.setLoggedIn(true);
      }
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};

export default googleAuth;

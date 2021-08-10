import { auth, googleProvider } from "./FirebaseConfig";

export const googleSignIn = () => {
  return auth
    .signInWithPopup(googleProvider)
    .then((payload) => {
      const { displayName, email, photoURL } = payload.user;
      const userInfo = {
        signedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
      };
      return userInfo;
    })
    .catch((error) => console.log(error));
};

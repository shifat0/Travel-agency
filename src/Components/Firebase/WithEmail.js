import { auth } from "./FirebaseConfig";

export const createUserWithEmailAndPassword = (email, password) => {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then((payload) => {
      const userInfo = payload.user;
      userInfo.error = "";
      userInfo.success = true;
      return userInfo;
    })
    .catch((error) => {
      const userInfo = {};
      userInfo.error = error.message;
      return userInfo;
    });
};

export const signInWithEmailAndPassword = (email, password) => {
  return auth
    .signInWithEmailAndPassword(email, password)
    .then((payload) => {
      const userInfo = payload.user;
      userInfo.error = "";
      userInfo.success = true;
      return userInfo;
    })
    .catch((error) => {
      const userInfo = {};
      userInfo.error = error.message;
      return userInfo;
    });
};

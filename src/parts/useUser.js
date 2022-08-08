import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../database/db";
import { useState, useEffect } from "react";

export const useUser = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const [userName, setUserName] = useState();
  const [userId, setUserId] = useState();
  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        if (!auth.currentUser.displayName) {
          alert("ログインしました。ユーザーネームの登録をしてください");
          navigate("/profile");
        } else {
          alert("ログインしました");
          navigate("/list");
        }
      })
      .catch(() => alert("ログインに失敗しました"));
  };
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.uid);
        if (!auth.currentUser.displayName) {
          alert("ログインしました。ユーザーネームの登録をしてください");
          navigate("/profile");
        } else {
          alert("ログインしました");
          navigate("/list");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("signup");
        alert("登録されました");
        const user = userCredential.user;
        console.log(user);
        navigate("/signin");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
        // ..
      });
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        alert("サインアウトされました");
        navigate("/signin");
      })
      .catch(() => alert("ログアウト失敗"));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUserId(uid);
        setUserName(user.displayName);
        console.log("aa");
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  return {
    signUp,
    signIn,
    signOut,
    provider,
    userName,
    userId,
    googleSignIn,
  };
};

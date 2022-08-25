import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../database/db";

export const useAuthentication = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const addUser = (userId, userName = null) => {
    const userRef = doc(db, "users", userId);
    try {
      console.log("addUser");
      setDoc(userRef, {
        userId: userId,
        userName: userName,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const googleSignIn = (nextLink) => {
    signInWithPopup(auth, provider)
      .then(() => {
        addUser(auth.currentUser.uid, auth.currentUser.displayName);
        if (auth.currentUser.displayName) {
          alert("ログインしました");
          navigate(`${nextLink}`);
        } else {
          alert("ログインしました。ユーザーネームの登録をしてください");
          navigate("/profile");
        }
      })
      .catch(() => alert("ログインに失敗しました"));
  };

  const signIn = (email, password, nextLink) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log(auth.currentUser.uid);
        alert("ログインしました");
        if (auth.currentUser.displayName) {
          navigate(`${nextLink}`);
        } else {
          alert("ユーザーネームの登録をしてください");
          navigate("/profile");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const signUp = (email, password) => {
    console.log("signup");
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        addUser(auth.currentUser.uid);
        alert("ユーザーネームの登録をしてください。");
        navigate("/profile");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        alert("ログアウトしました");
        navigate("/signin");
      })
      .catch(() => alert("ログアウト失敗"));
  };

  return {
    signUp,
    signIn,
    signOut,
    googleSignIn,
    addUser,
  };
};

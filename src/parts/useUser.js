import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../database/db";
import { useState, useEffect } from "react";
import { useAuth } from "../providers/AuthContext";

export const useUser = () => {
  const navigate = useNavigate();
  const isAuth = useAuth();
  const user = auth.currentUser;
  const provider = new GoogleAuthProvider();
  const [userId, setUserId] = useState();
  const [isChangeName, setIsChangeName] = useState(false);
  const googleSignIn = (nextLink) => {
    console.log("googlesignin");
    signInWithPopup(auth, provider)
      .then(() => {
        if (!auth.currentUser.displayName) {
          alert("ログインしました。ユーザーネームの登録をしてください");
          navigate("/profile");
        } else {
          alert("ログインしました");
          navigate(`${nextLink}`);
        }
      })
      .catch(() => alert("ログインに失敗しました"));
  };
  const signIn = (email, password, nextLink) => {
    console.log("signin");
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("ログインしました");
        if (user.displayName === undefined) {
          alert("ユーザーネームの登録をしてください");
          navigate("/profile");
        } else {
          navigate(`${nextLink}`);
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
        alert("登録されました。ユーザーネームの登録をしてください。");
        navigate("/profile");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  const signOut = () => {
    console.log("signout");
    auth
      .signOut()
      .then(() => {
        alert("ログアウトしました");
        navigate("/signin");
      })
      .catch(() => alert("ログアウト失敗"));
  };

  const updateUser = (NewuserName) => {
    console.log("usernameupdate");
    updateProfile(user, {
      displayName: NewuserName,
    })
      .then(() => {
        alert("ユーザー名が登録されました");
        navigate("/list");
      })
      .catch((error) => {
        alert("エラーが起きました");
      });
  };

  useEffect(() => {
    console.log("getuser");
    const getUser = () => {
      if (user) {
        // setUserName(user.displayName);
        setUserId(user.uid);
      } else {
        setUserId(undefined);
        // setUserName(undefined);
      }
    };
    getUser();
  }, [isAuth]);

  const getUserName = () => {
    console.log("ggvav");
    if (user) {
      return user.displayName;
    } else {
      return;
    }
  };

  return {
    signUp,
    signIn,
    signOut,
    updateUser,
    provider,
    // userName,
    userId,
    googleSignIn,
    getUserName,
  };
};

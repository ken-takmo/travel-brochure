import { db } from "../database/db";
import { useAuth } from "../providers/AuthContext";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

export const useUser = () => {
  const [isAuth] = useAuth();
  const navigate = useNavigate();

  const updateUserName = (newUserName) => {
    const userRef = doc(db, "users", isAuth.uid);
    try {
      console.log("addUser");
      setDoc(
        userRef,
        {
          userName: newUserName,
        },
        { merge: true }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const updateUser = (newUserName) => {
    updateProfile(isAuth, {
      displayName: newUserName,
    })
      .then(() => {
        updateUserName(isAuth.displayName);
        alert("ユーザー名が登録されました");
        navigate("/list");
      })
      .catch((error) => {
        alert("エラーが起きました");
      });
  };

  const addUsersFavorite = (userId, brochureId) => {
    const userRef = doc(db, "users", userId);
    setDoc(userRef, { favoriteBroshure: brochureId }, { merge: false });
  };

  return {
    updateUser,
    addUsersFavorite,
  };
};

// export const userName = async (newUserName) => {};
// useEffect(() => {
//     const getMyfavoriteBrochures = async() => {
//         const results = [];
//         try{
//             const favoriteBrochures = await db.collection("users").doc(userId).get();
//             favoriteBrochures.forEach( favoriteBrochure => {
//                 results.push()
//             });
//         }
//     }
// },[])

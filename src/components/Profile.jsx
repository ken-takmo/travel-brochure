import { useState } from "react";
import { auth } from "../database/db";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const Profile = () => {
  const [userName, setUserName] = useState();
  const navigate = useNavigate();
  const updateUser = (userName) => {
    updateProfile(auth.currentUser, {
      displayName: userName,
    })
      .then(() => {
        // Profile updated!
        alert("ユーザー名が登録されました");
        navigate("/list");
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };
  return (
    <main>
      <h2>ユーザーネームの変更</h2>
      <label htmlFor="username"></label>
      <input
        type="text"
        id="username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={() => updateUser(userName)}>変更</button>
    </main>
  );
};

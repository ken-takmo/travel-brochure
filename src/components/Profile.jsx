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
    <main className="profile">
      <h1>ユーザーネームの変更</h1>
      <div className="forms profile-form">
        <label htmlFor="username">新しいユーザーネーム</label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <button onClick={() => updateUser(userName)}>変更</button>
      </div>
    </main>
  );
};

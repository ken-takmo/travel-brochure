import { useState } from "react";
import { useUser } from "../hooks/useUser";
import { useAuth } from "../providers/AuthContext";
export const Profile = () => {
  const [isAuth] = useAuth();
  const [newUserName, setNewUserName] = useState();
  const { updateUser } = useUser();

  return (
    <main className="profile">
      {isAuth.displayName ? (
        <div className="forms">
          <h2>ユーザーネームの変更</h2>
          <div className="profile-form">
            <label htmlFor="username">新しいユーザーネーム</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setNewUserName(e.target.value)}
            />
            <br />
            <button onClick={() => updateUser(newUserName)}>変更</button>
          </div>
        </div>
      ) : (
        <div className="forms">
          <h2>ユーザーネームの登録</h2>
          <div className="profile-form">
            <label htmlFor="username">ユーザーネーム</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setNewUserName(e.target.value)}
            />
            <br />
            <button onClick={() => updateUser(newUserName.trim())}>登録</button>
          </div>
        </div>
      )}
    </main>
  );
};

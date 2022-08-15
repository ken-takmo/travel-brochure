import { useState } from "react";
import { useUser } from "../hooks/useUser";
export const Profile = () => {
  const [newUserName, setNewUserName] = useState();
  const { updateUser } = useUser();
  return (
    <main className="profile">
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
    </main>
  );
};

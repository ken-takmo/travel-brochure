import { auth, createUserWithEmailAndPassword } from "../database/db";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../parts/useUser";
export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { signUp } = useUser();
  return (
    <main className="signup">
      <h1>新規登録</h1>
      <div className="signup-form">
        <label htmlFor="email">メールアドレス</label>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">パスワード</label>
        <input
          type="text"
          name=""
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={() => signUp(email, password)}>登録</button>
      </div>
    </main>
  );
};

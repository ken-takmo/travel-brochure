import { useState } from "react";
import { useAuthentication } from "../hooks/useAuthentication";
export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useAuthentication();
  return (
    <main className="signup">
      <div className="forms">
        <h2>新規登録</h2>
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
          <button
            onClick={() => {
              signUp(email, password);
            }}
          >
            登録
          </button>
        </div>
      </div>
    </main>
  );
};

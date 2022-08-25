import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";
export const SignIn = () => {
  const location = useLocation();
  const { signIn } = useAuthentication();
  const { googleSignIn } = useAuthentication();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nextLink = location.state?.from?.pathname || "/list";
  return (
    <main className="signin">
      <div className="email-signin">
        <h2>メールアドレスでログイン</h2>
        <br />
        <div className="signin-form">
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
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={() => signIn(email, password, nextLink)}>
            ログイン
          </button>
        </div>
      </div>
      <br />
      <div className="google-signin">
        <h2>Googleアカウントでログイン</h2>
        <br />
        <div className="signin-form">
          <button onClick={() => googleSignIn(nextLink)}>ログイン</button>
        </div>
      </div>
    </main>
  );
};

import { useState } from "react";
import { useUser } from "../parts/useUser";
export const SingIn = () => {
  const { signIn } = useUser();
  const { googleSignIn } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          <button onClick={() => signIn(email, password)}>ログイン</button>
        </div>
      </div>
      <br />
      <div className="google-signin">
        <h2>Googleアカウントでログイン</h2>
        <br />
        <div className="signin-form">
          <button onClick={googleSignIn}>ログイン</button>
        </div>
      </div>
    </main>
  );
};

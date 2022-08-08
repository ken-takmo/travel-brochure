import { useState } from "react";
import { useUser } from "../parts/useUser";
export const SingIn = () => {
  const { signIn } = useUser();
  const { googleSignIn } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main>
      <div>
        <h2>メールアドレスでログイン</h2>
        <label htmlFor="email">メールアドレス</label>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">パスワード</label>
        <input
          type="text"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => signIn(email, password)}>ログイン</button>
      </div>
      <div>
        <h2>Googleアカウントでログイン</h2>
        <button onClick={googleSignIn}>ログイン</button>
      </div>
    </main>
  );
};

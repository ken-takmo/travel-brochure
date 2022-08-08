import { useState } from "react";
import { useUser } from "../parts/useUser";
export const SingIn = () => {
  const { signIn } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const signIn = () => {
  //     signInWithEmailAndPassword(auth, email, password)
  //       .then((userCredential) => {
  //         // Signed in
  //         const user = userCredential.user;
  //         console.log(user.uid);
  //         // ...
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         alert(errorMessage);
  //       });
  //   };
  return (
    <main>
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
    </main>
  );
};

import { auth, createUserWithEmailAndPassword } from "../database/db";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../parts/useUser";
export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { signUp } = useUser();
  // const signUp = () => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       console.log("signup");
  //       alert("登録されました");
  //       const user = userCredential.user;
  //       console.log(user);
  //       navigate("/signin");
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       alert(errorCode, errorMessage);
  //       // ..
  //     });
  // };
  return (
    <main className="signin">
      <label htmlFor="email">メールアドレス</label>
      <input
        type="text"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">パスワード</label>
      <input
        type="text"
        name=""
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => signUp(email, password)}>登録</button>
    </main>
  );
};

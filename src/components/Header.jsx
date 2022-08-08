import { Link } from "react-router-dom";
import { useUser } from "../parts/useUser";
export const Header = () => {
  const { userName } = useUser();
  const { signOut } = useUser();
  return (
    <header>
      <h1>みんなのしおり</h1>
      {/* {userId && <p>{userId}</p>} */}
      {userName ? (
        <div>
          <p>{userName}</p>
          <button onClick={signOut}>サインアウト</button>
          <Link to="/profile">ユーザー編集</Link>
        </div>
      ) : (
        <div>
          <p>ユーザーネームの登録を行なってください</p>
          <Link to="/profile">ユーザーネーム登録</Link>
        </div>
      )}
      <nav>
        <Link to="/" className="header-link">
          ホーム
        </Link>
        <Link to="/list" className="header-link">
          しおり一覧
        </Link>
        <Link to="/postform" className="header-link">
          投稿
        </Link>
        <Link to="/signup" className="header-link">
          登録
        </Link>
        <Link to="/signin" className="header-link">
          ログイン
        </Link>
      </nav>
    </header>
  );
};

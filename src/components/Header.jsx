import { Link } from "react-router-dom";
import { useUser } from "../parts/useUser";
export const Header = () => {
  const { userName, signOut, userId } = useUser();
  return (
    <>
      {userId ? (
        <header>
          <div className="header-top">
            <h1>みんなのしおり</h1>
            {userName ? (
              <p>{userName}</p>
            ) : (
              <p>ユーザーネームの登録を行なってください</p>
            )}
            <button onClick={signOut}>サインアウト</button>
            <Link to="/profile">ユーザー編集</Link>
          </div>
          <div className="header-bottom">
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
              <Link to="/mypage" className="header-link">
                マイページ
              </Link>
            </nav>
          </div>
        </header>
      ) : (
        <header>
          <div className="header-top">
            <h1>みんなのしおり</h1>
            <p>ゲスト</p>
          </div>
          <div className="header-bottom">
            <nav>
              <Link to="/" className="header-link">
                ホーム
              </Link>
              <Link to="/list" className="header-link">
                しおり一覧
              </Link>
              <Link to="/signup" className="header-link">
                登録
              </Link>
              <Link to="/signin" className="header-link">
                ログイン
              </Link>
            </nav>
          </div>
        </header>
      )}
    </>
  );
};

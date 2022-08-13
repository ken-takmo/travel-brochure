import { Link, useNavigate } from "react-router-dom";
import { Menus } from "../components/Menus";
import { useAuth } from "../providers/AuthContext";
export const Header = () => {
  const [isAuth] = useAuth();
  const navigate = useNavigate();
  return (
    <>
      {isAuth ? (
        <header>
          {isAuth.displayName ? (
            <>
              <div className="header-top">
                <h1 onClick={() => navigate("/")}>みんなのしおり</h1>
                <div className="user-info">
                  <div className="user">
                    <span className="material-symbols-outlined">
                      account_circle
                    </span>
                    <p>{isAuth.displayName}</p>
                  </div>
                  <Menus />
                </div>
              </div>
              <div className="header-bottom">
                <ul>
                  <li>
                    <Link to="/list" className="header-link">
                      しおり一覧
                    </Link>
                  </li>
                  <li>
                    <Link to="/postform" className="header-link">
                      投稿
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="header">
                <h1 onClick={() => navigate("/")}>みんなのしおり</h1>
                <div className="require-named">
                  <Link to="/profile">ユーザー名の登録をしてください</Link>
                  <Menus />
                </div>
              </div>
            </>
          )}
        </header>
      ) : (
        <header>
          <div className="header">
            <h1 onClick={() => navigate("/")}>みんなのしおり</h1>
            <ul className="user-auth">
              <li>
                <Link to="/signup" className="header-link">
                  新規登録
                </Link>
              </li>
              <li>
                <Link to="/signin" className="header-link">
                  ログイン
                </Link>
              </li>
              <li>
                <Link to="/list" className="header-link">
                  しおり一覧
                </Link>
              </li>
            </ul>
          </div>
        </header>
      )}
    </>
  );
};

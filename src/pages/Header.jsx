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
                <nav>
                  <Link to="/list" className="header-link">
                    しおり一覧
                  </Link>
                  <Link to="/postform" className="header-link">
                    投稿
                  </Link>
                </nav>
              </div>
            </>
          ) : (
            <>
              <div className="header-top">
                <h1 onClick={() => navigate("/")}>みんなのしおり</h1>
                <div className="user-info">
                  <Link to="/profile">ユーザーネームの登録をしてください</Link>
                  <Menus />
                </div>
              </div>
            </>
          )}
        </header>
      ) : (
        <header>
          <div className="header-top">
            <h1 onClick={() => navigate("/")}>みんなのしおり</h1>
            <div className="user-auth">
              <Link to="/signup" className="header-link">
                新規登録
              </Link>
              <Link to="/signin" className="header-link">
                ログイン
              </Link>
              <Link to="/list" className="header-link">
                しおり一覧
              </Link>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../parts/useUser";
export const Header = () => {
  const { userName, signOut, userId } = useUser();
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {userId ? (
        <header>
          <div className="header-top">
            <h1 onClick={() => navigate("/")}>みんなのしおり</h1>
            <div className="user-info">
              {userName ? (
                <>
                  <div className="user">
                    <span className="material-symbols-outlined">
                      account_circle
                    </span>
                    <p>{userName}</p>
                  </div>
                  {isClick ? (
                    <div className="overlay">
                      <span
                        className="material-symbols-outlined"
                        id="close"
                        onClick={() => setIsClick(false)}
                      >
                        close
                      </span>
                      <Link
                        to="/mypage"
                        onClick={() => {
                          setIsClick(false);
                        }}
                      >
                        マイページ
                      </Link>
                      <Link to="/profile" onClick={() => setIsClick(false)}>
                        ユーザー編集
                      </Link>
                      <p
                        onClick={() => {
                          signOut();
                          setIsClick(false);
                        }}
                      >
                        サインアウト
                      </p>
                    </div>
                  ) : (
                    <span
                      className="material-symbols-outlined"
                      id="menus"
                      onClick={() => setIsClick(true)}
                    >
                      menu
                    </span>
                  )}
                </>
              ) : (
                <p>ユーザーネームの登録を行なってください</p>
              )}
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
          {/* <div className="header-bottom">
            <nav></nav>
          </div> */}
        </header>
      )}
    </>
  );
};

import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";
export const Menus = () => {
  const { signOut } = useAuthentication();
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      {isClick ? (
        <div className="overlay">
          <span
            className="material-symbols-outlined"
            id="close"
            onClick={() => setIsClick(false)}
          >
            close
          </span>
          <ul>
            <li>
              <Link
                to="/mypost"
                onClick={() => {
                  setIsClick(false);
                }}
              >
                マイ投稿
              </Link>
            </li>
            <li>
              <Link
                to="myfavorits"
                onClick={() => {
                  setIsClick(false);
                }}
              >
                お気に入り
              </Link>
            </li>
            <li>
              <Link to="/profile" onClick={() => setIsClick(false)}>
                ユーザー編集
              </Link>
            </li>
            <li>
              <p
                onClick={() => {
                  signOut();
                  setIsClick(false);
                }}
              >
                ログアウト
              </p>
            </li>
          </ul>
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
  );
};

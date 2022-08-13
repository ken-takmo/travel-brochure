import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";
export const Menus = () => {
  const { signOut } = useUser();
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
            ログアウト
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
  );
};

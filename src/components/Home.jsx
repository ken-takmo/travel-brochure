import { useNavigate } from "react-router-dom";
import bookmarkimage from "../img/bookmark.jpg";
import listimage from "../img/list.png";
export const Home = () => {
  const navigate = useNavigate();
  const toPostBrochure = () => {
    navigate("/postbrochure");
  };

  const toGetBrochures = () => {
    navigate("/getbrochures");
  };
  return (
    <main className="home">
      <h1>旅のしおり共有</h1>
      <div className="image-links">
        <div className="post-link" onClick={toPostBrochure}>
          <img
            src={bookmarkimage}
            alt="投稿リンク画像"
            className="post-link-img"
          />
          <p className="post-link-p">投稿</p>
        </div>
        <div className="list-link" onClick={toGetBrochures}>
          <img src={listimage} alt="一覧リンク画像" className="list-link-img" />
          <p className="list-link-p">しおり一覧</p>
        </div>
      </div>
    </main>
  );
};

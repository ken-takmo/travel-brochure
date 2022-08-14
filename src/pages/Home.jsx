import { useNavigate } from "react-router-dom";
import bookmarkimage from "../img/bookmark.jpg";
import listimage from "../img/list.png";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="home">
      <h1>旅のしおり共有</h1>
      <div className="description1">
        <img src={bookmarkimage} alt="説明1" />
        <p>旅のしおりを共有するアプリです。</p>
      </div>
      <div className="description2">
        <img src={bookmarkimage} alt="説明2" />
        <p>旅行先でのあなたが生み出した楽しみ方(テーマ)を教えてください。</p>
      </div>
      <div className="description3">
        <img src={bookmarkimage} alt="説明3" />
        <p>魅力が詰まった素敵な写真を1枚投稿してください。</p>
      </div>
      <div className="description4">
        <img src={bookmarkimage} alt="説明4" />
        <p>旅先×あなたで無限の旅のしおりを創造しよう！</p>
      </div>
      <div className="image-links">
        <div className="post-link" onClick={() => navigate("/postform")}>
          <img
            src={bookmarkimage}
            alt="投稿リンク画像"
            className="post-link-img"
          />
          <p className="post-link-p">投稿</p>
        </div>
        <div className="list-link" onClick={() => navigate("/list")}>
          <img src={listimage} alt="一覧リンク画像" className="list-link-img" />
          <p className="list-link-p">しおり一覧</p>
        </div>
      </div>
    </main>
  );
};

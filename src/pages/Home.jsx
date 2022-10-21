import bookmarkimage from "../img/bookmark.jpg";
export const Home = () => {
  return (
    <main className="home">
      <div className="app-description">
        <img
          src={bookmarkimage}
          alt="説明ページ画像"
          className="description-img"
        />
        <div className="descriptions">
          <p>旅のしおりを共有するアプリです。</p>
          <p>
            魅力が詰まった素敵な写真を1枚とあなたの楽しみ方(旅のテーマ)を投稿してください
          </p>
          <p>旅先×テーマでオリジナル旅のしおりを投稿しよう！</p>
        </div>
      </div>
    </main>
  );
};

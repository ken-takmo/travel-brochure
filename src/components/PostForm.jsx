import { useState } from "react";
import { useBrochure } from "../parts/useBrochure";
import { useUser } from "../parts/useUser";
import { companionOption, regionOption } from "../utils/utils";

export const PostForm = () => {
  const [destination, setDestination] = useState("");
  const [theme, setTheme] = useState("");
  const [content, setContent] = useState("");
  const [companion, setCompanion] = useState("");
  const [region, setRegion] = useState("");
  const [fileData, setFileData] = useState();
  const { postBrochure, isUploaded, loading } = useBrochure();
  const { userId } = useUser();

  return (
    <>
      {userId ? (
        <>
          {loading ? (
            <div className="uploading">
              <h2>アップロード中・・・</h2>
            </div>
          ) : (
            <>
              {isUploaded ? (
                <div className="uploaded">
                  <h2>アップロード完了！</h2>
                </div>
              ) : (
                <main className="post-form">
                  <h1>投稿フォーム</h1>
                  <div className="forms">
                    <label htmlFor="destination">旅行先</label>
                    <input
                      type="text"
                      id="destination"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                    <br />
                    <label htmlFor="theme">旅行テーマ</label>
                    <input
                      type="text"
                      id="theme"
                      value={theme}
                      onChange={(e) => setTheme(e.target.value)}
                    />
                    <br />
                    <label htmlFor="content">内容</label>
                    <textarea
                      name="content"
                      id="content"
                      cols="30"
                      rows="10"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                    <br />
                    <div className="selecter">
                      <label htmlFor="companion">誰と</label>
                      <select
                        name="companion"
                        id="companion"
                        value={companion}
                        onChange={(e) => setCompanion(e.target.value)}
                      >
                        <option value="">選択してください</option>
                        {companionOption()}
                      </select>
                      <label htmlFor="region">地域</label>
                      <select
                        name="region"
                        id="region"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                      >
                        <option value="">選択してください</option>
                        {regionOption()}
                      </select>
                    </div>
                    <br />
                    <label htmlFor="image">
                      画像(jpegまたはpngの画像ファイル)
                    </label>
                    <input
                      type="file"
                      id="image"
                      accept=".png, .jpeg, .jpg"
                      onChange={(e) => setFileData(e.target.files)}
                    />
                    <br />
                    <button
                      onClick={() =>
                        postBrochure(
                          destination,
                          theme,
                          content,
                          companion,
                          region,
                          fileData,
                          userId
                        )
                      }
                    >
                      投稿
                    </button>
                  </div>
                </main>
              )}
            </>
          )}
        </>
      ) : (
        <div className="not-signin-postform">
          <h2>ログイン後投稿ができます</h2>
        </div>
      )}
    </>
  );
};

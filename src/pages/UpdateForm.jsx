import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { regionOption, companionOption } from "../utils/utils";
import { useBrochure } from "../hooks/useBrochure";
import { useDetail } from "../hooks/useDetail";
import { useAuth } from "../providers/AuthContext";
import { Image } from "../components/Image";
export const UpdateForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const brochureID = params.id;
  const { updateBrochure } = useBrochure(brochureID);
  const { detail } = useDetail(brochureID);
  const [destination, setDestination] = useState("");
  const [theme, setTheme] = useState("");
  const [content, setContent] = useState("");
  const [companion, setCompanion] = useState(0);
  const [region, setRegion] = useState(0);
  const [preImage, setPreimage] = useState("");
  const [fileData, setFileData] = useState("");
  const [isUpdate, setUpdate] = useState(false);
  const [isAuth] = useAuth();
  const { isUploaded, loading } = useBrochure();

  useEffect(() => {
    setDestination(detail.destination);
    setTheme(detail.theme);
    setContent(detail.content);
    setCompanion(detail.companion);
    setRegion(detail.region);
    setPreimage(detail.image);
  }, [detail]);

  useEffect(() => {
    if (fileData) {
      setUpdate(true);
    }
  }, [fileData]);
  return (
    <>
      {loading ? (
        <div className="uploading">
          <h2>アップロード中</h2>
        </div>
      ) : (
        <>
          {isUploaded ? (
            <div className="uploaded">
              <h2>アップロード完了</h2>
            </div>
          ) : (
            <main className="update-form">
              {detail.userId === isAuth.uid ? (
                <>
                  <div className="forms">
                    <h1>しおり編集</h1>
                    <label htmlFor="destination">旅行先</label>
                    <input
                      type="text"
                      id="desitination"
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
                    />
                    <br />
                    <div className="selecter">
                      <label htmlFor="companion">誰と</label>
                      <select
                        name="companion"
                        id="conpanion"
                        value={companion}
                        onChange={(e) => setCompanion(e.target.value)}
                      >
                        {companionOption(detail.companion)}
                      </select>
                      <label htmlFor="region">地域</label>
                      <select
                        name="region"
                        id="region"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                      >
                        {regionOption(detail.region)}
                      </select>
                    </div>
                    <br />
                    <div className="image">{<Image url={detail.image} />}</div>
                    <label htmlFor="image">画像(変更ない場合は入力不要)</label>
                    <input
                      type="file"
                      id="image"
                      accept=".png, .jpeg, .jpg"
                      onChange={(e) => setFileData(e.target.files)}
                    />
                    <br />
                    <button
                      onClick={() =>
                        updateBrochure(
                          destination,
                          theme,
                          content,
                          companion,
                          region,
                          preImage,
                          fileData,
                          isUpdate
                        )
                      }
                    >
                      更新
                    </button>
                    <button onClick={() => navigate(`/detail/${brochureID}`)}>
                      戻る
                    </button>
                  </div>
                </>
              ) : (
                <p>あなたの投稿ではありません</p>
              )}
            </main>
          )}
        </>
      )}
    </>
  );
};

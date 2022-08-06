import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { regions, companions } from "../utils/utils";
import { useBrochure } from "../parts/useBrochure";
import { useGetDetail } from "../parts/useGetDetail";
export const Update = () => {
  const navigate = useNavigate();
  const params = useParams();
  const brochureID = params.id;
  const { updateBrochure } = useBrochure(brochureID);
  const { detail } = useGetDetail(brochureID);
  const [destination, setDestination] = useState("");
  const [theme, setTheme] = useState("");
  const [content, setContent] = useState("");
  const [companion, setCompanion] = useState(0);
  const [region, setRegion] = useState(0);
  const [preImage, setPreimage] = useState("");
  const [fileData, setFileData] = useState("");
  const [isUpdate, setUpdate] = useState(false);
  const { getImage } = useBrochure();

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

  const companionOption = (data) => {
    const companionOptions = [];
    for (let i = 0; i < 4; i++) {
      if (i == data) {
        companionOptions.push(
          <option key={i} value={i} defaultValue>
            {companions[i]}
          </option>
        );
      } else {
        companionOptions.push(
          <option key={i} value={i}>
            {companions[i]}
          </option>
        );
      }
    }
    return companionOptions;
  };

  const regionOption = (deta) => {
    const regionOptions = [];
    for (let i = 0; i < 47; i++) {
      if (i == deta) {
        regionOptions.push(
          <option key={i} value={i} defaultValue>
            {regions[i]}
          </option>
        );
      } else {
        regionOptions.push(
          <option key={i} value={i}>
            {regions[i]}
          </option>
        );
      }
    }
    return regionOptions;
  };
  return (
    <main className="update-form">
      <h1>しおり編集</h1>
      <div className="forms">
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
        {detail.image && <div className="image">{getImage(detail.image)}</div>}
        <label htmlFor="image">画像(変更ない場合は未入力)</label>
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
        <button onClick={() => navigate(`/detail/${brochureID}`)}>戻る</button>
      </div>
    </main>
  );
};

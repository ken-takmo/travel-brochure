import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../database/db";
import { regions, companions } from "../utils/utils";
import { useBrochure } from "../parts/useBrochure";
export const Update = () => {
  const navigate = useNavigate();
  const params = useParams();
  const brochureID = params.id;
  const { updateBrochure } = useBrochure(brochureID);
  const [detail, setDetail] = useState({});
  const result = [];
  const [destination, setDestination] = useState(detail.destination);
  const [theme, setTheme] = useState(detail.theme);
  const [content, setContent] = useState(detail.content);
  const [companion, setCompanion] = useState(detail.companion);
  const [region, setRegion] = useState(detail.region);

  useEffect(() => {
    const getDetail = async () => {
      const doc = await db.collection("trips").doc(brochureID).get();
      setDetail(doc.data());
    };
    getDetail();
  }, []);
  useEffect(() => {
    setDestination(detail.destination);
    setTheme(detail.theme);
    setContent(detail.content);
    setCompanion(detail.companion);
    setRegion(detail.region);
  }, [detail]);

  const companionOption = (data) => {
    const companionOptions = [];
    for (let i = 0; i < 4; i++) {
      if (i == data) {
        companionOptions.push(
          <option key={i} value={i} selected>
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
          <option key={i} value={i} selected>
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

  // const updateBrochure = async () => {
  //   try {
  //     await db.collection("trips").doc(brochureID).update({
  //       destination: destination,
  //       theme: theme,
  //       content: content,
  //       companion: companion,
  //       region: region,
  //     });
  //   } catch (error) {
  //     alert(error);
  //   }
  //   alert("更新されました");
  //   navigate(`/detail/${brochureID}`);
  // };

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
        <button
          onClick={updateBrochure(
            destination,
            theme,
            content,
            companion,
            region
          )}
        >
          更新
        </button>
        <button onClick={() => navigate(-1)}>戻る</button>
      </div>
    </main>
  );
};

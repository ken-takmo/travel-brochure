import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../database/db";
import { regions } from "../utils/utils";

export const PostBrochure = () => {
  const navigate = useNavigate();
  const [newTrip, setNewTrip] = useState({});
  const [destination, setDestination] = useState("");
  const [theme, setTheme] = useState("");
  const [content, setContent] = useState("");
  const [companion, setCompanion] = useState("");
  const [region, setRegion] = useState("");

  const addbutton = async () => {
    if (!destination || !theme || !content || !companion || !region) {
      alert("全ての項目を入力してください");
      return;
    }
    const ref = await db.collection("trips").add({
      destination: destination,
      theme: theme,
      content: content,
      companion: companion,
      region: region,
      evaluation: 0,
    });
    const data = await ref.get();
    setNewTrip(data.data());
    alert("投稿されました");
    navigate("/getbrochures");
  };

  const options = [];
  for (let i = 0; i < 47; i++) {
    options.push({ value: i, label: regions[i] });
  }

  return (
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
            <option value="0">ひとり</option>
            <option value="1">友人</option>
            <option value="2">恋人・パートナー</option>
            <option value="3">家族</option>
          </select>
          <label htmlFor="region">地域</label>
          <select
            name="region"
            id="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="">選択してください</option>
            {options.map((option) => {
              return (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </div>
        <br />
        <button onClick={addbutton}>投稿</button>
      </div>
    </main>
  );
};

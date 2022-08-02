import { useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../database/db";
import { regions } from "../utils/regions";

export const PostBrochure = () => {
  const [newTrip, setNewTrip] = useState({});
  const [destination, setDestination] = useState("");
  const [theme, setTheme] = useState("");
  const [companion, setCompanion] = useState("");
  const [region, setRegion] = useState("");

  const addbutton = async () => {
    // if (!destination || !theme || !companion || !region) {
    //   alert("全ての項目を入力してください");
    //   return;
    // }
    // if (isNaN(parseInt(companion, 10)) || isNaN(parseInt(region, 10))) {
    //   alert("誰と、地域は半角数字で入力してください");
    //   return;
    // }
    // const ref = await db.collection("trips").add({
    //   destination: destination,
    //   theme: theme,
    //   companion: companion,
    //   region: region,
    //   evaluation: 0,
    // });
    // const data = await ref.get();
    // setNewTrip(data.data());
  };

  const options = [];
  for (let i = 1; i <= 47; i++) {
    options.push({ value: i, label: regions[i - 1] });
  }

  return (
    <main className="post-form">
      <h1>投稿フォーム</h1>
      <label htmlFor="destination">旅行先</label>
      <input
        type="text"
        id="destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <label htmlFor="theme">旅行テーマ</label>
      <textarea
        name="theme"
        id="theme"
        cols="30"
        rows="10"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      ></textarea>
      <label htmlFor="companion">誰と</label>
      <select
        name="companion"
        id="companion"
        value={companion}
        onChange={(e) => setCompanion(e.target.value)}
      >
        <option value="">選択してください</option>
        <option value="1">ひとり</option>
        <option value="2">友人</option>
        <option value="3">恋人・パートナー</option>
        <option value="4">家族</option>
      </select>
      <label htmlFor="region">地域</label>
      <select
        name="region"
        id="region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        {options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      <p>
        {newTrip.destination},{newTrip.theme},{newTrip.companion},
        {newTrip.region}が投稿されました
      </p>
      <button onClick={addbutton}>投稿</button>
      <Link to="/getbrochures">データ一覧</Link>
    </main>
  );
};

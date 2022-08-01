import { useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../database/db";

export const PostBrochure = () => {
  const [newTrip, setNewTrip] = useState({});
  const [destination, setDestination] = useState("");
  const [theme, setTheme] = useState("");
  const [companion, setCompanion] = useState("");
  const [region, setRegion] = useState("");

  const addbutton = async () => {
    if (!destination || !theme || !companion || !region) {
      alert("全ての項目を入力してください");
      return;
    }
    if (isNaN(parseInt(companion, 10)) || isNaN(parseInt(region, 10))) {
      alert("誰と、地域は半角数字で入力してください");
      return;
    }
    const ref = await db.collection("trips").add({
      destination: destination,
      theme: theme,
      companion: companion,
      region: region,
      evaluation: 0,
    });
    const data = await ref.get();
    setNewTrip(data.data());
  };

  return (
    <main>
      <label htmlFor="destination">旅行先</label>
      <input
        type="text"
        id="destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <label htmlFor="theme">旅行テーマ</label>
      <input
        type="text"
        id="theme"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      />
      <label htmlFor="companion">誰と</label>
      <input
        type="text"
        id="companion"
        value={companion}
        onChange={(e) => setCompanion(e.target.value)}
      />
      <label htmlFor="region">地域</label>
      <input
        type="text"
        id="region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      />
      <p>
        {newTrip.destination},{newTrip.theme},{newTrip.companion},
        {newTrip.region}が追加されました
      </p>
      <button onClick={addbutton}>追加</button>
      <Link to="/getbrochures">データ一覧</Link>
    </main>
  );
};

import { useState } from "react";
import { useBrochure } from "../hooks/useBrochure";

export const forms = (initD, initT, initCt, initCm, initR, initF, method) => {
  const [destination, setDestination] = useState(initD);
  const [theme, setTheme] = useState(initT);
  const [content, setContent] = useState(initCt);
  const [companion, setCompanion] = useState(initCm);
  const [region, setRegion] = useState(initR);
  const [fileData, setFileData] = useState(initF);
  const [isAuth] = useAuth();

  return (
    <div className="forms">
      <h1>投稿フォーム</h1>
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
      <label htmlFor="image">画像(jpegまたはpngの画像ファイル)</label>
      <input
        type="file"
        id="image"
        accept=".png, .jpeg, .jpg"
        onChange={(e) => setFileData(e.target.files)}
      />
      <br />
      <button
        onClick={() =>
        //   postBrochure(
        //     destination.trim(),
        //     theme.trim(),
        //     content.trim(),
        //     companion,
        //     region,
        //     fileData,
        //     isAuth.uid
        //   )
        method(
            
        )
        }
      >
        投稿
      </button>
    </div>
  );
};

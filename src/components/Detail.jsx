import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../database/db";
import { regions, companions } from "../utils/utils";
export const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const brochureID = params.id;
  const [detail, setDetail] = useState([]);
  const result = [];

  useEffect(() => {
    const getDetail = async () => {
      const doc = await db.collection("trips").doc(brochureID).get();
      result.push({ ...doc.data() });
      setDetail(result);
    };
    getDetail();
  }, []);

  const deleteBrochure = async () => {
    try {
      await db.collection("trips").doc(brochureID).delete();
      alert("削除されました");
      navigate("/getbrochures");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <main className="detail">
      <h1>しおり詳細</h1>
      {detail.map((deta) => {
        return (
          <div className="detail-data" key={brochureID}>
            <div className="detail-data-header">
              <h3>{deta.destination}</h3>
            </div>
            <hr />
            <div className="detail-data-main">
              <p className="detail-theme">旅行テーマ：{deta.theme}</p>
              <p className="detail-content">感想：{deta.content}</p>
            </div>
            <hr />
            <div className="detail-data-detail">
              <p>評価：{deta.evaluation}</p>
              <p>誰と：{companions[deta.companion]}</p>
              <p>地域：{regions[deta.region]}</p>
            </div>
            <nav className="detail-data-links">
              <button onClick={() => navigate(`/update/${brochureID}`)}>
                編集
              </button>
              <button onClick={() => navigate(-1)}>戻る</button>
              <button onClick={deleteBrochure}>削除</button>
            </nav>
          </div>
        );
      })}
    </main>
  );
};

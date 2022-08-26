import { useNavigate, useParams } from "react-router-dom";
import { regions, companions } from "../utils/utils";
import { useDetail } from "../hooks/useDetail";
import { useAuth } from "../providers/AuthContext";
import { Image } from "../components/Image";
import { useGood } from "../hooks/useGood";
import { useEffect, useState } from "react";
export const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const brochureID = params.id;
  const { detail, deleteBrochure } = useDetail(brochureID);
  const [goodCount, setGoodCount] = useState(0);
  const [isAuth] = useAuth();
  const { addEvaluation, reduceEvaluation, isGood } = useGood(brochureID);
  useEffect(() => {
    setGoodCount(detail.evaluation);
  }, [detail.evaluation]);
  return (
    <main className="detail">
      <div className="detail-data" key={brochureID}>
        <div className="detail-data-header">
          <h3>{detail.destination}</h3>
        </div>
        <hr />
        <div className="detail-data-main">
          <div className="image">
            <Image url={detail.image} />
          </div>
          <div className="detail-theme">
            <h3>テーマ</h3>
            <p>{detail.theme}</p>
          </div>
          <div className="detail-content">
            <h3>内容</h3>
            <p>{detail.content}</p>
          </div>
        </div>
        <hr />
        <div className="detail-data-detail">
          {isAuth ? (
            <>
              {isGood ? (
                <>
                  <span
                    className="material-symbols-rounded favorited"
                    onClick={() => {
                      setGoodCount(goodCount - 1);
                      reduceEvaluation(detail.evaluation, goodCount - 1);
                    }}
                  >
                    favorite
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="material-symbols-rounded favorite"
                    onClick={() => {
                      setGoodCount(goodCount + 1);
                      addEvaluation(detail.evaluation, goodCount + 1);
                    }}
                  >
                    favorite
                  </span>
                </>
              )}
              <div className="good">
                <p>{goodCount}</p>
              </div>
              <p>誰と：{companions[detail.companion]}</p>
              <p>地域：{regions[detail.region]}</p>
            </>
          ) : (
            <>
              <div className="good">
                <p>{goodCount} いいね！</p>
              </div>
              <p>誰と：{companions[detail.companion]}</p>
              <p>地域：{regions[detail.region]}</p>
            </>
          )}
        </div>
        <nav className="detail-data-links">
          {isAuth ? (
            <>
              {isAuth.uid === detail.userId ? (
                <>
                  <button onClick={() => navigate(`/updateform/${brochureID}`)}>
                    編集
                  </button>
                  <button onClick={() => navigate("/list")}>戻る</button>
                  <button onClick={() => deleteBrochure(detail.image)}>
                    削除
                  </button>
                </>
              ) : (
                <button onClick={() => navigate(-1)}>戻る</button>
              )}
            </>
          ) : (
            <button onClick={() => navigate(-1)}>戻る</button>
          )}
        </nav>
      </div>
    </main>
  );
};

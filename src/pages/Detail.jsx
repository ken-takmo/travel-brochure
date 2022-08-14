import { useNavigate, useParams } from "react-router-dom";
import { regions, companions } from "../utils/utils";
import { useBrochure } from "../hooks/useBrochure";
import goodbutton from "../img/good.svg";
import { useDetail } from "../hooks/useDetail";
import { useAuth } from "../providers/AuthContext";
import bordImage from "../img/bord.jpg";
// import { useGood } from "../parts/useGood";
export const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const brochureID = params.id;
  const { detail, deleteBrochure } = useDetail(brochureID);
  const { getImage } = useBrochure();
  const [isAuth] = useAuth();
  // const { addEvaluation } = useGood(brochureID, detail.evaluation, isAuth.uid);
  return (
    // <main className="detail" style={{ backgroundImage: `url(${bordImage})` }}>
    <main className="detail">
      <h1>しおり詳細</h1>
      <div className="detail-data" key={brochureID}>
        <div className="detail-data-header">
          <h3>{detail.destination}</h3>
        </div>
        <hr />
        <div className="detail-data-main">
          <p className="detail-theme">旅行テーマ：{detail.theme}</p>
          <p className="detail-content">感想：{detail.content}</p>
          {detail.image && (
            <div className="image">{getImage(detail.image)}</div>
          )}
        </div>
        <hr />
        <div className="detail-data-detail">
          {/* {isAuth ? (
            <div className="good">
              <p>いいね！：{detail.evaluation}</p>
              <img
                src={goodbutton}
                alt="いいねぼたん"
                className={isGood ? "good-button good" : "good-button dis-good"}
                onClick={() =>
                  isGood
                    ? reduceEvaluation(brochureID, detail.evaluation)
                    : addEvaluation(brochureID, detail.evaluation)
                }
              />
            </div>
          ) : (
            <></>
          )} */}
          <p>誰と：{companions[detail.companion]}</p>
          <p>地域：{regions[detail.region]}</p>
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

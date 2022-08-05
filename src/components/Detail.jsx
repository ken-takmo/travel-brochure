import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { regions, companions } from "../utils/utils";
import { useBrochure } from "../parts/useBrochure";
import { db } from "../database/db";
import goodbutton from "../img/good.svg";
export const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const brochureID = params.id;
  const { detail, deleteBrochure } = useBrochure(brochureID);
  // const [isGood, setIsGood] = useState(false);

  // const addEvaluation = async (id, evaluation) => {
  //   try {
  //     await db
  //       .collection("trips")
  //       .doc(id)
  //       .update({
  //         evaluation: evaluation + 1,
  //       });
  //     setIsGood(true);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  // const reduceEvaluation = async (id, evaluation) => {
  //   if (evaluation == 0) {
  //     return;
  //   }
  //   try {
  //     await db
  //       .collection("trips")
  //       .doc(id)
  //       .update({
  //         evaluation: evaluation - 1,
  //       });
  //     setIsGood(false);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };
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
              <div className="good">
                <p>いいね！：{deta.evaluation}</p>
                <img
                  src={goodbutton}
                  alt="いいねぼたん"
                  className="good-button"
                  // className={
                  //   isGood ? "good-button good" : "good-button dis-good"
                  // }
                  // onClick={() =>
                  //   isGood
                  //     ? reduceEvaluation(brochureID, deta.evaluation)
                  //     : addEvaluation(brochureID, deta.evaluation)
                  // }
                />
              </div>
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

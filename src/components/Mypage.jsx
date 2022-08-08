import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../database/db";
import { useUser } from "../parts/useUser";
import { regions, companions } from "../utils/utils";
import background from "../img/map.jpg";
export const Mypage = () => {
  const { userId } = useUser();
  const [myBrochures, setMyBrochures] = useState(undefined);
  const results = [];
  const navigate = useNavigate();
  console.log(userId);
  useEffect(() => {
    const getMyBrochures = async () => {
      try {
        const docs = await db
          .collection("trips")
          .where("userId", "==", `${userId}`)
          .get();
        docs.forEach((doc) => {
          results.push({
            tripId: doc.id,
            ...doc.data(),
          });
        });
        console.log(results);
        setMyBrochures(results);
        console.log("getmybrochures");
      } catch (error) {
        alert(error);
      }
    };
    getMyBrochures();
  }, [userId]);
  return (
    <main>
      {myBrochures ? (
        <>
          {myBrochures.map((trip) => {
            return (
              <div
                className="trip-data"
                key={trip.tripId}
                onClick={() => navigate(`/detail/${trip.tripId}`)}
              >
                <div className="trip-data-main">
                  <div className="trip-theme trip-data-child">
                    <p>{trip.theme}</p>
                  </div>
                  <div
                    className="trip-destination trip-data-child"
                    style={{ backgroundImage: `url(${background})` }}
                  >
                    <p>{trip.destination}</p>
                  </div>
                </div>
                <div className="trip-details  trip-data-child">
                  <small>いいね！</small>
                  <p className="detail">{trip.evaluation}</p>
                  <small>誰と</small>
                  <p className="detail">{companions[trip.companion]}</p>
                  <small>地域</small>
                  <p className="detail">{regions[trip.region]}</p>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <p>投稿がありません</p>
      )}
    </main>
  );
};

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../database/db";
import { regions, companions } from "../utils/utils";

export const GetBrochures = () => {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const _trips = [];
  useEffect(() => {
    const getbrochures = async () => {
      const docs = await db.collection("trips").get();
      docs.forEach((doc) => {
        _trips.push({
          tripId: doc.id,
          ...doc.data(),
        });
      });
      console.log(_trips);
      setTrips(_trips);
    };
    getbrochures();
  }, []);

  // const toDetail = (id) => {
  //   navigate(`/detail/${id}`);
  // };
  return (
    <main>
      <h1>しおり一覧</h1>
      <div className="trip-datas">
        {trips.map((trip) => {
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
                <div className="trip-destination trip-data-child">
                  <p>{trip.destination}</p>
                </div>
              </div>
              <div className="trip-details  trip-data-child">
                <small>評価</small>
                <p className="detail">{trip.evaluation}</p>
                <small>誰と</small>
                <p className="detail">{companions[trip.companion]}</p>
                <small>地域</small>
                <p className="detail">{regions[trip.region]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

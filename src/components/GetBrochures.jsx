import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../database/db";

export const GetBrochures = () => {
  const [trips, setTrips] = useState([]);
  (async () => {
    const _trips = [];
    const docs = await db.collection("trips").get();
    docs.forEach((doc) => {
      _trips.push({
        tripId: doc.id,
        ...doc.data(),
      });
    });
    setTrips(_trips);
  })();
  const datalist = trips.map((trip) => {
    return (
      <div className="trip-data" key={trip.tripId}>
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
          <p className="detail">{trip.companion}</p>
          <small>地域</small>
          <p className="detail">{trip.region}</p>
        </div>
      </div>
    );
  });
  return (
    <main>
      {datalist}
      <Link to="/postbrochure">追加</Link>
    </main>
  );
};

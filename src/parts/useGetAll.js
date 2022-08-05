import { db } from "../database/db";
import { useEffect, useState } from "react";
export const useGetAll = () => {
  const [trips, setTrips] = useState([]);
  const _trips = [];
  useEffect(() => {
    const getAll = async () => {
      try {
        const docs = await db.collection("trips").get();
        docs.forEach((doc) => {
          _trips.push({
            tripId: doc.id,
            ...doc.data(),
          });
        });
        setTrips(_trips);
        console.log("getAll");
      } catch (error) {
        alert(error);
      }
    };
    getAll();
  }, []);
  return trips;
};

import { useEffect, useState } from "react";
import { db } from "../database/db";
import { useUser } from "./useUser";
export const useGetList = () => {
  const [allBrochure, setAllBrochure] = useState([]);
  const [myBrochures, setMyBrochures] = useState([]);
  const { userId } = useUser();

  useEffect(() => {
    const getAllBrochure = async () => {
      console.log("getallbrochure");
      const _trips = [];
      try {
        const docs = await db.collection("trips").get();
        docs.forEach((doc) => {
          _trips.push({
            tripId: doc.id,
            ...doc.data(),
          });
        });
        console.log("getAll");
        setAllBrochure(_trips);
      } catch (error) {
        alert(error);
      }
    };
    getAllBrochure();
  }, []);

  useEffect(() => {
    const getMyBrochures = async () => {
      const results = [];
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
        console.log("mybrochures");
        if (results.length === 0) {
          return;
        } else {
          setMyBrochures(results);
        }
      } catch (error) {
        alert(error);
      }
    };
    getMyBrochures();
  }, [userId]);
  return { allBrochure, myBrochures };
};

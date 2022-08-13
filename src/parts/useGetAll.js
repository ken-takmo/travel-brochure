import { useEffect, useState } from "react";
import { db } from "../database/db";

export const useGetAll = () => {
  const [allBrochure, setAllBrochure] = useState([]);

  useEffect(() => {
    const getAllBrochure = async () => {
      console.log("getallbrochure");
      const _trips = [];
      try {
        const docs = await db
          .collection("trips")
          .orderBy("createdAt", "desc")
          .get();
        docs.forEach((doc) => {
          _trips.push({
            tripId: doc.id,
            ...doc.data(),
          });
        });
        setAllBrochure(_trips);
      } catch (error) {
        alert(error);
      }
    };
    getAllBrochure();
  }, []);

  return { allBrochure };
};

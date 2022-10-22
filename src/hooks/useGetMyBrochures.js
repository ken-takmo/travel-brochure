import { useState, useEffect } from "react";
import { useAuth } from "../providers/AuthContext";
import { db } from "../database/db";
import { getBrochureDataList } from "./getBrochureDataList";

export const useGetMyBrochures = () => {
  const [myBrochures, setMyBrochures] = useState([]);
  const [isAuth] = useAuth();
  useEffect(() => {
    const getMyBrochures = async () => {
      try {
        const docs = await db
          .collection("trips")
          .where("userId", "==", `${isAuth.uid}`)
          .orderBy("createdAt", "desc")
          .get();
        const results = getBrochureDataList(docs);
        setMyBrochures(results);
      } catch (error) {
        alert(error);
      }
    };
    getMyBrochures();
  }, [isAuth.uid]);
  return myBrochures;
};

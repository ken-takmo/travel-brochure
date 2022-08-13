import { useState, useEffect } from "react";
import { useAuth } from "../providers/AuthContext";
import { db } from "../database/db";
export const useGetMyBrochures = () => {
  const [myBrochures, setMyBrochures] = useState([]);
  const [isAuth] = useAuth();
  useEffect(() => {
    const getMyBrochures = async () => {
      const results = [];
      try {
        const docs = await db
          .collection("trips")
          .where("userId", "==", `${isAuth.uid}`)
          .orderBy("createdAt", "desc")
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
  }, [isAuth.uid]);
  return myBrochures;
};

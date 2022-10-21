import { useEffect, useState } from "react";
import { db } from "../database/db";

// 命名brochureListに
export const useGetBrochureList = () => {
  const [brochureList, setBrochureList] = useState([]);

  useEffect(() => {
    const getBrochureListData = async () => {
      const brochureData_array = [];
      try {
        const docs = await db
          .collection("trips")
          .orderBy("createdAt", "desc")
          .get();
        docs.forEach((doc) => {
          brochureData_array.push({
            tripId: doc.id,
            ...doc.data(),
          });
        });
        setBrochureList(brochureData_array);
      } catch (error) {
        alert(error);
      }
    };
    getBrochureListData();
  }, []);

  return { brochureList };
};

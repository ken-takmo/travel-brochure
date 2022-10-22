import { useEffect, useState } from "react";
import { db } from "../database/db";
import { getBrochureDataList } from "./getBrochureDataList";

// 命名brochureListに
export const useGetBrochureList = () => {
  const [brochureList, setBrochureList] = useState([]);

  useEffect(() => {
    const getBrochureListData = async () => {
      try {
        const docs = await db
          .collection("trips")
          .orderBy("createdAt", "desc")
          .get();
        const data = getBrochureDataList(docs);
        setBrochureList(data);
      } catch (error) {
        alert(error);
      }
    };
    getBrochureListData();
  }, []);

  return { brochureList };
};

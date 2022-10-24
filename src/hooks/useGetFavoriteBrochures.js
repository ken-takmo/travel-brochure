import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../database/db";

export const useGetFavoriteBrochures = (userId) => {
  const favoriteBrochuresRef = collection(
    db,
    "users",
    userId,
    "favoriteBrochures"
  );
  const [favoriteBrochuresDataList, setFavoriteBrochuresDataList] = useState(
    []
  );

  const getBrochuresData = (favoriteBroshuresDocRefs) => {
    const results = [];
    try {
      favoriteBroshuresDocRefs.forEach(async (brochure) => {
        const res = await getDoc(brochure);
        results.push({ tripId: res.id, ...res.data() });
        setFavoriteBrochuresDataList(results);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const createFavoriteBrochuresDocRefs = (favoriteDocs) => {
    const favoriteBroshuresDocRefs = [];
    favoriteDocs.map((result) => {
      favoriteBroshuresDocRefs.push(doc(db, "trips", result));
    });
    getBrochuresData(favoriteBroshuresDocRefs);
  };

  useEffect(() => {
    const favoriteDocs = [];
    const getFavoriteDocs = async () => {
      try {
        const results = await getDocs(favoriteBrochuresRef);
        results.forEach((result) => {
          favoriteDocs.push(result.id);
        });
        createFavoriteBrochuresDocRefs(favoriteDocs);
      } catch (err) {
        console.log(err);
      }
    };
    getFavoriteDocs();
  }, [userId]);

  return favoriteBrochuresDataList;
};

import { collection, getDocs } from "firebase/firestore";
import { db } from "../database/db";

export const useGetFavoriteUsers = (brochureId) => {
  const favoriteUsersRef = collection(db, "trips", brochureId, "goodUsers");

  const getFavoriteUsers = async () => {
    try {
      const res = await getDocs(favoriteUsersRef);
      console.log(res.userName);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  return { getFavoriteUsers };
};

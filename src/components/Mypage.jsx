import { useState, useEffect } from "react";
import { db } from "../database/db";
import { useUser } from "../parts/useUser";
import { Getlist } from "../parts/list";
export const Mypage = () => {
  const { userId } = useUser();
  const [myBrochures, setMyBrochures] = useState(undefined);
  const results = [];
  useEffect(() => {
    const getMyBrochures = async () => {
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
  return (
    <>
      {myBrochures ? (
        <main>
          <h1>マイ投稿</h1>
          {<Getlist deta={myBrochures} />}
        </main>
      ) : (
        <div className="no-mybrochures">
          <h2>投稿がありません</h2>
        </div>
      )}
    </>
  );
};

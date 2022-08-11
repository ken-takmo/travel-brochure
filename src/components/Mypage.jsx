import { useState, useEffect } from "react";
import { db } from "../database/db";
import { Getlist } from "../parts/list";
import { useGetList } from "../parts/useGetList";
export const Mypage = () => {
  const { myBrochures } = useGetList();
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

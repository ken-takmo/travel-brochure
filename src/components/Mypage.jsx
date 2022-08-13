import { Getlist } from "../parts/list";
import { useGetMyBrochures } from "../parts/useGetMyBrochures";
export const Mypage = () => {
  const myBrochures = useGetMyBrochures();
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

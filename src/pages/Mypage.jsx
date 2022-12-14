import { GetList } from "../components/GetList";
import { useGetMyBrochures } from "../hooks/useGetMyBrochures";
export const Mypage = () => {
  const myBrochures = useGetMyBrochures();
  return (
    <>
      {!myBrochures.length == 0 ? (
        <main className="mypage">
          <h1>マイ投稿</h1>
          {
            <div className="brochures">
              <GetList deta={myBrochures} />
            </div>
          }
        </main>
      ) : (
        <div className="no-content">
          <h2>投稿がありません</h2>
        </div>
      )}
    </>
  );
};

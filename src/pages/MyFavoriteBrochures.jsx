import { useGetFavoriteBrochures } from "../hooks/useGetFavoriteBrochures";
import { useAuth } from "../providers/AuthContext";
import { GetList } from "../components/GetList";
export const MyFavoriteBroshures = () => {
  const [isAuth] = useAuth();
  const favoriteBrochuresData = useGetFavoriteBrochures(isAuth.uid);
  console.log(favoriteBrochuresData);

  return (
    <main className="favorite-brochures">
      <h2>お気に入り</h2>
      {favoriteBrochuresData.length == 0 ? (
        <div className="no-content">
          <h3>お気に入りのしおりはまだありません</h3>
        </div>
      ) : (
        <div className="brochures">
          {<GetList deta={favoriteBrochuresData} />}
        </div>
      )}
    </main>
  );
};

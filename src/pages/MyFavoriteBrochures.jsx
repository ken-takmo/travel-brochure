import { useGetFavoriteBrochures } from "../hooks/useGetFavoriteBrochures";
import { useAuth } from "../providers/AuthContext";
import { BrochureData } from "../components/BrochureData";
export const MyFavoriteBroshures = () => {
  const [isAuth] = useAuth();
  const favoriteBrochuresDataList = useGetFavoriteBrochures(isAuth.uid);
  console.log(favoriteBrochuresDataList);

  return (
    <main className="favorite-brochures">
      <h2>お気に入り</h2>
      {favoriteBrochuresDataList.length == 0 ? (
        <div className="no-content">
          <h3>お気に入りのしおりはまだありません</h3>
        </div>
      ) : (
        <div className="brochures">
          {<BrochureData data={favoriteBrochuresDataList} />}
        </div>
      )}
    </main>
  );
};

import { Getlist } from "../utils/list";
import { useGetAll } from "../hooks/useGetAll";
import skyImage from "../img/sky.jpg";

export const List = () => {
  const { allBrochure } = useGetAll();

  return (
    <main className="list" style={{ backgroundImage: `url(${skyImage})` }}>
      <h1>しおり一覧</h1>
      {<Getlist deta={allBrochure} />}
    </main>
  );
};

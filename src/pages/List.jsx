import { Getlist } from "../utils/list";
import { useGetAll } from "../hooks/useGetAll";
import skyImage from "../img/sky.jpg";

export const List = () => {
  const { allBrochure } = useGetAll();

  return (
    <main className="list">
      <h2>一覧</h2>
      {<Getlist deta={allBrochure} />}
    </main>
  );
};

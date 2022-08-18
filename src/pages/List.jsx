import { Getlist } from "../utils/list";
import { useGetAll } from "../hooks/useGetAll";

export const List = () => {
  const { allBrochure } = useGetAll();

  return (
    <main className="list">
      <h2>一覧</h2>
      <div className="list-image">{<Getlist deta={allBrochure} />}</div>
    </main>
  );
};

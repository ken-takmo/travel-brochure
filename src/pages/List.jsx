import { GetList } from "../components/GetList";
import { useGetAll } from "../hooks/useGetAll";

export const List = () => {
  const { allBrochure } = useGetAll();

  return (
    <main className="list">
      <h2>一覧</h2>
      <div className="list-image">{<GetList deta={allBrochure} />}</div>
    </main>
  );
};

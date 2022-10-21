import { BrochureData } from "../components/BrochureData";
import { useGetBrochureList } from "../hooks/useGetBrochureList";

export const List = () => {
  const { brochureList } = useGetBrochureList();
  return (
    <main className="list">
      <h2>一覧</h2>
      <div className="brochures">{<BrochureData deta={brochureList} />}</div>
    </main>
  );
};

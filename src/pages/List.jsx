import { Getlist } from "../utils/list";
import { useGetAll } from "../hooks/useGetAll";

export const List = () => {
  const { allBrochure } = useGetAll();

  return (
    <main>
      <h1>しおり一覧</h1>
      {<Getlist deta={allBrochure} />}
    </main>
  );
};

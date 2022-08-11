import { Getlist } from "../parts/list";
import { useGetList } from "../parts/useGetList";

export const List = () => {
  const { allBrochure } = useGetList();

  return (
    <main>
      <h1>しおり一覧</h1>
      {<Getlist deta={allBrochure} />}
    </main>
  );
};

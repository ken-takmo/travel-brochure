import { useGetAll } from "../parts/useGetAll";
import { Getlist } from "../parts/list";

export const List = () => {
  const trips = useGetAll();

  return (
    <main>
      <h1>しおり一覧</h1>
      {<Getlist deta={trips} />}
    </main>
  );
};

import { useContext } from "react";
import { FiltersContext } from "../context/Filter";

function useFilter() {
  const { filter, setFilter } = useContext(FiltersContext);

  const filterNews = (news) => {
    return news.filter((item) => item.deporte === filter);
  };

  return { filter, filterNews, setFilter };
}

export default useFilter;

import { useContext } from "react";
import { FiltersContext } from "../context/Filter";

function useFilter() {
  const { filter, setFilter } = useContext(FiltersContext);

  const filterNews = (news) => {
    return news.filter((sport) => sport.deporte === filter)
    .sort((a,b) =>  b.fecha > a.fecha)
  };

  return { filter, filterNews, setFilter };
}

export default useFilter;

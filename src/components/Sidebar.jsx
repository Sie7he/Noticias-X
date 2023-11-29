import useFilter from "../hooks/useFilter";
import "./sidebar.css";

const Sidebar = () => {

  const {setFilter} = useFilter()

  const toggleButton = (sport) => {
   setFilter(sport)
   
  }

  return (
    <aside className="sidebar">
      <nav>
        <span className="md:text-2xl text-sm text-center p-1">Deportes X</span>
        <hr />
        <button onClick={() => toggleButton('Football')}>
          <span className="material-symbols-outlined">sports_soccer</span>
          <span>Football</span>
        </button>
        <button onClick={() => toggleButton('Basketball')}>
          <span className="material-symbols-outlined">sports_basketball</span>
            <span>Basketball</span>
        </button>
        <button onClick={() => toggleButton('Tenis')}>
          <span className="material-symbols-outlined">sports_tennis</span>
          <span>Tenis</span>
        </button>
        <button onClick={() => toggleButton('Volleyball')}>
          <span className="material-symbols-outlined">sports_volleyball</span>
          <span>Volleyball</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;

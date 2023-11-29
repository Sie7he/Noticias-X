import './App.css'
import Sidebar from './components/Sidebar'
import Sports from './components/Sports'
import useFilter from './hooks/useFilter'
import {noticias_deportes as noticias} from './data/noticias.json'



function App() {
  const {filterNews} = useFilter();
  const filteredNews = filterNews(noticias);

  return (
    <>
    
      <Sidebar />
      <Sports sport = {filteredNews}/>
  
    </>
  )
}

export default App

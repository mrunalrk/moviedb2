import {Route,Routes} from "react-router-dom";
import Popular from "./pages/Popular";
import Navbar from "./components/Navbar";
import SingleMovie from "./pages/SingleMovie";
import Search from "./pages/Search";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Popular/>}/>
      <Route path="/popular/:id" element={<Popular/>}/>
      <Route path="/movie/:id" element={<SingleMovie/>} exact/>
      <Route path="/search/:query" element={<Search/>}/>
      <Route path="/top-rated/:id" element={<TopRated/>}/>
      <Route path="/upcoming/:id" element={<Upcoming/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;

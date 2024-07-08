import { Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ProvincePage from "./pages/province";
import ProvinceFormPage from "./pages/province/ProvinceFormPage";
import GamesPage from "./pages/GamesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/chosengames" Component={GamesPage}/>
        <Route path="/profile" Component={ProfilePage} />
        <Route path="/province" Component={ProvincePage} />
        <Route path="/province/:key" Component={ProvinceFormPage} />
        <Route path="/" Component={HomePage} />
      </Routes>
    </>
  );
}

export default App;

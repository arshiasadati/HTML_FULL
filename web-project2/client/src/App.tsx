import { Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ProvincePage from "./pages/province";
import MemberPage from "./pages/member";
import ProvinceFormPage from "./pages/province/ProvinceFormPage";
import LoginPage from "./pages/member/LoginPage";
import MemberFormPage from "./pages/member/MemberFormPages";
import RegisterPage from "./pages/member/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/profile" Component={ProfilePage} />
        <Route path="/provinces" Component={ProvincePage} />
        <Route path="/provinces/:key" Component={ProvinceFormPage} />
        <Route path="/members" Component={MemberPage} />
        <Route path="/members/:key" Component={MemberFormPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/" Component={HomePage} />
      </Routes>
    </>
  );
}

export default App;

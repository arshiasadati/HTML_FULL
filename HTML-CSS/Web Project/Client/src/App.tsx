import { Route, Routes } from "react-router-dom";

import Menu from "./Components/Menu";
import ProvinceForm from "./Components/Pages/Provinces/ProvinceForm";

function App() {
  return (
      <div style={{direction : "rtl" , width : "vmax" , height : "vmax"}}>
        <Menu/>
        {/* <TitleLabel/> */}
        <Routes>
          <Route path="/"/>
          <Route path="/province" Component={ProvinceForm}/>
        </Routes>
      </div>

  );
}

export default App;

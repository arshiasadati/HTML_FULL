import { Route, Routes } from "react-router-dom";
import TitleLabel from "./Components/TitleLabel";
import SubmitButton from "./Components/SubmitButton";
import RegisterInput from "./Components/RegisterInput";
import InputEmail from "./Components/InputEmail";
import Menu from "./Components/Menu";
import MinesButton from "./Components/PlusMines/PlusMinesButton";

function App() {
  return (
      <div style={{direction : "rtl" , width : "vmax" , height : "vmax"}}>
        <Menu/>
        {/* <TitleLabel/> */}
        <Routes>
          <Route path="/"/>
          <Route path="/register" Component={RegisterInput}/>
          <Route path="/button" Component={MinesButton}/>
          <Route path="/email" Component={InputEmail}/>
        </Routes>
      </div>

  );
}

export default App;

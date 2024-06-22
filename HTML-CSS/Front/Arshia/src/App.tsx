import MinesButton from "./Components/PlusMines/PlusMinesButton";
import WelomeTextBox from "./Components/TextBox/WelomeTextBox";
import TitleLabel from "./Components/TitleLabel";

function App() {
  return (
    <div>
      <TitleLabel Firstname={"Arshia"} Lastname={"Sadati"} Favoritegame={"Dota2"}/>
      <div>
        <MinesButton/>
      </div>
      <div>
        <WelomeTextBox/>
      </div>
    </div>
  );
}

export default App;

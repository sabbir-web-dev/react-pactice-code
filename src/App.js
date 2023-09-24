import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import AlinOne from "./Components/AlInOne/AlinOne";
import Toggole from "./Components/Toggle/Toggole";

function App() {

  return (
    <div className="wrap">

    <Toggole />
    <AlinOne />
    </div>
  );
}

export default App;
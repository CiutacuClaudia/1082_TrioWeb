import React from "react";
import List from "./components/List"
import Acasa from "./components/Acasa";
import ContulMeu from "./components/ContulMeu"
import Frigider from "./components/Frigider"
import OferaProdus from "./components/OferaProdus"
import Prieteni from "./components/Prieteni"
import ProduseDisponibile from "./components/ProduseDisponibile"
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <List/>
      <Switch>
      <Route exact path="/" component={Acasa} />
      <Route path="/contulmeu" component={ContulMeu} />
      <Route path="/frigiderulmeu" component={Frigider} />
      <Route path="/produseDisponibile" component={ProduseDisponibile} />
      <Route path="/prieteni" component={Prieteni} />
      <Route path="/oferaProdus" component={OferaProdus} />
      </Switch>
  </>
  );
}

export default App;

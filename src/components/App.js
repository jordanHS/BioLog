import React from 'react';
import Header from "./Header";
import SpeciesControl from "./SpeciesControl";
import Signin from "./Signin";
import { Browser as Router, Switch, Route} from "react-router-dom;"


function App() {
  return (
   <Router>
     <Header />
     <Switch>
       <Route path="/signin">
         <Signin />
       </Route>
       <Route path="/"> 
          <SpeciesControl />
       </Route>
     </Switch>
   </Router>
  );
}

export default App;

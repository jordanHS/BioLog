import React from 'react';
import Header from "./Header";
import SpeciesControl from "./SpeciesControl";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Register from "./Register"


function App() {
  return (
   <Router>
     <Header />
     <Switch>
       <Route path='/register'>
         <Register />
       </Route>
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

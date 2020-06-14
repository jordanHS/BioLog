import React from 'react';
import Header from "./Header";
import SpeciesControl from "./Species/SpeciesControl";


function App() {
  return (
    <React.Fragment>
      <Header />
      {/* SpeciesList /> */}
      <SpeciesControl />
    </React.Fragment>
  );
}

export default App;

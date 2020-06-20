import React from "react";
import PropTypes from "prop-types";
// import { render } from 'react-dom';
// import { useSpring, animated as a} from 'react-spring'
import './../App.css'


function SpeciesInfo(props){
  const { species, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>Species Info</h1>
      <h3>{species.commonName}</h3>
      <h3>{species.sciName}</h3>
      <h3>{species.type}</h3>
      <h3>{species.numberSeen}</h3>
      <h3>{species.description}</h3>
      <h3>{species.notes}</h3>
      <button onClick={ props.onClickingEdit }>Edit entry</button>
      <button onClick={()=> onClickingDelete(species.id) }>Delete entry</button>
      <hr/>
    </React.Fragment>
  );
}



SpeciesInfo.propTypes = {
  species: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

// render(<Card />, document.getElementById('root'))
export default SpeciesInfo;
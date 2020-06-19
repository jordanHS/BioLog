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

// function Card() {
//   const [flipped, set] = useState(false)
//   const { transform, opacity } = useSpring({
//     opacity: flipped ? 1:0,
//     transform: `persepective(600px) rotateX(${flipped ? 180 : 0})`,
//     config: { mass: 5, tension: 500, friction: 80 }
//   })
//   return (
//     <div onClick={() => set(state => !state)}>
//       <a.div class=" c back" style={{ opacity: opacity.interpolate( o => 1 - o), transform}}/>
//       <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`)}}/>
//     </div>
//   )
// }

SpeciesInfo.propTypes = {
  species: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

// render(<Card />, document.getElementById('root'))
export default SpeciesInfo;
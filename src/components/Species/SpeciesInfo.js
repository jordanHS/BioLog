import React from 'react';
import PropTypes from 'prop-types';

function SpeciesInfo(props){
    const { species, onClickingDelete} = props;
    return (
        <React.Fragment>
            <h1>Species Info</h1>
            <h3>Common Name: {species.commonName}</h3>
            <h3>Scientific Name: {species.sciName}</h3>
            <h3>Description: {species.description}</h3>
            <h3>Additional Notes: {species.notes} </h3>
            <h3>Number Seen: {species.numberSeen}</h3>
            <button onClick={()=> onClickingDelete(species.id)}>Delete</button>
        </React.Fragment>
    );
}

SpeciesInfo.propTypes = {
    species: PropTypes.object,
    onClickingDelete: PropTypes.func,
}

export default SpeciesInfo;
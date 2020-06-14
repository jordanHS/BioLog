import React from "react";
import PropTypes from "prop-types";

function Species(props) {
    return (
        <React.Fragment>
            <div onClick = {() => props.clickSpecies(props.id)}>
                <h2>Common Name: {props.commonName}</h2>
                <h3>Scientific name: {props.sciName}</h3>
                <h3>Number Seen: {props.numberSeen}</h3>
                <h3>Description: {props.description}</h3>
                <h3>Additional Notes: {props.notes}</h3>
                <hr/>
            </div>
        </React.Fragment>
    );
}


Species.propTypes = {
    commonName: PropTypes.string,
    sciName: PropTypes.string,
    description: PropTypes.string,
    notes: PropTypes.string,
    numberSeen: PropTypes.string,
    id: PropTypes.string,
    clickSpecies: PropTypes.func,
}

export default Species;
import React from "react";
import PropTypes from "prop-types";

function Species(props) {
    const { species } = props;
    return (
        <React.Fragment>
            <div onClick = {() => props.whenSpeciesClicked(species.id)}>
                <h2>Common name: {props.commonName}</h2>
                <h3>Scientific Name: {props.sciName}</h3>
                <h3>Description: {props.description}</h3>
                <h3>Additional Notes: {props.notes}</h3>
                <h3>Number seen: {props.numberSeen}</h3>
            </div>
        </React.Fragment>
    );
}

Species.propTypes = {
    commonName: PropTypes.string,
    sciName: PropTypes.string,
    description: PropTypes.string,
    notes: PropTypes.string,
    numberSeen: PropTypes.number
}

export default Species;


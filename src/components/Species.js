import React from "react";
import PropTypes from "prop-types";

function Species(props) {
    const { species } = props;
    return (
        <React.Fragment>
            <div onClick = {() => props.whenSpeciesClicked(species.id)}>
                <h2>Common name: {props.commonName}</h2>
                <h3>Scientific Name: {props.sciName}</h3>
            </div>
        </React.Fragment>
    );
}

Species.propTypes = {
    commonName: PropTypes.string,
    sciName: PropTypes.string,
}

export default Species;


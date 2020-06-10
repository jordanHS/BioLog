import React from "react";
import Species from "./Species";
import PropTypes from "prop-types";

function SpeciesList(props) {
    return (
        <React.Fragment>
            <hr />
            {props.speciesList.map((species) =>
            <Species whenSpeciesClicked={props.onSpeciesSelection}
                commonName={species.commonName}
                sciName={species.sciName}
                id={species.id}
                key={species.id} />
            )}
        </React.Fragment>
        );
    }

SpeciesList.PropTypes = {
    speciesList: PropTypes.array,
    onSpeciesSelection: PropTypes.func,
}

export default SpeciesList;
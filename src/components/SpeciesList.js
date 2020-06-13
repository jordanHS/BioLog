import React from "react";
import Species from "./Species";
import PropTypes from "prop-types";

function SpeciesList(props) {
    return (
        <React.Fragment>
            <hr />
            {props.speciesList.map((species) =>
            <Species clickSpecies={props.onSpeciesSelection}
                commonName={species.commonName}
                sciName={species.sciName}
                description={species.description}
                notes={species.notes}
                numberSeen={species.numberSeen}
                id={species.id}
                key={species.id} />
            )}
        </React.Fragment>
        );
    }

SpeciesList.propTypes = {
    speciesList: PropTypes.array,
    onSpeciesSelection: PropTypes.func,
}

export default SpeciesList;
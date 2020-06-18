import React from "react";
import Species from "./Species";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty} from 'react-redux-firebase'

function SpeciesList(props) {
    useFirestoreConnect([
        {collection: 'species'}
    ]);
    const speciesList = useSelector(state => state.firestore.ordered.species);
    if (isLoaded(speciesList)) {
        return (
            <React.Fragment>
                <hr />
                {speciesList.map((species) => {
                    return <Species
                        clickSpecies={props.onSpeciesSelection}
                        commonName={species.commonName}
                        sciName={species.sciName}
                        numberSeen={species.numberSeen}
                        description={species.description}
                        notes={species.notes}
                        id={species.id}
                        key={species.id} />
                })}
            </React.Fragment>
        );
    } else {
        return (
         <React.Fragment>
            <h3>Loading...</h3>
        </React.Fragment>
        )
    }
}
SpeciesList.propTypes = {
    onSpeciesSelection: PropTypes.func,
}

export default SpeciesList;
import React from "react";
import ReusableSpeciesForm from "./ReusableSpeciesForm";
import PropTypes from "prop-types";
import Species from "./Species";
import { useFirestore } from "react-redux-firebase";

function EditNewSpecies (props) {
const firestore = useFirestore();

    function editFormSubmission(event) {
        event.preventDefault();
        props.onEditSpecies();
        const propertiesToUpdate = {
            commonName: event.target.commonName.value, 
            sciName: event.target.sciName.value, 
            numberSeen: event.target.numberSeen.value, 
            description: event.target.description.value, 
            notes: event.target.notes.value, 
            }
            return firestore.update({collection: 'species', doc: Species.id}, propertiesToUpdate)
    }

    return (
        <React.Fragment>
            <ReusableSpeciesForm
            formSubmissionHandler={editFormSubmission}
            buttonText="Edit entry"/>
        </React.Fragment>
    );
}


EditNewSpecies.propTypes = {
    onEditSpecies: PropTypes.func
}

export default EditNewSpecies;

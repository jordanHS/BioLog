import React from "react";
import ReusableSpeciesForm from "./ReusableSpeciesForm";
import PropTypes from "prop-types";

function EditNewSpecies (props) {
    const { species } = props;

    function handleEditSpeciesFormSubmission(event) {
        event.preventDefault();
        props.onEditSpecies({commonName: event.target.commonName.value, sciName: event.target.sciName.value, numberSeen: event.target.numberSeen.value, description: event.target.description.value, notes: event.target.notes.value, id: species.id})
    }

    return (
        <React.Fragment>
            <ReusableSpeciesForm
            formSubmissionHandler={handleEditSpeciesFormSubmission}
            buttonText="Edit entry"/>
        </React.Fragment>
    );
}


EditNewSpecies.propTypes = {
    onEditSpecies: PropTypes.func
}

export default EditNewSpecies;

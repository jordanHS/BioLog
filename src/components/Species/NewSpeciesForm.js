import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableSpeciesForm from "./ReusableSpeciesForm";


function NewSpeciesForm(props) {
    return(
        <React.Fragment>
           <ReusableSpeciesForm
           formSubmissionHandler={handleNewSpeciesFormSubmission}
            buttonText="Add entry"/>
        </React.Fragment>
    );

    function handleNewSpeciesFormSubmission(event) {
        event.preventDefault();
        props.onNewSpeciesCreation({commonName: event.target.commonName.value, sciName: event.target.sciName.value, numberSeen: event.target.numberSeen.value, description: event.target.description.value, notes: event.target.notes.value, id: v4()});
    }
}

NewSpeciesForm.propTypes = {
    onNewSpeciesCreation: PropTypes.func
}

export default NewSpeciesForm;
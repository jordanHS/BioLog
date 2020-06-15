import React from "react";
import PropTypes from "prop-types";
import ReusableSpeciesForm from "./ReusableSpeciesForm";
import { useFirestore } from 'react-redux-firestore';

function NewSpeciesForm(props) {
    const firestore = useFirestore()
    function handleNewSpeciesFormSubmission(event) {
        event.preventDefault();
        props.onNewSpeciesCreation();
        return firestore.collection('species').add(
            {
                commonName: event.target.commonName.value,
                sciName: event.target.sciName.value,
                numberSeen: event.target.numberSeen.value,
                description: event.target.description.value,
                notes: event.target.notes.value   
            }
        );
    }
    return(
        <React.Fragment>
           <ReusableSpeciesForm
           formSubmissionHandler={handleNewSpeciesFormSubmission}
            buttonText="Add entry"/>
        </React.Fragment>
    );

    
}

NewSpeciesForm.propTypes = {
    onNewSpeciesCreation: PropTypes.func
}

export default NewSpeciesForm;
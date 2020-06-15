import React from "react";
import PropTypes from "prop-types";
import ReusableSpeciesForm from "./ReusableSpeciesForm";
import { useFirestore } from 'react-redux-firebase';

function NewSpeciesForm(props) {
    const firestore = useFirestore()
    function addSpeciesToFirestore(event) {
        event.preventDefault();
        props.onNewSpeciesCreation();
        return firestore.collection('animals').add(
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
           formSubmissionHandler={addSpeciesToFirestore}
            buttonText="Add entry"/>
        </React.Fragment>
    );

    
}

NewSpeciesForm.propTypes = {
    onNewSpeciesCreation: PropTypes.func
}

export default NewSpeciesForm;
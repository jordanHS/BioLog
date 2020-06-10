import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";


function NewSpeciesForm(props) {
    return(
        <React.Fragment>
            <form onSubmit={handleNewSpeciesFormSubmission}>
                <input
                    type='text'
                    name='commonName'
                    placeholder='Common Name' />
                <input
                    type='text'
                    name='sciName'
                    placeholder='Scientific Name'/>
                <input
                    type='number'
                    name='numberSeen'
                    placeholder='0'/>
                <textarea
                    name='description'
                    placeholder='Description'/>
                <textarea
                    name='notes'
                    placeholder='Additional notes'/>
                <button type='submit'>Submit</button>
            </form>
        </React.Fragment>
    );

    function handleNewSpeciesFormSubmission(event) {
        event.preventDefault();
        props.onNewSpeciesCreation({commonName: event.target.commonName.value, sciName: event.target.sciName.value, numberSeen: event.target.numberSeen.value, description: event.target.description.value, notes: event.target.notes.value})
    }
}

NewSpeciesForm.propTypes = {
    onNewSpeciesCreation: PropTypes.func
}

export default NewSpeciesForm;
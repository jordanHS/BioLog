import React from "react";
import PropTypes from "prop-types";
import TypeSelector from "./TypeSelector"

function ReusableForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>
                <input 
                    type='text'
                    name='commonName'
                    placeholder='Common Name'/> <br></br>
                <TypeSelector /> 
                <input
                    type='text'
                    name='sciName'
                    placeholder='Scientific Name'/> <br></br>
                <input
                    type='number'
                    name='numberSeen'
                    placeholder='0'/> <br></br>
                <textarea
                    name='description'
                    placeholder='Description'/> <br></br>
                <textarea
                    name='notes'
                    placeholder='Additional notes'/> <br></br>
                <button type='submit'>{props.buttonText}</button>
            </form>
        </React.Fragment>
    );
}

ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string,
};

export default ReusableForm;
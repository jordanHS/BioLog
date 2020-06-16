import React from "react";
import NewSpeciesForm from "./NewSpeciesForm";
import SpeciesList from "./SpeciesList";
import SpeciesInfo from "./SpeciesInfo";
import EditSpeciesForm from './EditSpeciesForm';
import * as a from '../../actions/index';
import { withFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class SpeciesControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formVisibleOnPage: false,
            selectedSpecies: null,
            editing: false
        };
        this.handleClick = this.handleClick.bind(this);
    } 

    handleClick = () => {
        if (this.state.selectedSpecies != null) {
          this.setState({
            selectedSpecies: null,
            editing: false
          });
        } else {
            const { dispatch } = this.props;
            const action = a.toggleForm();
            dispatch(action);
    }
  }

    handleAddingNewSpeciesToList = () => {
       const {dispatch} = this.props;
        const action = a.toggleForm();
        dispatch(action);
    }

    handleChangingSelectedSpecies = (id) => {
      this.props.firestore.get({collection: 'species', doc: id}).then((species) =>{
          const firestoreSpecies = {
              commonName: species.get("common name"),
              sciName: species.get("scientific name"),
              numberSeen: species.get('number seen'),
              description: species.get("description"),
              notes: species.get("additional notes"),
              id: species.id
          }
          this.setState({selectedSpecies: firestoreSpecies})
      })
    }

    handleDeletingSpecies = () => {
       const { dispatch } = this.props;
       const action = a.deleteSpecies();
       dispatch(action);
    }

    handleEditClick = () => {
        this.setState({editing: true});
    }

    handleEditingSpecies = (speciesToEdit) => {
        const editedMasterSpeciesList = this.state.masterSpeciesList.filter(species => species.id !== this.state.selectedSpecies.id).concat(speciesToEdit);
        this.setState({
            masterSpeciesList: editedMasterSpeciesList,
            editing: false,
            selectedSpecies: null
        });
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;

        if (this.state.editing) {
            currentlyVisibleState = <EditSpeciesForm species = {this.state.selectedSpecies} onEditTicket= {this.handleEditingSpecies}/>
            buttonText = "Return to Species List";
        }
        else if(this.state.selectedSpecies != null) {
            currentlyVisibleState = <SpeciesInfo species = {this.state.selectedSpecies} onClickingDelete = {this.handleDeletingSpecies} onClickingEdit = {this.handleEditClick} />
            buttonText = "Return to Species"
        }
        else if(this.state.selectedSpecies != null) {
            currentlyVisibleState = <SpeciesInfo species ={this.state.selectedSpecies} />
            buttonText = "Return to Species List";
        }
        else if(this.props.formVisibleOnPage) {
            currentlyVisibleState = <NewSpeciesForm onNewSpeciesCreation = {this.handleAddingNewSpeciesToList}/>
            buttonText = "Return to Species List";
        } else {
            currentlyVisibleState = <SpeciesList speciesList={this.props.masterSpeciesList} onSpeciesSelection={this.handleChangingSelectedSpecies}/>
            buttonText = "Add Species";
        }
    return (
        <React.Fragment>
            {currentlyVisibleState}
             <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
        );
    }
}

SpeciesControl.propTypes = {
    masterSpeciesList: PropTypes.object
}

const mapStateToProps = state => {
    return {
        masterSpeciesList: state.masterSpeciesList,
        formVisibleOnPage: state.formVisibleOnPage,
    }
}

SpeciesControl = connect(mapStateToProps)(SpeciesControl);

export default withFirestore(SpeciesControl);
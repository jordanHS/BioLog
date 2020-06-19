import React from "react";
import NewSpeciesForm from "./NewSpeciesForm";
import SpeciesList from "./SpeciesList";
import SpeciesInfo from "./SpeciesInfo";
import EditSpeciesForm from './EditSpeciesForm';
import * as a from './../actions/index';
import { withFirestore, isLoaded } from 'react-redux-firebase';
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
              commonName: species.get("commonName"),
              sciName: species.get("sciName"),
              numberSeen: species.get('numberSeen'),
              description: species.get("description"),
              notes: species.get("notes"),
              id: species.id
          }
          this.setState({selectedSpecies: firestoreSpecies})
      })
    }

    handleDeletingSpecies = (id) => {
       this.props.firestore.delete({collection: 'species', doc: id});
       this.setState({selectedSpecies: null})
    }

    handleEditClick = () => {
        this.setState({editing: true});
    }

    handleEditingSpecies = () => {
        this.setState({
            editing: false,
            selectedSpecies: null
        });
    }


    render() {
        const auth = this.props.firebase.auth();
        if (!isLoaded(auth)) {
            return (
                <React.Fragment>
                    <h1>Loading...</h1>
                </React.Fragment>
            )
        }
        if ((isLoaded(auth)) && (auth.currentUser == null)) {
            return (
                <React.Fragment>
                    <h1>You must be signed in to add entries to the catalogue</h1>
                </React.Fragment>
            )
        }
        if ((isLoaded(auth)) && (auth.currentUser != null)) {
        let currentlyVisibleState = null;
        let buttonText = null;

        if (this.state.editing) {
            currentlyVisibleState = <EditSpeciesForm species = {this.state.selectedSpecies} onEditSpecies= {this.handleEditingSpecies}/>
            buttonText = "Return to Species List";
        }
        else if(this.state.selectedSpecies != null) {
            currentlyVisibleState = <SpeciesInfo species = {this.state.selectedSpecies} onClickingDelete = {this.handleDeletingSpecies} onClickingEdit = {this.handleEditClick} />
            buttonText = "Return to Species"
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
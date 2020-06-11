import React from "react";
import NewSpeciesForm from "./NewSpeciesForm";
import SpeciesList from "./SpeciesList";
import SpeciesInfo from "./SpeciesInfo";

class SpeciesControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formVisibleOnPage: false,
            masterSpeciesList: [],
            selectedSpecies: null
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        if (this.state.selectedSpecies != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedSpecies:null
            });
        } else {
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage,
            }));
        }
    }

    handleAddingNewSpeciesToList = (newSpecies) => {
        const newMasterSpeciesList = this.state.masterSpeciesList.concat(newSpecies);
        this.setState({masterSpeciesList: newMasterSpeciesList,
                        formVisibleOnPage: false})
    }

    handleChangingSelectedSpecies = (id) => {
        const selectedSpecies = this.state.masterSpeciesList.filter(species => species.id === id)[0];
        this.setState({selectedSpecies: selectedSpecies})
    }

    handleDeletingSpecies = (id) => {
        const newMasterSpeciesList = this.state.masterSpeciesList.filter(species => species.id !== id);
       this.setState({
           masterSpeciesList: newMasterSpeciesList,
           selectedSpecies: null
       })
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;

        if(this.state.selectedSpecies != null) {
            currentlyVisibleState = <SpeciesDetail species = {this.state.selectedSpecies} onClickingDelete = {this.handleDeletingSpecies}/>
            buttonText = "Return to Species"
        }
        else if(this.state.selectedSpecies != null) {
            currentlyVisibleState = <SpeciesDetail species ={this.state.selectedSpecies} />
            buttonText = "Return to Species List";
        }
        else if(this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewSpeciesForm onNewSpeciesCreation = {this.handleAddingNewSpeciesToList}/>
            buttonText = "Return to Species List";
        } else {
            currentlyVisibleState = <SpeciesDetail speciesList={this.state.masterSpeciesList} onNewSpeciesCreation={this.handleChangingSelectedSpecies}/>
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

export default SpeciesControl;
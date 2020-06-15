import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';
import speciesListReducer from './species-list-reducer';
import formVisibleReducer from './form-visible-reducer';

const rootReducer = combineReducers({
    formVisibleOnPage: formVisibleReducer,
    masterSpeciesList: speciesListReducer,
    firestore: firestoreReducer
});

export default rootReducer;
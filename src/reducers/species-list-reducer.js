import * as c from './../actions/ActionTypes';
import NewSpeciesForm from '../components/Species/NewSpeciesForm';

export default (state = {}, action) => {
    const { id } = action;
    switch (action.tye) {
    case c.DELETE_SPECIES:
        const newState = { ...state};
        delete newState[id];
        return newState;
    default:
        return state;
    }
};
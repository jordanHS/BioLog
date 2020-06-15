import * as c from './ActionTypes';

export const deleteSpecies = id => ({
    type: c.DELETE_TICKET,
    id
});

export const toggleForm = () => ({
    type: c.TOGGLE_FORM
})
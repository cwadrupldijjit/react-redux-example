// This example has the exact same reducer/store setup
// as the other project.  How the store is used is
// different, though.  The place that the store goes
// next is the "index.js" file.

import * as redux from 'redux';

const initialState = {
    count: 0,
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case '+':
            return {
                ...state,
                count: state.count + 1,
            };
        
        case '-':
            return {
                ...state,
                count: state.count - 1,
            };
        
        default: break;
    }
    
    return state;
}

const store = redux.createStore(reducer);

export default store;
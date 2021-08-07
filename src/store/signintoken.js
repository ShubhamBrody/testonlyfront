import { createStore } from 'redux';

const adminReducer = (state = {signedIn: false}, action) => {
    if(action.type === 'SIGNED_IN') {
        return {signedIn: true};
    }
    else if(action.type === 'SIGNED_OUT') {
        return {signedIn: false};
    }

    return state;
}

const store = createStore(adminReducer);

export default store;
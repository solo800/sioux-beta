import {createStore, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import reducer from '../reducers/rootReducer';

export default function (initialState) {
    return createStore(
        reducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    );
}

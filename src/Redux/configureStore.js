import {createStore, applayMiddleware,compose} from 'redux';
import rootReducer from './Reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';


export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support rdux for dev tools
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applayMiddleware(reduxImmutableStateInvariant()))
    );
}

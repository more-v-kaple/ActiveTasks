
import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const middleware = [
    thunk
].filter(Boolean);

function configureStore (initialState) {
    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default;

            store.replaceReducer(nextReducer);
        });
    }

    return store;
}

export default configureStore;

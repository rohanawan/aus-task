import {compose, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {rootReducer} from '../reducers';

const persistConfig = {key: 'root', storage};

const composeEnhancers = (process.env.REACT_APP_NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeEnhancers());

const persistor = persistStore(store);

export {store, persistor}
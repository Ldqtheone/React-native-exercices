import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

// Redux Persist
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import todoReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  todoReducer: persistReducer(persistConfig, todoReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

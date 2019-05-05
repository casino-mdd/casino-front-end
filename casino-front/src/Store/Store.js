import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import office from './Reducers/OfficeReducer';
import employee from './Reducers/EmployeeReducer';
import client from './Reducers/ClientReducer';
import user from './Reducers/UserReducer';

const rootReducer = combineReducers({
    office,
    employee,
    client,
    user
});

const store = createStore(
  rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;




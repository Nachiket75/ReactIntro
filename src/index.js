import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers,applyMiddleware} from 'redux'
import counterReducer from './Store/reducers/counter'
import resultReducer from './Store/reducers/result'
import {Provider} from 'react-redux'

const logger = store => {
    return next =>{
        return action =>{
            console.log('[Middleware] Dispatching',action)
            const result = next(action)
            console.log('[Middleware] next result',store.getState())
            return result;
        }
    }
}

const rootReducer = combineReducers({
    ctr:counterReducer,
    res:resultReducer
})

const store = createStore(rootReducer,applyMiddleware(logger))  
ReactDOM.render(<Provider store={store}><App/></Provider> , document.getElementById('root'));
registerServiceWorker();

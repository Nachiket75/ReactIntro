import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import ingredientReducer from './Store/reducer/Ingredientreducer';
import authReducer from './Store/reducer/authReducer'

import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    ing:ingredientReducer,
    auth:authReducer
})

const composeEnhancers = process.env.NODE_ENV === 'development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :null || compose; 
const store = createStore(rootReducer,composeEnhancers( applyMiddleware(thunk) ));
const app=(
    <Provider store = {store}>
        <BrowserRouter>
        <App />    
        </BrowserRouter>  
    </Provider>
    
);

ReactDOM.render(app , document.getElementById('root'));
registerServiceWorker();

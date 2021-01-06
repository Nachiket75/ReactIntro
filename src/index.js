import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import reducer from './Store/reducer';

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() found in link https://github.com/zalmoxisus/redux-devtools-extension in 1.1 section
const app=(
    <Provider store = {store}>
        <BrowserRouter>
        <App />    
        </BrowserRouter>  
    </Provider>
    
);

ReactDOM.render(app , document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reducers from './reducers.jsx'
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';

const reducers = combineReducers({
    Reducers,
});
const store = createStore(reducers);
if(localStorage.jwtToken) {
    store.dispatch({type: 'addUserProfile', data: JSON.parse(localStorage.getItem('jwtToken'))})
}
/*store.dispatch({type: 'addUserProfile', data: JSON.parse(localStorage.getItem('jwtToken'))})*/

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {subscriber} from "./State"
import {like} from "./State";



let renderAllTree = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} like={like}/>
        </React.StrictMode>
    );
}
renderAllTree();
subscriber(renderAllTree);
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import ProjectChanllenge10 from './10Project-challenge';
// import ProjectChanllenge15 from './15Project-challenge';
// import ReactRouterExample from './16ReactRouter/ReactRouterExample';
// import { BrowserRouter as Router } from 'react-router-dom';
import MathsMagicians from './maths-magicians';
import { StoreProvider } from 'easy-peasy';
import store from './store/store';
// import ShoppingList from './ShoppingList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StoreProvider store={store} >
        <React.StrictMode>
            {/* <App /> */}
            {/* <ShoppingList /> */}
            {/* <ProjectChanllenge10 /> */}
            {/* <ProjectChanllenge15 /> */}
            {/* <Router>
            <ReactRouterExample />
        </Router> */}
            <MathsMagicians />
        </React.StrictMode>
    </StoreProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

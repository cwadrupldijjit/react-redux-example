import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// Here we connect Redux to our react application.
// The first thing we bring in is our store that we
// set up in the "redux.js" file.
import store from './redux';

// The next thing is the Provider component from the
// react-redux library.
import { Provider } from 'react-redux';

ReactDOM.render(
    // We put the Provider on the outside of the App
    // component because the Provider gives access to
    // the store for any of the Connect components
    // used elsewhere.  The Provider _must_ wrap
    // everything in order for react-redux to do its
    // thing.  To see the final redux elements, look
    // in the "App.js" file.
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from './components/ItemList';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const logger = createLogger({});

let store = createStore(rootReducer, applyMiddleware(thunk, logger))

const Wrapped = () => (
    <Provider store={store}>
        <MuiThemeProvider>
            <ItemList />
        </MuiThemeProvider>
    </Provider>
);

ReactDOM.render(<Wrapped />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Route, IndexRoute  } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reduxPromise from 'redux-promise';
// import { reducer } from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { App } from './components/App';

// export const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxPromise)));


let userRouter = (
	<BrowserRouter>
		<App />
	</BrowserRouter>
)


ReactDOM.render(
    userRouter,
    document.querySelector('main')
);


// <--w W-->

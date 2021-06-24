import { createStore } from "redux";
import { rootReducer } from "./reducers";
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epic'

const epicMiddleware = createEpicMiddleware();

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(logger, epicMiddleware))
)

epicMiddleware.run(rootEpic);


export default store


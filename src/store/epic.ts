import { pingEpic } from "./pingpong/epics";
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(
	pingEpic
);
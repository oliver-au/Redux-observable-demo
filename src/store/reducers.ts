import { combineReducers } from "redux";
import pingPongReducer from './pingpong/reducer'

export const rootReducer = combineReducers({
  pingPong: pingPongReducer,
})


export type RootState = ReturnType<typeof rootReducer>
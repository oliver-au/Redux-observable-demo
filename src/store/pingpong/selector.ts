import { RootState } from '../reducers'
import { PingPongState } from './reducer'

export const pingPongSelector = (state: RootState): PingPongState => state.pingPong
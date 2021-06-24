import { PING, PONG } from './actions'

export type PingPongState = {
	isPingPong: boolean
}

const initialState: PingPongState = {
	isPingPong: false
}

const reducer = (state = initialState, action: any): PingPongState => {
	switch(action.type) {
		case PING:
			return {
				isPingPong: true
			}
		case PONG:
			return {
				isPingPong: false
			}
		default:
			return state		
	}
}

export default reducer
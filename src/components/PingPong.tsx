import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pingPongSelector } from '../store/pingpong/selector'
import { pingAction } from '../store/pingpong/actions'

const PingPong = () => {
	const dispatch = useDispatch()
	const pingPongState = useSelector(pingPongSelector)
	const isPingPong = pingPongState.isPingPong

	const handleClick = () => {
		dispatch(pingAction())
	}

	return (
		<>
			<h2>Ping Pong</h2>
			{JSON.stringify(isPingPong)}
			<button onClick={handleClick}>Swtich</button>
		</>
	)
}

export default PingPong
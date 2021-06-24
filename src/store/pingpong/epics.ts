import { Epic, ofType } from 'redux-observable'
import { Observable } from 'rxjs'
import { delay, mapTo } from 'rxjs/operators'
import { PING, PONG } from './actions'

type Action = {
	type: string
}

export const pingEpic: Epic = (action$: Observable<Action>): Observable<Action> => 
	action$.pipe(
		ofType(PING),
		delay(1000),
		mapTo({ type: PONG})
	)
import { LoginAction, Action } from './actions'
import { State, initialState, UserCredentials } from '../../common/constants'

function loginReducer(state: State, action: LoginAction): State {
	const { payload } = action
	const { username: newUserName, userId: newUserId } = payload
	let valid = true

	// Another validation -->
	if (state.user !== undefined) {
		valid = false
	}

	if (newUserName.length === 0 || newUserId.length === 0) {
		valid = false
	}

	const user: UserCredentials|undefined = valid ? {
		username: newUserName,
		userId: newUserId
	} : undefined

	return {
		...state,
		user
	}
}

function logoutReducer(state: State): State {
	// Possibly some validation?
	return {
		...state,
		user: undefined
	}
}

function mainReducer(state: State = initialState, action: Action): State {
	switch(action.type) {
	case 'LOGIN':
		return loginReducer(state, action as LoginAction)
	case 'LOGOUT':
		return logoutReducer(state)
	default:
		return state
	}
}

export default mainReducer

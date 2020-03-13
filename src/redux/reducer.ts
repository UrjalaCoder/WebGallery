import { LoginAction, LogoutAction, Action } from './actions'
import { State, initialState, UserCredentials } from '../constants/index'

function loginReducer(state: State, action: LoginAction) {
  const { payload } = action
  const { username: newUserName, userId: newUserId } = payload
  let valid: boolean = true

  // Another validation -->
  if (state.user !== undefined) {
    valid = false
  }

  if (newUserName.length === 0 || newUserId.length === 0) {
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

function logoutReducer(state: State, _action: LogoutAction): State {
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
      return logoutReducer(state, action as LogoutAction)
    default:
      return state
  }
}

export default mainReducer

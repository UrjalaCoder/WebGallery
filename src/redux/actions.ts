import { LoginCredentials } from '../constants/index'

type ACTION =
    'LOGIN'
  | 'LOGGED_IN'
  | 'LOGOUT'
  | 'LOGGED_OUT'
  | 'GALLERY_LOAD'
  | 'GALLERY_LOADED'

interface Action {
  type: ACTION
}

interface LoginAction extends Action {
  type: 'LOGIN'
  username: string
  password: string
}

interface LogoutAction extends Action {
  type: 'LOGOUT'
  userId: string
}

export function loginAction({ username, password }: LoginCredentials): LoginAction {
  return {
    type: 'LOGIN',
    username,
    password
  }
}

export function logoutAction({ userId }: { userId: string }): LogoutAction {
  return {
    type: 'LOGOUT',
    userId
  }
}

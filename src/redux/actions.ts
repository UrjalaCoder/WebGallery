import { UserCredentials } from '../../common/constants'

type ACTION =
    'LOGIN'
  | 'LOGIN_REQUEST'
  | 'LOGOUT'
  | 'LOGOUT_REQUEST'
  | 'GALLERY_LOAD'
  | 'GALLERY_LOAD_REQUEST'

export interface Action {
  type: ACTION;
}

export interface LoginAction extends Action {
  type: 'LOGIN';
  payload: {
    username: string;
    userId: string;
  };
}

export interface LogoutAction extends Action {
  type: 'LOGOUT';
  payload: {
    userId: string;
  };
}

export function loginAction({ username, userId }: UserCredentials): LoginAction {
	return {
		type: 'LOGIN',
		payload: {
			username,
			userId
		}
	}
}

export function logoutAction({ userId }: { userId: string }): LogoutAction {
	return {
		type: 'LOGOUT',
		payload: {
			userId
		}
	}
}

import { UserCredentials, LoginCredentials } from '../../common/constants'

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

export interface LoginRequestAction extends Action {
  type: 'LOGIN_REQUEST';
  payload: {
    username: string;
    password: string;
  };
}

export interface LogoutAction extends Action {
  type: 'LOGOUT';
  payload: {
    userId: string;
  };
}

export interface GalleryLoadRequestAction extends Action {
  type: 'GALLERY_LOAD_REQUEST';
  payload: {
    userId: string;
  };
}

export interface GalleryLoadAction extends Action {
  type: 'GALLERY_LOAD';
  payload: {
    urls: string[];
  };
}

export function loginRequestAction({ username, password }: LoginCredentials): LoginRequestAction {
	return {
		type: 'LOGIN_REQUEST',
		payload: {
			username,
			password
		}
	}
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

export function galleryLoadRequestAction({ userId }: { userId: string }): GalleryLoadRequestAction {
	return {
		type: 'GALLERY_LOAD_REQUEST',
		payload: {
			userId
		}
	}
}

export function galleryLoadAction({ urls }: { urls: string[] }): GalleryLoadAction {
	return {
		type: 'GALLERY_LOAD',
		payload: {
			urls
		}
	}
}

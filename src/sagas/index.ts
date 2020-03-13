import { takeLatest, put } from 'redux-saga/effects'
import { loginAction, LoginAction, GalleryLoadRequestAction } from '../redux/actions'

function* loginSaga(action: LoginAction) {
	const { username } = action.payload
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ username })
	}
	const result = yield fetch('http://localhost:3001/login', options)
		.then((res) => res.json())
		.then((jsonResult) => {
			return jsonResult.success
		})
	if(result) {
		yield put(loginAction({ username, userId: 'test' }))
	}
}

function* galleryLoadSaga(action: GalleryLoadRequestAction) {
	const { userId } = action.payload
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ userId })
	}
	const result = yield fetch('http://localhost:3001/gallery', options)
		.then((res) => res.json())
		.then((jsonResult) => {
			return {
				success: jsonResult.success,
				imageURLs: jsonResult.urls
			}
		})
	if(result.success) {
		yield put(loginAction({ userId: 'test' }))
	}
}

function* mySaga() {
	yield takeLatest('LOGIN_REQUEST', loginSaga)
}

export default mySaga

import { takeLatest } from 'redux-saga/effects'

function* loginSaga() {
  
}

function* mySaga() {
	yield takeLatest('LOGIN_REQUEST', loginSaga)
}

export default mySaga

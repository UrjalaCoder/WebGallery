import * as admin from 'firebase-admin'
import 'firebase/database'
import { LoginCredentials } from '../common/constants'

admin.initializeApp({
	credential: admin.credential.applicationDefault(),
	databaseURL: 'https://gallery-urjalacoder.firebaseio.com'
})

const database = admin.database()

export async function loginUser(params: LoginCredentials): Promise<boolean> {
	const { username } = params
	const match = await database.ref('users/').once('value').then((s) => {
		const userObject = s.val()
		const users = Object.keys(userObject)
		return users.find((u: string) => u === username)
	})
	if (match === undefined) {
		return false
	}
	await database.ref('users/' + username).update({
		loggedIn: true
	})
	return true
}

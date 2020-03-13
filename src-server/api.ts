import fetch from 'node-fetch'
import * as admin from 'firebase-admin'
import { LoginCredentials } from '../common/constants'

export function loginUser(params: LoginCredentials): void {
	const { username, password } = params
}

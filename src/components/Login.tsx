import React from 'react'
import { TextInput } from '../components/Generics/GenericTextInput'
import GenericButton from '../components/Generics/GenericButton'
import '../styles/pages/Login.css'

interface LoginProps {
  onSubmit: Function;
}

function Login(props: LoginProps): JSX.Element {

	const [username, setUsername]: [string, Function] = React.useState<string>('')
	const [password, setPassword]: [string, Function] = React.useState<string>('')
	const [ triedToSubmit, setTriedToSubmit ]: [boolean, Function] = React.useState<boolean>(false)

	const handleSubmit = (): void => {
		setTriedToSubmit(true)
		if (username.length > 0 && password.length > 0) {
			props.onSubmit({ username, password })
		}
	}

	return (
		<div>
			<form className="formContainer">
				<TextInput
					onChange={(s: string): void => setUsername(s)}
					id="usernameInput"
					inputType="text"
					value={username}
					isError={username.length == 0 && triedToSubmit}
					inputProps={
						{ placeholder: 'Username' }
					}
				/>
				<TextInput
					onChange={(s: string): void => setPassword(s)}
					id="passwordInput"
					inputType="password"
					value={password}
					isError={password.length == 0 && triedToSubmit}
					inputProps={
						{ placeholder: 'Password' }
					}
				/>
				<GenericButton onClick={(): void => handleSubmit()} type="default" text="Click me!" />
			</form>
		</div>
	)
}

export default Login

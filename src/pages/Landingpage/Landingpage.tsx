import React from 'react'
import Login from '../../components/Login'

interface LoginCredentials {
  username: string;
  password: string;
}

interface LandingpageProps {
  login: Function;
}

function Landingpage(props: LandingpageProps): JSX.Element {
	const handleLogin = ({ password, username }: LoginCredentials): void => {
		props.login({ password, username })
	}

	return (
		<div className="pageContainer">
			<Login
				onSubmit={handleLogin}
			/>
		</div>
	)
}

export default Landingpage

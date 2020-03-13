import { connect } from 'react-redux'
import { LoginCredentials, State } from '../../../common/constants'
import { loginRequestAction } from '../../redux/actions'
import Landingpage from './Landingpage'

const mapStateToProps = (state: State): object => {
	return state
}

const mapDispatchToProps = (dispatch: Function): object => {
	return {
		login: ({ username, password }: LoginCredentials): void => {
			dispatch(loginRequestAction({ username, password }))
		}
	}
}

export const Page = connect(mapStateToProps, mapDispatchToProps)(Landingpage)

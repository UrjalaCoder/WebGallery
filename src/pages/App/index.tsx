import { connect } from 'react-redux'
import { State } from '../../../common/constants'
import App from './App'

const mapStateToProps = (state: State): object => {
	const { user } = state
	return {
		view: user === undefined ? 'landing' : 'gallery'
	}
}

const mapDispatchToProps = (): object => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

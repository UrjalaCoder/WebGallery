import { connect } from 'react-redux'
import { State } from '../../../common/constants'
import { galleryLoadRequestAction } from '../../redux/actions'
import Gallery from './Gallery'

const mapStateToProps = (state: State): object => {
	return state
}

const mapDispatchToProps = (dispatch: Function): object => {
	return {
		loadGallery: ({ userId }: { userId: string }): void => {
			dispatch(galleryLoadRequestAction({ userId }))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)

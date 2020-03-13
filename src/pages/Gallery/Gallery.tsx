import React from 'react'
import { Gallery, UserCredentials } from '../../../common/constants'

interface GalleryProps {
  user: UserCredentials;
  gallery: Gallery|undefined;
  loadGallery: Function;
}

function GalleryElement(props: GalleryProps): JSX.Element {
	const { gallery, loadGallery, user } = props
	const galleryLoaded = gallery !== undefined

	if(!galleryLoaded || gallery === undefined) {
		loadGallery({ userId: user.userId })
		return (
			<h4>Loading</h4>
		)
	} else {
		return (
			<div>
				<h2>Loaded!</h2>
				{gallery.pictures.join(', ')}
			</div>
		)
	}
}

export default GalleryElement

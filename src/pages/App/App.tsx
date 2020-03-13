import React from 'react'
import '../../styles/index.css'
import { Page } from '../Landingpage/index'
import Gallery from '../Gallery'

interface AppProps {
  view: 'landing'|'gallery';
}

function App(props: AppProps): JSX.Element {
	const { view } = props
	return (
		<div className="mainContainer">
			{( view === 'landing' ? (<Page />) : (<Gallery />) )}
		</div>
	)
}

export default App

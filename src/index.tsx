import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App/'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './redux/reducer'
import sagas from './sagas'
import createSagaMiddleware from 'redux-saga'

const middleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(middleware))

middleware.run(sagas)

const element = (
	<Provider store={store}>
		<App />
	</Provider>
)
ReactDOM.render(element, document.getElementById('root'))

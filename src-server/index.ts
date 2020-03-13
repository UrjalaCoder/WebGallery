import 'core-js/stable'
import 'regenerator-runtime/runtime'
import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import { loginUser } from './api'

const app = express()
app.use(bodyParser())

/* Logger */
app.use('*', (req: express.Request, _res: express.Response, next: Function) => {
	console.log(req.path)
	console.log(req.method)
	next()
})

/* Script loader */
app.use('/dist', express.static(path.resolve('./dist')))

/* Main index file */
app.get('/', (_req: express.Request, res: express.Response) => {
	res.sendFile(path.resolve('./public', 'index.html'))
})

app.post('/login', (req: express.Request, res: express.Response): void => {
	const { username } = req.body
	loginUser({ username, password: '' }).then((result: boolean) => {
		res.end(JSON.stringify({ success: result }))
	})
})

/* Server start */
app.listen(process.env.PORT || 3001, () => {
	console.log('Server started!\n-----------\n')
})

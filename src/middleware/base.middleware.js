import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

const initBaseMiddleware = (app, express) => {
    app.use(express.json())
    app.use(bodyParser.json())
    app.use(cors())
    app.use(express.urlencoded({ extended: true }))
    app.use(morgan('dev'))
}


export default initBaseMiddleware;
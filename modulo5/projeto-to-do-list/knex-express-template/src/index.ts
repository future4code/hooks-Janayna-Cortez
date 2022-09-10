import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { router } from './routes/routes'

const app = express()
app.use(express.json())
app.use(cors())


app.use('/', router)

const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in ${address.address}:${address.port}`)
    } else {
        console.error('Failure upon starting server')
    }
})
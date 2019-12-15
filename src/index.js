const express = require ('express')
require('./db/mongoose')
const app = express()
const userRouter = require('./routers/users')
const gameRouter =  require('./routers/games')

const port = process.env.PORT || 8080


app.use(express.json())
app.use(userRouter)
app.use(gameRouter)

app.listen(port, () => {

    console.log('Server is running on ' + port)
})





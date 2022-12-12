const express = require('express')
const app = express()
const db = require('./config/db')
const cors = require('cors')
// const port = process.env.PORT || 4000;

app.use(cors())

// app.listen(4000, () => {
//     console.log(`server is running at port ${port}`)
// })
app.listen(4000, () => {
    console.log('server is running at port 4000')
})


db.connection
.once('open', () => console.log('connected to db'))
.on('err', (err) => console.log(err))


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/', require('./routes/root'))
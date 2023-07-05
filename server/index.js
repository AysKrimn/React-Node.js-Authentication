const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require('cors')
const app = express()

// veritabanını import et
const { databaseConnection } = require('./database/connection')
databaseConnection()

// login/ register API
const authAPI = require('./Routes/api/route')

const port = process.env.PORT


// corsu kullan
app.use(cors())
// verileri JSON formatında ayrıştır
app.use(express.json())

app.get('/', (req, res) => {

    res.send("Şuan anasayfadasın.")

})

// ekstra bir dal aç
app.use('/v1/api',  authAPI)

// uygulamayı portla
app.listen(port, () => {
    
    console.log(`Uygulama http://localhost:${port} üzerinde çalışıyor.`)
})
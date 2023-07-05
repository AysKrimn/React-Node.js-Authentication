const mongoose = require('mongoose')

const connect = async () => {
    
    let error = false;

    await mongoose.connect(process.env.DATABASE_CONNECTION_URI)
    .catch(error => {
        error = true;
        console.log("Veritabanına bağlanırken bir hata meydana geldi:", error)

    })
    .finally(() => {

        if (!error) {

            console.log("veritabanına başarılı bir şekilde bağlanıldı.")
        }
    })


}


module.exports = { databaseConnection: connect  }
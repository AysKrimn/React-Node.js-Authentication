const express = require('express')
const router = express.Router()

// MONGODB USER MODELINI ÇEK
const userModel = require('../../database/models/User')


router.post('/register', async (req, res) => {
    
    // sunucuya gönderilen verileri işle
    const { kullaniciAdi, kullaniciSifre } = req.body
    console.log(kullaniciAdi, kullaniciSifre)

    if (!kullaniciAdi || !kullaniciSifre) {

        return res.json({

            message: {
                type: "ERROR",
                content: "Kullanıcı adı veya kullanıcı şifresi boş bırakılamaz.",
            },
            data: []
        })
    }


    if (kullaniciAdi && kullaniciSifre) {

        if (kullaniciAdi.length < 3 || kullaniciSifre.length < 5) {

            return res.json({

                message: {
                    type: "ERROR",
                    content: "Kullanıcı adı minimum 3 karakter, şifre ise minimum 5 karakter içermelidir.",
                },

                data: []
            })
        }
    }
    // ilgili verinin passwordunu hashle

    // veritabanına kayıt-et
    const user = await userModel.find({ name: kullaniciAdi})
    // user lenght varsa kullanıcı vardır
    if (user.length) {

       return res.json({
            message: {
                type: "ERROR",
                content: "Böyle bir kullanıcı mevcut, lütfen farklı bir isim seçiniz.",
            },
            data: []
        })
    }


    // user modelini oluştur
    const newUser = await userModel.create({ name: kullaniciAdi, password: kullaniciSifre  })

    res.json({

        message: {

            type: "SUCCESS",
            content: "Başarılı bir şekilde kullanıcı oluşturuldu"
        },

        data: newUser
    })


})



// kullanıcı giriş isteği atmışsa
router.post('/login', async (req, res) => {



    const {kullaniciAdi, kullaniciSifre} = req.body

    if (!kullaniciAdi || !kullaniciSifre) {

        return res.json({

            message: {

                type: "ERROR",
                content: "Kullanıcı adı veya Kullanıcı Şifresi Boş Bırakılamaz"
            },
        })
    
    } else {

        if (kullaniciAdi.length < 3 || kullaniciSifre.length < 3) {

            return res.json({
    
                message: {
    
                    type: "ERROR",
                    content: "Kullanıcı adı veya Kullanıcı Şifresi 3 haneden küçük olamaz."
                },
            })
        }
    }



    console.log("LOGIN API RECEIVED: ", req.body)
    // veritabanında böyle bir kullanıcı var mı araştır:
    const user = await userModel.findOne({ name: kullaniciAdi, password: kullaniciSifre })
    console.log("bulunan user:", user)
    if (user === null) {

    return res.json({
    
        message: {

            type: "ERROR",
            content: "Böyle bir kullanıcı bulunamadı",
       
        },
    })

    }


    // kullanıcı bulunmuşsa 
    // bu user objesine geçici token at
    return res.json({
    
        message: {

            type: "SUCCESS",
            content: "Kullanıcı Bulundu",
            data: user,
            token: Date.now()
       
        },
    })


})

module.exports = router
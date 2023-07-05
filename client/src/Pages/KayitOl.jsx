import React, { useState } from 'react'
import Button from '../Components/Button'
import { Link, useNavigate } from 'react-router-dom'




export default function KayitOl() {

  const yonlendir = useNavigate()
  // stateler
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")


  const updateUsernameState = (event) => {

    // eventteki veriyi al
    setUsername(event.target.value)

  }


  const updatePasswordState = (event) => {

      setPassword(event.target.value)
  }



  // submiti halleden bir fonksiyon yarat
  const kayitOl = async (event) => {
    let ServerError = false;
    // bu fomra öğretilen herseyi sil
    event.preventDefault()
    // API isteği gerçekleştir
    const payload = {

        kullaniciAdi: username,
        kullaniciSifre: password
    }


    const apiRequest = await fetch("http://localhost:4000/v1/api/register", {

    method: "POST",
    headers: {
    'Content-Type': 'application/json'
    },

    body: JSON.stringify(payload)

    }).catch(e => {

      ServerError = true
      setError("Sunucuya bağlanırken bir hata meydana geldi. Bir kaç dakika sorna tekrar dene.")
    })


    if (ServerError) {

      return;
    }

    
    const data = await apiRequest.json()
    // erroru güncelle
    if (data.message.type === "ERROR") {
      
      setError(data.message.content)
    } else {

      yonlendir("/giris")

    }
    console.log("Sunucudan gelen veri:", data)
  }


  return (

    
    

    <div className='form-container'>
    
    <h1>Kayıt Ol</h1>
    <hr />

    <p className='errorClass'>{error}</p>
    <form onSubmit={kayitOl} >

    <input type="text" onChange={updateUsernameState} value={username} placeholder='Kullanıcı Adın' />
    <input type="password" onChange={updatePasswordState} value={password} placeholder='Şifre' />

    <p>Hesabın var mı? <Link to="/giris"> Buradan giriş yap</Link>  </p>
    <Button butonName="Kayıt Ol"></Button>
    </form>


    </div>
  )
}
